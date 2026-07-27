export default function Features() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-8 pb-20 md:grid-cols-3">
      <div className="rounded-2xl bg-white p-8 shadow-md">
        <h3 className="text-2xl font-bold text-blue-600">📄 AI Summary</h3>
        <p className="mt-4 text-gray-600">
          Turn long study notes into concise summaries in seconds.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-md">
        <h3 className="text-2xl font-bold text-blue-600">❓ AI Quiz</h3>
        <p className="mt-4 text-gray-600">
          Generate practice MCQs automatically from your notes.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-md">
        <h3 className="text-2xl font-bold text-blue-600">💬 Ask AI</h3>
        <p className="mt-4 text-gray-600">
          Ask follow-up questions and get simple explanations instantly.
        </p>
      </div>
    </section>
  );
}