import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// CSS
import globalStyles from "./styles/global.css";
import fontStyles from "./styles/font.css";

// COMPONENTS
import Navbar from "./components/Navbar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: fontStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ctext%20y%3D%22.9em%22%20font-size%3D%2290%22%3E%F0%9F%8C%8E%EF%B8%8F%3C%2Ftext%3E%3C%2Fsvg%3E"
          type="image/svg+xml"
        ></link>
        <Meta />
        <Links />
      </head>
      <body className="bg-[var(--bg-page)] text-[var(--color)]">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
