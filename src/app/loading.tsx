import Link from "next/link";

import HomeLayout from "./home-layout";

export default function HomeLoading() {
  return (
    <HomeLayout>
      <div>
        <div className="mt-8 h-48 w-full animate-pulse rounded-lg bg-gray-200"></div>
        <Link href="/leaderboard" className="mt-6 inline-flex underline">
          See full leaderboard
        </Link>
      </div>
    </HomeLayout>
  );
}
