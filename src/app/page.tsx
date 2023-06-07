import { Query } from "appwrite";

import LeaderboardPreview from "./leaderboard-preview";
import { databases } from "@/utils/appwrite";
import HomeLayout from "./home-layout";

async function getData() {
  const { documents: leaderboard } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    process.env.NEXT_PUBLIC_APPWRITE_SCORES_COLLECTION_ID || "",
    [Query.orderDesc("average_score")]
  );

  return leaderboard;
}

export default async function Home() {
  const leaderboard = (await getData()) as any;

  return (
    <HomeLayout>
      <LeaderboardPreview leaderboard={leaderboard} />
    </HomeLayout>
  );
}

export const revalidate = 60;
