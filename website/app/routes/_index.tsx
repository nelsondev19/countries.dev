import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

// COMPONENTS
import Faq from "../components/Faq";
import OpenSource from "../components/OpenSource";

// FUNCTIONS
import { handleCopyClick } from "../functions/handleCopyClick";

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
  const text = "https://api.countries.dev/v1/graphql";

  const [CopiedClipboard, setCopiedClipboard] = useState(false);

  return (
    <main className="p-3">
      <div className="h-[80vh] grid place-content-center">
        <div className="flex justify-center items-center gap-2 px-3 py-[9px] mb-10 mx-5 md:mx-80 md:w-auto bg-transparent-effect duration-300 text-center font-semibold rounded-xl border border-gray-700 hover:border-gray-600">
          <span id="endpoint" className="text-sm">
            {text}
          </span>

          <figure>
            {CopiedClipboard ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 fill-current"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 fill-current cursor-pointer"
                viewBox="0 0 256 256"
                onClick={() => handleCopyClick({ text, setCopiedClipboard })}
              >
                <path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>
              </svg>
            )}
          </figure>
        </div>
        <h1
          id="title"
          className="text-center text-3xl md:text-6xl font-semibold text-gray-200"
        >
          Countries API
        </h1>
        <p id="description" className="text-center max-w-screen-sm m-auto mt-4">
          A powerful public GraphQL API designed for developers and data
          enthusiasts who want to access country information easily. You can use
          in any project.
        </p>
        <div className="flex justify-center items-center mt-7">
          <Link
            to="https://playground.countries.dev"
            target="_blank"
            className="p-2 gap-2 text-sm flex justify-center items-center bg-transparent-effect duration-300 text-center font-semibold rounded-xl border border-gray-700 hover:border-gray-600"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            Try API Now
          </Link>
        </div>
      </div>

      <Faq />

     <OpenSource/>
    </main>
  );
}
