import { Leaderboard } from "../app/leaderboard-preview";

const Table = ({
  leaderboard,
  userEmail,
}: {
  leaderboard: Leaderboard[];
  userEmail?: string;
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-300 text-left">
      <thead>
        <tr>
          <th
            scope="col"
            className="flex-1 py-3.5 pl-4 pr-3 font-medium text-gray-900 sm:pr-20"
          >
            Name
          </th>

          <th scope="col" className="px-3 py-3.5 font-medium text-gray-900">
            # of tests
          </th>
          <th scope="col" className="px-3 py-3.5 font-medium text-gray-900">
            Average score
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {leaderboard.map((person) => (
          <tr
            key={person.user_email}
            className={userEmail === person.user_email ? "bg-primary/10" : ""}
          >
            <td className="flex-1 whitespace-nowrap py-4 pl-4 pr-3 text-gray-900 sm:pr-20">
              {person.user_name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-gray-500">
              {person.number_of_challenges}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-gray-500">
              {person.average_score.toFixed()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
