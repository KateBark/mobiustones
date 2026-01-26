"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-12 py-6 text-center text-sm text-gray-400">
      <div className="max-w-5xl mx-auto px-6">
        <div className="opacity-80">
          © {new Date().getFullYear()} MobiusTones
        </div>
        <div className="flex justify-center space-x-20 mt-2">
          <Link
            href="https://github.com/KateBark/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline"
          >
            Github
          </Link>
          <Link
            href="https://kate-bark-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline"
          >
            Dev Portfolio
          </Link>

          <Link
            href="https://www.linkedin.com/in/kate-bark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
