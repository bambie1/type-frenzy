import { ReactNode } from "react";

import { today } from "@/utils/dateHelper";

export default async function DialyChallengeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col text-center">
      <h1 className="mb-2 text-xl font-semibold lg:text-4xl">
        Daily challenge
      </h1>
      <p>{today}</p>
      {children}
    </div>
  );
}

export const revalidate = 0;
