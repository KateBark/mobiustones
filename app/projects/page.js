import Image from "next/image";

export const metadata = { title: "Projects" };

const projects = [
  {
    title: "CompassRosy: The Cozy Oracle",
    desc: "A soothing digital oracle to help users reconnect without the noise of social media.",
    tech: "React, Next.js, Capacitor",
    status: "In Google Play beta testing",
    // add Download from Google Play button
    img: "/compassrosy-logo.jpeg",
    link: "https://compassrosy.vercel.app",
  },
  {
    title: "Emerson Fyne - Official Website",
    desc: "A clean, immersive portfolio showcasing music of Emerson Fyne.",
    tech: "Next.js, React, Tailwind CSS, Vercel",
    status: "Live",
    img: "/ef-website-logo.png",
    link: "https://emersonfyne.com",
  },
  {
    title: "Choice Canopy: Your Decision Helper",
    desc: "A supportive AI-powered app to eliminate analysis paralysis.",
    tech: "OpenAI API,Next.js, Capacitor",
    status: "In development",
    // add Download from Google Play button
    img: "/choice-canopy-logo.png",
  },
  {
    title: "Stalagmite (in development)",
    desc: "A retro-style flying game through glowing caves — fast gameplay, pixel charm.",
    tech: "React, Next.js, Capacitor",
    status: "Early development",
    img: "/stalagmite.png",
  },
  {
    title: "Sleepy Phone (concept)",
    desc: "A cozy sleep-tracking app that rewards phone-free time with cute animations.",
    tech: "Design concept",
    status: "Concept",
    img: "/sleepy-phone-favicon.png",
  },
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article key={i} className="panel p-5 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-md bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center flex-shrink-0">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.desc}</p>
                <p className="text-xs text-gray-400 mt-2">
                  <strong>Tech:</strong> {p.tech} • <strong>Status:</strong>{" "}
                  {p.status}
                </p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-600 hover:underline mt-2 inline-block"
                  >
                    Visit →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
