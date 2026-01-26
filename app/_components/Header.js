"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full panel">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/icon.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-medium text-sm sm:text-base">MobiusTones</span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-10">
          <Link
            href="/projects"
            className="text-xs sm:text-sm text-gray-300 hover:text-green-900 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-xs sm:text-sm text-gray-300 hover:text-green-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xs sm:text-sm text-gray-300 hover:text-green-900 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
