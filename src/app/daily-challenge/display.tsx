"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ID } from "appwrite";

import SuccessDialog from "./success-dialog";
import { databases } from "@/utils/appwrite";
import { today } from "@/utils/dateHelper";

export default function Display({
  sentenceChallenge,
  userInfo,
}: {
  sentenceChallenge: string;
  userInfo: any;
}) {
  const authUserHasCompletedChallenge = userInfo?.last_challenge_day === today;

  const { user } = useUser();
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    if (authUserHasCompletedChallenge) setShowSuccessDialog(true);
  }, [authUserHasCompletedChallenge]);

  const intervalRef = useRef<any>();

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => clearInterval(intervalRef.current);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);

    if (!isRunning) startTimer();

    if (e.target.value.trim() === sentenceChallenge) {
      stopTimer();
      setIsComplete(true);
      completeChallenge();
    }
  };

  const completeChallenge = async () => {
    const newTypingSpeed = parseFloat(
      (sentenceChallenge.length / 5 / (timer / 60)).toFixed(2)
    );

    if (!user) {
      setTypingSpeed(newTypingSpeed);
      setShowSuccessDialog(true);
      return;
    }

    try {
      if (!userInfo) {
        await databases.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_SCORES_COLLECTION_ID!,
          ID.unique(),
          {
            user_email: user.emailAddresses[0].emailAddress,
            user_name: `${user.firstName} ${user.lastName?.[0]}`,
            average_score: newTypingSpeed,
            last_challenge_day: today,
            number_of_challenges: 1,
            last_challenge_time: timer,
          }
        );
      } else {
        const averageScore =
          (userInfo.average_score * userInfo.number_of_challenges +
            newTypingSpeed) /
          (userInfo.number_of_challenges + 1);

        await databases.updateDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_SCORES_COLLECTION_ID!,
          userInfo.$id,
          {
            average_score: averageScore,
            last_challenge_day: today,
            number_of_challenges: userInfo.number_of_challenges + 1,
            last_challenge_time: timer,
          }
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTypingSpeed(newTypingSpeed);
      setShowSuccessDialog(true);
    }
  };

  const regex = new RegExp("^" + userInput, "");

  const highlightedSentence = sentenceChallenge.replace(regex, function (str) {
    return "<span class='text-pink-600 font-semibold'>" + str + "</span>";
  });

  return (
    <div className="flex flex-col gap-10">
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: highlightedSentence }}
          className="mt-6 font-mono text-gray-500"
        ></div>
      </div>

      <textarea
        name="userInput"
        id=""
        cols={30}
        rows={10}
        className="rounded-xl border border-black p-4 font-mono"
        value={userInput}
        onChange={handleChange}
        onPaste={(e) => e.preventDefault()}
        disabled={isComplete || authUserHasCompletedChallenge}
        autoCorrect="off"
        autoFocus
      ></textarea>

      <div className="mt-auto">
        <div className="inline-flex items-center justify-center gap-2 self-center rounded-lg bg-primary/20 px-6 py-2 text-gray-600">
          <span className="text-3xl font-medium">{timer}</span> seconds
        </div>
        <p className="mt-2 text-sm text-gray-500">TIMER</p>
      </div>

      <div>
        <SuccessDialog
          isOpen={showSuccessDialog}
          handleClose={() => setShowSuccessDialog(false)}
          timer={
            authUserHasCompletedChallenge
              ? userInfo?.last_challenge_time
              : timer
          }
          typingSpeed={typingSpeed}
        />
      </div>
    </div>
  );
}
