"use client";

import { useState } from "react";

const SENTENCE_CHALLENGE =
  "TypeRacer is a multiplayer online browser-based typing game. In TypeRacer, players complete typing tests of various texts as fast as possible, competing against themselves or with other users online. It was launched in March 2008.";

export default function DailyChallenge() {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10">
      <div className="text-center">
        <h1 className="mb-2 text-xl font-bold lg:text-4xl">Daily challenge</h1>
        <p>{new Date().toLocaleDateString()}</p>
      </div>

      <p className="font-mono">{SENTENCE_CHALLENGE}</p>
      <textarea
        name="userInput"
        id=""
        cols={30}
        rows={10}
        className="rounded-xl border border-black p-4 font-mono"
      ></textarea>
    </div>
  );
}
