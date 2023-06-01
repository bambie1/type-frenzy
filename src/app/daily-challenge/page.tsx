import { Query } from "appwrite";
import { currentUser } from "@clerk/nextjs";

import Display from "./display";
import NoChallengeFound from "./no-challenge-found";
import { databases } from "@/utils/appwrite";
import { today } from "@/utils/dateHelper";

async function getData() {
  const user = await currentUser();
  let userInfo = null;

  const { documents: challenges } = await databases.listDocuments(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    process.env.NEXT_PUBLIC_APPWRITE_CHALLENGES_COLLECTION_ID || "",
    [Query.equal("DateKey", today)]
  );

  // check if user has already completed daily challenge
  if (user) {
    const { documents: userDocuments } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
      process.env.NEXT_PUBLIC_APPWRITE_SCORES_COLLECTION_ID || "",
      [Query.equal("user_email", user?.emailAddresses[0].emailAddress)]
    );

    userInfo = userDocuments?.[0];
  }

  return { userInfo, challenges };
}

export default async function DailyChallenge() {
  const { userInfo, challenges } = await getData();

  if (!challenges?.length) return <NoChallengeFound />;

  return (
    <div className="relative mx-auto flex max-w-3xl flex-col gap-10">
      <Display
        sentenceChallenge={challenges[0].Challenge}
        userInfo={userInfo}
      />
    </div>
  );
}
