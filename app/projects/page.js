import Image from "next/image";

const projects = [
  {
    title: "CompassRosy: The Cozy Oracle",
    desc: "A soothing digital oracle offering gentle prompts and daily reflections. Designed to help users reconnect without the noise of social media.",
    tech: "React, Next.js, Vercel",
    status: "Released on Google Play",
    img: "/placeholder-project-1.png",
  },
  {
    title: "Stalagmite (in development)",
    desc: "A retro-style flying game through glowing caves—fast gameplay, pixel charm.",
    tech: "React Native (Expo)",
    status: "Early development",
    img: "/placeholder-project-2.png",
  },
  {
    title: "Food Frenzy (concept)",
    desc: "A cheerful matching game with ice cream scoops and unlockable flavours.",
    tech: "Design concept",
    status: "Concept",
    img: "/placeholder-project-3.png",
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
              <div className="w-20 h-20 rounded-md bg-gradient-to-br from-white/3 to-white/2 flex items-center justify-center">
                {/* placeholder image box */}
                <Image
                  src={p.img}
                  alt={p.title}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.desc}</p>
                <p className="text-xs text-gray-400 mt-2">
                  <strong>Tech:</strong> {p.tech} • <strong>Status:</strong>{" "}
                  {p.status}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
