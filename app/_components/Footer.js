export default function Footer() {
  return (
    <footer className="w-full mt-12 py-6 text-center text-sm text-gray-400">
      <div className="max-w-5xl mx-auto px-6">
        <div className="opacity-80">
          © {new Date().getFullYear()} MobiusTones — Built with React & Next.js
        </div>
      </div>
    </footer>
  );
}
