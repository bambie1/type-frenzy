import { ReactNode } from "react";

export default async function LeaderboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
      <h1 className="mb-2 text-center text-xl font-semibold lg:text-4xl">
        Leaderboard
      </h1>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 0;
