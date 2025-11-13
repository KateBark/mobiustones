"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-white/4 panel">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/mobiustones-dev-logo.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-medium">MobiusTones</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/projects"
            className="text-sm text-gray-300 hover:underline"
          >
            Projects
          </Link>
          <Link href="/about" className="text-sm text-gray-300 hover:underline">
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-300 hover:underline"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
