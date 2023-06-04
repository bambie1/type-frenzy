import { currentUser } from "@clerk/nextjs";
import { Query } from "appwrite";

import { databases } from "@/utils/appwrite";
import Table from "../table";

async function getData() {
  const { documents: leaderboard } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    process.env.NEXT_PUBLIC_APPWRITE_SCORES_COLLECTION_ID || "",
    [Query.orderDesc("average_score")]
  );

  return leaderboard;
}

export default async function Leaderboard() {
  const user = await currentUser();

  const leaderboard = (await getData()) as any;

  return (
    <Table
      leaderboard={leaderboard}
      userEmail={user?.emailAddresses?.[0].emailAddress}
    />
  );
}

export const revalidate = 0;
