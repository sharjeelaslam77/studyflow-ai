export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-8 py-24 text-center">
      <h2 className="text-6xl font-extrabold leading-tight">
        Study Smarter with{" "}
        <span className="text-blue-600">AI</span>
      </h2>

      <p className="mt-8 max-w-2xl text-xl text-gray-600">
        Upload your notes, generate summaries, create quizzes, and ask AI to
        explain difficult topics instantly.
      </p>

      <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition">
        Start Learning
      </button>
    </section>
  );
}