"use client";

import { useRef, useState } from "react";
import SuccessDialog from "./success-dialog";

const SENTENCE_CHALLENGE =
  "TypeRacer is a multiplayer online browser-based typing game.";

export default function DailyChallenge() {
  const [userInput, setUserInput] = useState("");
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

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

    if (userInput.trim() === SENTENCE_CHALLENGE) {
      stopTimer();
      setIsCompleted(true);
    }
  };

  const regex = new RegExp("^" + userInput, "");

  const highlightedSentence = SENTENCE_CHALLENGE.replace(regex, function (str) {
    return "<span class='text-pink-600 font-bold'>" + str + "</span>";
  });

  return (
    <div className="relative mx-auto flex max-w-3xl flex-col gap-10">
      <div className="text-center">
        <h1 className="mb-2 text-xl font-bold lg:text-4xl">Daily challenge</h1>
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
        disabled={isCompleted}
      ></textarea>

      <p>{timer} seconds</p>

      {/* <div>
        <SuccessDialog isOpen={isCompleted} />
      </div> */}
    </div>
  );
}
