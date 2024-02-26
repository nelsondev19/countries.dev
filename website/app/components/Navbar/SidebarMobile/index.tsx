import { Link, useLocation } from "@remix-run/react";

function SidebarMobile() {
  const { pathname } = useLocation();

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
      <aside className="fixed top-0 left-0 z-40 w-[80%] md:w-[45%] h-screen">
        <div
          id="sidebar-mobile"
          className="h-full pt-4 bg-[var(--bg-page)] hide-sidebar-mobile"
        >
          <div className="flex justify-end mb-3 px-3">
            <button className="bg-transparent-effect rounded-lg p-2">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            {Items.map(({ icon, name, path }) => {
              return (
                <div key={name}>
                  <Link
                    to={path}
                    className={`flex gap-2  ${
                      pathname === path
                        ? "bg-[#F9FAFB] fill-black border-l-[#007047]"
                        : "fill-[#90959F]"
                    } hover:bg-[#F9FAFB] cursor-pointer p-3 border-2 border-transparent`}
                    id={`nav-settings-${name.toLowerCase()}`}
                  >
                    <div className="flex justify-center items-center">
                      {icon}
                    </div>
                    <div
                      className={`grid place-content-center  ${
                        pathname === path ? "text-current" : "text-[#747A87]"
                      }`}
                    >
                      {name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </button>
  );
}

export default SidebarMobile;

const Items = [
  {
    name: "Profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 256 256"
      >
        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
      </svg>
    ),
    path: "/dashboard/settings/profile",
  },
  {
    name: "KYC",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 256 256"
      >
        <path d="M200,112a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h40A8,8,0,0,1,200,112Zm-8,24H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm40-80V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Zm-80.26-34a8,8,0,1,1-15.5,4c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,1,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,135.75,166ZM96,136a16,16,0,1,0-16-16A16,16,0,0,0,96,136Z"></path>
      </svg>
    ),
    path: "/dashboard/settings/kyc",
  },
  {
    name: "Password",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 256 256"
      >
        <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
      </svg>
    ),
    path: "/dashboard/settings/password",
  },
  {
    name: "Delete account",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 256 256"
      >
        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
      </svg>
    ),
    path: "/dashboard/settings/delete-account",
  },
];
