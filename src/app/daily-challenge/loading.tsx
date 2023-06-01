import { today } from "@/utils/dateHelper";

export default function Loading() {
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col text-center">
      <h1 className="mb-2 text-xl font-semibold lg:text-4xl">
        Daily challenge
      </h1>
      <p>{today}</p>

      <div className="mt-6 h-20 w-full animate-pulse rounded-xl bg-gray-200" />

      <div className="mt-10 h-60 w-full animate-pulse rounded-xl bg-gray-100" />
    </div>
  );
}
