"use client";

import { useState } from "react";

const SENTENCE_CHALLENGE =
  "TypeRacer is a multiplayer online browser-based typing game. In TypeRacer, players complete typing tests of various texts as fast as possible, competing against themselves or with other users online. It was launched in March 2008.";

export default function DailyChallenge() {
  const [userInput, setUserInput] = useState("");

  return (
    <main className="flex flex-col gap-10 p-24">
      <h1>Daily challenge</h1>

      <p>{SENTENCE_CHALLENGE}</p>
      <textarea name="userInput" id="" cols={30} rows={10}></textarea>
    </main>
  );
}
