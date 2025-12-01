"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      {/* Logo */}
      <div className="flex items-center justify-center mb-12 mt-4">
        <div
          className="
          rounded-full panel flex items-center justify-center logo-glow animate-glow
          w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72
        "
        >
          <Image
            src="/icon.png"
            alt="MobiusTones logo"
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Hero text */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4 fade-up">
        Thoughtful, minimalist mobile & web experiences
      </h1>

      <p className="text-base sm:text-lg text-muted-foreground mb-6 text-gray-300 px-2">
        Independent studio crafting simple, intuitive apps and games built with
        care.
      </p>

      {/* Buttons */}
      <div
        className="
        flex flex-wrap justify-center gap-4 mt-6
      "
      >
        <Link
          href="/projects"
          className="px-5 py-3 panel rounded-md hover:scale-[1.08] transition hover:text-green-900 min-w-[130px] text-center"
        >
          Explore Projects
        </Link>

        <Link
          href="/contact"
          className="px-5 py-3 panel rounded-md hover:scale-[1.08] transition hover:text-green-900 min-w-[130px] text-center"
          style={{ background: "transparent" }}
        >
          Contact
        </Link>
      </div>

      {/* Info sections */}
      <div className="mt-12 space-y-6 text-left">
        <div className="panel p-6 rounded-lg w-full">
          <h3 className="text-lg sm:text-xl font-medium mb-2">
            A little about our approach
          </h3>
          <p className="text-gray-300">
            Design and code meet simplicity. From cozy well-being apps to
            charming indie games, each project is designed to feel calm, usable,
            and intentionally minimal.
          </p>
        </div>

        <div className="panel p-6 rounded-lg w-full">
          <h3 className="text-lg sm:text-xl font-medium mb-2">
            Made with care
          </h3>
          <p className="text-gray-300">
            Built with React, Next.js (App Router), Tailwind CSS, and a focus on
            clarity over clutter.
          </p>
        </div>
      </div>
    </section>
  );
}
