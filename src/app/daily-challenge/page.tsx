import { Query } from "appwrite";

import { databases } from "@/utils/appwrite";
import Display from "./display";

async function getData() {
  const { documents } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "",
    [Query.equal("DateKey", new Date().toLocaleDateString())]
  );

  return documents;
}

export default async function DailyChallenge() {
  const data = await getData();

  return (
    <div className="relative mx-auto flex max-w-3xl flex-col gap-10">
      <Display sentenceChallenge={data[0].Challenge} />
    </div>
  );
}
