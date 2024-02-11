import { Link } from "@remix-run/react";
import BtnGitHubStars from "./BtnGitHubStars";

function Navbar() {
  return (
    <>
      <nav className="hidden md:block backdrop-blur-lg py-5 px-3 z-50 sticky top-0 m-auto max-w-screen-lg">
        <div>
          <div className="flex justify-between gap-10">
            <div className="grid place-content-center">
              <Link
                to="/"
                className="font-semibold hover:underline hover:text-gray-100 duration-300"
              >
                🌎 Countries API
              </Link>
            </div>
            <div className="grid place-content-center">
              <ol className="flex gap-3 justify-center items-center">
                {paths.map(({ name, path }) => {
                  return (
                    <li key={`path-${name.toLowerCase()}`}>
                      <Link
                        to={path}
                        className="font-semibold hover:underline hover:text-gray-100 duration-300"
                        id={`link-${name.toLowerCase()}`}
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}

                <BtnGitHubStars />
              </ol>
            </div>
          </div>
        </div>
      </nav>

      <nav className="block md:hidden backdrop-blur-lg p-3 z-50 sticky top-0 m-auto max-w-screen-lg">
        <div className="flex justify-between gap-10">
          <div className="grid place-content-center">
            <Link
              to="/"
              className="font-semibold hover:underline hover:text-gray-100 duration-300"
            >
              🌎 Countries API
            </Link>
          </div>
          <div className="grid place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-7 fill-current"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

const paths = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "Playground",
    path: "https://playground.countries.dev",
  },
  {
    id: "3",
    name: "Status",
    path: "https://status.countries.dev",
  },
];
