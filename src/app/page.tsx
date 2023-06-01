import Link from "next/link";

import LeaderboardPreview from "./leaderboard-preview";

export default async function Home() {
  // const data = await getData();

  return (
    <div className="mx-auto flex flex-col items-center justify-between text-center lg:max-w-3xl">
      <h1 className="mb-4 text-3xl font-semibold lg:text-5xl">
        Test your typing skills and climb the leaderboard!
      </h1>
      <p className="mx-auto w-[80%] text-lg text-gray-600 lg:text-xl">
        Challenge your typing speed and accuracy every day with our addictive
        daily typing tests.
      </p>

      <div className="mt-6 flex flex-col items-center gap-4 lg:mt-14">
        <Link
          href="/daily-challenge"
          className="group flex items-center gap-2 rounded-md bg-primary px-6 py-4 font-semibold shadow-keycap transition duration-200 hover:shadow-keycap-hover"
        >
          Start daily challenge{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="transitionte h-6 w-6 duration-200 group-hover:translate-x-1"
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
        <p className="text-lg font-medium">LEADERBOARD</p>
        <LeaderboardPreview />
      </div>
    </div>
  );
}
