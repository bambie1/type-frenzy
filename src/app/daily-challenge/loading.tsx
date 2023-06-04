import { today } from "@/utils/dateHelper";

export default function Loading() {
  return (
    <>
      <div className="mt-6 h-20 w-full animate-pulse rounded-xl bg-gray-200" />

      <div className="mt-10 h-60 w-full animate-pulse rounded-xl bg-gray-100" />
    </>
  );
}
