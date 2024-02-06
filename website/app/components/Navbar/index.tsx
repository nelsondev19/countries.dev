import { Link } from "@remix-run/react";

function Navbar() {
  return (
    <nav className="backdrop-blur-lg py-7 p-3 z-50 sticky top-0 m-auto max-w-screen-md">
      <div>
        <div className="flex justify-between gap-10">
          <div className="grid place-content-center">
            <Link
              to="/"
              className="font-semibold hover:underline hover:text-gray-100 duration-300"
            >
              Countries API
            </Link>
          </div>
          <div className="grid place-content-center">
            <ul className="flex gap-3">
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

const paths = [
  {
    id: "1",
    name: "Home",
    path: "#",
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
  {
    id: "4",
    name: "About",
    path: "/contact",
  },
];
