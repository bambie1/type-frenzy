import Link from "next/link";

import Table from "./table";

export interface Leaderboard {
  user_email: string;
  user_name: string;
  number_of_challenges: number;
  average_score: number;
}

interface Props {
  leaderboard: Leaderboard[];
}

const LeaderboardPreview = ({ leaderboard }: Props) => {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <Table leaderboard={leaderboard.slice(0, 4)} />
        </div>

        <Link href="/leaderboard" className="mt-6 inline-flex underline">
          See full leaderboard
        </Link>
      </div>
    </div>
  );
};

export default LeaderboardPreview;
