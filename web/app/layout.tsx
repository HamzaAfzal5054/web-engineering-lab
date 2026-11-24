import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Engineering Lab",
  description: "Office hours and feedback",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <header>
          <strong>Web Engineering Lab</strong>
          <nav aria-label="Main navigation">
            <ul>
              <li><Link href="/" className="nav-link">Home</Link></li>
              <li><Link href="/office-hours" className="nav-link">Office Hours</Link></li>
              <li><Link href="/feedback" className="nav-link">Feedback</Link></li>
            </ul>
          </nav>
        </header>
        <main id="main-content" tabIndex={-1}>{children}</main>
        <footer><address>Contact your instructor for help.</address></footer>
      </body>
    </html>
  );
}
