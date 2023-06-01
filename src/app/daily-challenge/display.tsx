"use client";

import { useRef, useState } from "react";
import SuccessDialog from "./success-dialog";

export default function Display({
  sentenceChallenge,
}: {
  sentenceChallenge: string;
}) {
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

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

  const completeChallenge = () => {
    setShowSuccessDialog(true);
  };

  const regex = new RegExp("^" + userInput, "");

  const highlightedSentence = sentenceChallenge.replace(regex, function (str) {
    return "<span class='text-pink-600 font-semibold'>" + str + "</span>";
  });

  return (
    <>
      <div className="text-center">
        <h1 className="mb-2 text-xl font-semibold lg:text-4xl">
          Daily challenge
        </h1>
        <p>{new Date().toLocaleDateString()}</p>

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
        disabled={isComplete}
      ></textarea>

      <p>{timer} seconds</p>

      <div>
        <SuccessDialog
          isOpen={showSuccessDialog}
          handleClose={() => setShowSuccessDialog(false)}
          timer={timer}
        />
      </div>
    </>
  );
}
