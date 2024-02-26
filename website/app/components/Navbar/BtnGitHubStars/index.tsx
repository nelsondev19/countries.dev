import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

function BtnGitHubStars() {
  const [Stars, setStars] = useState(0);

  useEffect(() => {
    const fetchStars = async () => {
      const res = await fetch(
        "https://api.github.com/repos/nelsondev19/countries.dev"
      );

      if (res.status === 200) {
        const { stargazers_count } = await res.json();

        setStars(stargazers_count);
      }
    };

    fetchStars();
  }, []);
  return (
    <Link
      to="https://github.com/nelsondev19/countries.dev"
      className="p-2 gap-2 text-sm max-w-52 flex justify-center items-center bg-transparent-effect duration-300 text-center font-semibold rounded-xl border border-gray-700 hover:border-gray-600"
      rel="external"
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
      Star on GitHub
      <span className="bg-[var(--bg-btn)] text-black px-2 py-1 rounded-xl">
        {Stars.toLocaleString("en-US")}
      </span>
    </Link>
  );
}

export default BtnGitHubStars;
