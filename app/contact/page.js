import Link from "next/link";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
      <div className="panel p-6 rounded-lg">
        <p className="text-gray-300 mb-4">
          Whether you’re interested in collaboration, commissioning an app, or
          sharing feedback, I’d love to hear from you.
        </p>
        <p className="text-gray-300">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:mobiustones@gmail.com"
            className="hover:text-green-900 underline"
          >
            mobiustones@gmail.com
          </a>
        </p>
        <Link
          className="text-gray-300 mt-2 hover:text-green-900 transition-colors"
          href="https://www.linkedin.com/in/kate-bark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>LinkedIn:</strong> Message me
        </Link>
      </div>
    </section>
  );
}
