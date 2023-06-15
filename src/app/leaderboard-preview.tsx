"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { databases } from "@/utils/appwrite";
import { Query } from "appwrite";

import Table from "./table";

export interface Leaderboard {
  user_email: string;
  user_name: string;
  number_of_challenges: number;
  average_score: number;
}

const LeaderboardPreview = () => {
  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);

  useEffect(() => {
    getLeaderboardData();
  }, []);

  async function getLeaderboardData() {
    const { documents: leaderboard } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_SCORES_COLLECTION_ID || "",
      [Query.orderDesc("average_score")]
    );

    setLeaderboard(leaderboard as any);
  }

  if (!leaderboard.length)
    return (
      <div>
        <div className="mt-8 h-48 w-full animate-pulse rounded-lg bg-gray-200"></div>
        <Link href="/leaderboard" className="mt-6 inline-flex underline">
          See full leaderboard
        </Link>
      </div>
    );

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <Table leaderboard={leaderboard.slice(0, 3)} />
        </div>

        <Link href="/leaderboard" className="mt-6 inline-flex underline">
          See full leaderboard
        </Link>
      </div>
    </div>
  );
};

export default LeaderboardPreview;
