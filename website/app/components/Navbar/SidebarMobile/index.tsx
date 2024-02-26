import { Link } from "@remix-run/react";

interface Props {
  paths: Array<{
    id: string;
    name: string;
    path: string;
    rel: string;
  }>;
}

function SidebarMobile({ paths }: Props) {
  return (
    <button
      id="sidebar-bg-mobile"
      className="z-30 bg-opacity-80 bg-black backdrop-blur-sm absolute top-0 right-0 bottom-0 left-0 duration-300 hide-bg-sidebar-mobile"
      onClick={() => {
        const sidebarMobile = document.getElementById(
          "sidebar-mobile"
        ) as HTMLElement;

        sidebarMobile.classList.remove("show-sidebar-mobile");
        sidebarMobile.classList.add("hide-sidebar-mobile");

        const sidebarBgMobile = document.getElementById(
          "sidebar-bg-mobile"
        ) as HTMLElement;

        sidebarBgMobile.classList.add("hide-bg-sidebar-mobile");
        document.body.classList.remove("overflow-hidden");
      }}
    >
      <aside className="fixed top-0 left-0 z-40 w-[60%] h-screen">
        <nav
          id="sidebar-mobile"
          className="h-full pt-4 bg-[var(--bg-page)] hide-sidebar-mobile"
        >
          <ul>
            {paths.map(({ name, path, rel }) => {
              return (
                <li key={name} className="flex m-3">
                  <Link
                    to={path}
                    className="font-semibold hover:underline hover:text-gray-100"
                    id={`link-${name.toLowerCase()}`}
                    rel={rel}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </button>
  );
}

export default SidebarMobile;
