export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-3xl font-bold text-blue-600">
        StudyFlow AI
      </h1>

      <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition">
        Get Started
      </button>
    </nav>
  );
}