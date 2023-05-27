import Link from "next/link";

const people = [
  {
    name: "Lindsay Walton",
    numberOfTests: 10,
    averageScore: 143,
  },
  {
    name: "Olly Perth",
    numberOfTests: 4,
    averageScore: 31,
  },
  {
    name: "Bobby Walton",
    numberOfTests: 10,
    averageScore: 143,
  },
];

export default function Leaderboard() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10">
      <h1 className="mb-2 text-center text-xl font-bold lg:text-4xl">
        Leaderboard
      </h1>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300 text-left">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="flex-1 py-3.5 pl-4 pr-3 font-medium text-gray-900 sm:pl-0 sm:pr-20"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 font-medium text-gray-900"
                  >
                    # of tests
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 font-medium text-gray-900"
                  >
                    Average score
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.name}>
                    <td className="flex-1 whitespace-nowrap py-4 pl-4 pr-3 text-gray-900 sm:pl-0 sm:pr-20">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                      {person.numberOfTests}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-gray-500">
                      {person.averageScore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
