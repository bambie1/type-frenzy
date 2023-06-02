import Link from "next/link";

import LeaderboardPreview from "./leaderboard-preview";
import { databases } from "@/utils/appwrite";

async function getData() {
  const { documents: leaderboard } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    process.env.NEXT_PUBLIC_APPWRITE_SCORES_COLLECTION_ID || ""
  );

  return leaderboard;
}

export default async function Home() {
  const leaderboard = (await getData()) as any;

  return (
    <div className="mx-auto flex flex-col items-center justify-between text-center lg:max-w-3xl">
      <h1 className="mb-4 text-3xl font-semibold lg:text-5xl">
        Test your typing skills and climb the leaderboard!
      </h1>
      <p className="mx-auto leading-tight text-gray-600 md:w-[80%] lg:text-xl">
        Challenge your typing speed and accuracy every day with our addictive
        daily typing tests.
      </p>

      <Link
        href="/daily-challenge"
        className="group mt-6 flex items-center gap-2 rounded-md bg-primary px-6 py-4 font-semibold shadow-keycap transition duration-200 hover:shadow-keycap-hover lg:mt-14"
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

      <div className="mt-20">
        <p className="text-lg font-medium">LEADERBOARD</p>
        <LeaderboardPreview leaderboard={leaderboard} />
      </div>
    </div>
  );
}
