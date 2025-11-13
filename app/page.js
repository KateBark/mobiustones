"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center mb-12 mt-4">
        <div className="w-70 h-70 rounded-full panel flex items-center justify-center logo-glow animate-glow">
          <Image
            src="/icon.png"
            alt="MobiusTones logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      <h1 className="text-4xl font-semibold mb-4 fade-up">
        Thoughtful, minimalist mobile & web experiences
      </h1>
      <p className="text-muted-foreground mb-6 text-gray-300">
        Independent studio crafting simple, intuitive apps and games built with
        care.
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <Link
          href="/projects"
          className="px-5 py-3 panel rounded-md hover:scale-[1.08] transition hover:text-green-900"
        >
          Explore Projects
        </Link>
        <Link
          href="/contact"
          className="px-5 py-3 panel rounded-md hover:scale-[1.08] transition hover:text-green-900"
          style={{ background: "transparent" }}
        >
          Contact
        </Link>
      </div>

      <div className="mt-12 text-left space-y-6">
        <div className="panel p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-2">
            A little about our approach
          </h3>
          <p className="text-gray-300">
            Design and code meet simplicity. From cozy well-being apps to
            charming indie games, each project is designed to feel calm, usable,
            and intentionally minimal.
          </p>
        </div>

        <div className="panel p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-2">Made with care</h3>
          <p className="text-gray-300">
            Built with React, Next.js (App Router), Tailwind CSS, and a focus on
            clarity over clutter.
          </p>
        </div>
      </div>
    </section>
  );
}
