import Link from "next/link";

import LeaderboardPreview from "./leaderboard-preview";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center justify-between lg:max-w-3xl mx-auto">
      <h1 className="font-bold mb-4 text-3xl lg:text-5xl">
        Test your typing skills and climb the leaderboard!
      </h1>
      <p className="text-lg lg:text-xl w-[80%] mx-auto text-gray-600">
        Challenge your typing speed and accuracy every day with our addictive
        daily typing tests.
      </p>

      <div className="mt-6 lg:mt-14 flex flex-col items-center gap-4">
        <Link
          href="/daily-challenge"
          className="py-4 px-6 group flex items-center gap-2 font-semibold rounded-md bg-primary shadow-keycap hover:shadow-keycap-hover transition duration-200"
        >
          Start daily challenge{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 group-hover:translate-x-1 transitionte duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
        <Link href="/learn-more" className="underline">
          Learn more
        </Link>
      </div>

      <div className="mt-20">
        <p className="font-medium text-lg">LEADERBOARD</p>
        <LeaderboardPreview />
      </div>
    </div>
  );
}
