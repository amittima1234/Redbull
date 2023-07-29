import "./globals.css";

import Link from "next/link";

export const metadata = {
  title: "RedBull",
  description: "RedBull: A Servers' list site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-slate-100 container mx-auto p-4">
        <nav className="container mx-auto p-2">
          <Link className="container mx-auto p-2" href="/">
            Home
          </Link>
          <Link className="container mx-auto p-2" href="/servers">
            Servers
          </Link>
          <Link className="container mx-auto p-2" href="/upload">
            Upload
          </Link>
          <Link className="container mx-auto p-2" href="/versions">
            Versions
          </Link>
        </nav>
        <main className="container mx-auto p-1">{children}</main>
      </body>
    </html>
  );
}
