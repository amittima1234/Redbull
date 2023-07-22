import "./globals.css"

import Link from "next/link";

export const metadata = {
  title: "RedBull",
  description: "RedBull: A Servers' list site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-slate-100 container mx-auto p-4">
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/servers">Servers</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
