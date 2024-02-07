import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { handleCopyClick } from "../functions/handleCopyClick";
import BtnGitHubStars from "../components/Navbar/BtnGitHubStars";

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
        <p
          id="description"
          className="text-center max-w-screen-sm m-auto mt-4"
        >
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

      <div className="h-[50vh">
        <h2
          id="title-open-source"
          className="text-2xl md:text-5xl gap-2 font-semibold text-gray-200 flex justify-center items-center"
        >
          Open Source{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38.67258"
            height="46.06185"
            className="fill-current"
            viewBox="0 0 38.67258 46.06185"
          >
            <path
              d="M21.80088,45.33602c3.58974-4.38591,6.94814-8.95969,10.00375-13.73404,2.86574-4.47768,5.81646-9.27804,6.63859-14.62174,.73327-4.76619-.24381-9.90652-3.62485-13.51203C31.86184,.3154,27.08696-.858,23.0146,.65737c-2.17098,.80784-4.12471,2.29627-5.14654,4.41999-1.47908,3.07408-1.04556,6.39616-.49073,9.63746l4.56937-1.9264c-1.62023-3.70349-3.75608-7.572-7.86667-8.88482-3.77491-1.20561-8.11046,.30736-10.76739,3.13326C.17625,10.37272-.49135,15.10445,.30993,19.46737c.84114,4.57994,3.53759,8.51025,6.35773,12.10143,3.59938,4.58347,7.36162,9.04609,11.04794,13.55984,.85468,1.04652,2.64838,.88715,3.53553,0,1.03483-1.03483,.8568-2.48641,0-3.53553-2.78553-3.41077-5.57106-6.82154-8.35658-10.23231-2.40199-2.94115-4.87894-5.87361-6.52722-9.32514-1.37629-2.88196-2.01165-6.53576-.73129-9.56713,.98421-2.33022,3.45364-4.15895,6.01491-3.97726,3.28471,.23301,4.83431,4.20557,5.97841,6.82074,.49198,1.12456,2.09897,1.47253,3.12188,1.02289,1.2099-.53184,1.66396-1.68474,1.4475-2.94929-.31358-1.83195-.74253-3.99665-.01331-5.78466,.45475-1.11501,1.42193-1.85923,2.43997-2.22431,2.58585-.92733,5.40517-.15643,7.16385,2.22539,5.06337,6.85745-.62648,15.75519-4.42618,21.67044-2.79186,4.34627-5.82598,8.53065-9.09771,12.52801-.85449,1.04401-1.0215,2.51403,0,3.53553,.88184,.88184,2.67611,1.05004,3.53553,0h0Z"
              origin="undraw"
            />
          </svg>
        </h2>
        <p
          id="description-open-source"
          className="text-center max-w-screen-sm m-auto mt-4"
        >
          Our database is available on GitHub - feel free to read, review, or
          contribute to it however you want!.
        </p>

        <div className="flex justify-center items-center mt-5">
          <BtnGitHubStars />
        </div>
      </div>
    </main>
  );
}
