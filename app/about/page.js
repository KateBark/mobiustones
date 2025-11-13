export const metadata = { title: "About" };

export default function About() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">About MobiusTones</h2>
      <div className="panel p-6 rounded-lg">
        <p className="text-gray-300 mb-3">
          MobiusTones is an independent development studio founded by{" "}
          <strong>Kate Bark</strong>, a Canadian software engineer and designer.
        </p>
        <p className="text-gray-300 mb-3">
          With a background in philosophy and a passion for meaningful digital
          experiences, Kate builds apps and games that combine calm aesthetics
          with simple, satisfying interactivity.
        </p>
        <p className="text-gray-300">
          The name <em>MobiusTones</em> reflects a commitment to continuous
          learning and creative evolution — each project is a step toward more
          mindful, artful technology.
        </p>
      </div>
    </section>
  );
}
