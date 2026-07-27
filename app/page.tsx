import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#2563eb,#7c3aed)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          📚 StudyFlow AI
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          Turn long study notes into easy summaries and AI-generated quizzes in
          seconds.
        </p>

        <Link href="/dashboard">
          <button
            style={{
              padding: "18px 40px",
              fontSize: "20px",
              border: "none",
              borderRadius: "10px",
              background: "white",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🚀 Start Studying
          </button>
        </Link>
      </div>
    </main>
  );
}