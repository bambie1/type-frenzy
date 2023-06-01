import { today } from "@/utils/dateHelper";

const NoChallengeFound = () => {
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col text-center">
      <h1 className="mb-2 text-xl font-semibold lg:text-4xl">
        Daily challenge
      </h1>
      <p>{today}</p>

      <div className="mt-16">
        <p>
          No challenge found for today.
          <br /> Check back tomorrow
        </p>
      </div>
    </div>
  );
};

export default NoChallengeFound;
