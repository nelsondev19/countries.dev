import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Countries API" },
    {
      name: "description",
      content:
        "A powerful and public GraphQL API designed to empower developers and data enthusiasts. You can use in any project.",
    },
  ];
};

export default function Index() {
  return (
    <main className="p-3">
      <div className="h-[80vh] grid place-content-center">
        <div className="flex justify-center items-center gap-3 px-5 py-[9px] mb-10 mx-80 w-auto bg-transparent-effect duration-300 text-center font-semibold rounded-xl border border-gray-700 hover:border-gray-600">
          <span>https://api.countries.dev/v1/graphql</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 fill-current cursor-pointer"
            viewBox="0 0 256 256"
          >
            <path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>
          </svg>
        </div>
        <h1 className="text-center text-6xl font-semibold text-gray-200">
          Countries API
        </h1>
        <p className="text-center text-xl max-w-screen-md m-auto mt-4">
          A powerful public GraphQL API designed for developers and data
          enthusiasts who want to access country information easily. You can use
          in any project.
        </p>
        <div className="flex justify-center items-center mt-7">
          <Link
            to="https://playground.countries.dev"
            target="_blank"
            className="px-5 py-[9px] bg-transparent-effect duration-300 text-center font-semibold rounded-xl border border-gray-700 hover:border-gray-600"
            rel="noreferrer"
          >
            Try API Now
          </Link>
        </div>
      </div>
    </main>
  );
}
