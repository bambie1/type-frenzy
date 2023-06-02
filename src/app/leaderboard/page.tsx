import { databases } from "@/utils/appwrite";
import Table from "../table";
import { currentUser } from "@clerk/nextjs";

async function getData() {
  const { documents: leaderboard } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    process.env.NEXT_PUBLIC_APPWRITE_SCORES_COLLECTION_ID || ""
  );

  return leaderboard;
}

export default async function Leaderboard() {
  const user = await currentUser();

  const leaderboard = (await getData()) as any;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10">
      <h1 className="mb-2 text-center text-xl font-semibold lg:text-4xl">
        Leaderboard
      </h1>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <Table
              leaderboard={leaderboard}
              userEmail={user?.emailAddresses?.[0].emailAddress}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 0;
