"use client";

import { useState } from "react";

export default function Dashboard() {
  const [notes, setNotes] = useState("");
  const [summary, setSummary] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateSummary() {
    if (!notes.trim()) {
      alert("Please paste some notes first.");
      return;
    }

    setLoading(true);
    setSummary("");
    setQuiz("");

    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong.");
        return;
      }

      setSummary(data.summary);
    } catch (error) {
      alert("Failed to connect to AI.");
      console.error(error);
    }

    setLoading(false);
  }

  async function generateQuiz() {
    if (!notes.trim()) {
      alert("Please paste some notes first.");
      return;
    }

    setLoading(true);
    setSummary("");
    setQuiz("");

    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong.");
        return;
      }

      setQuiz(data.quiz);
    } catch (error) {
      alert("Failed to connect to AI.");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#2563eb",
        }}
      >
        📚 StudyFlow AI
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "25px",
        }}
      >
        Paste your notes and let AI summarize them or create a quiz.
      </p>

      <textarea
        rows={12}
        placeholder="Paste your study notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          backgroundColor: "#ffffff",
          color: "#000000",
          resize: "vertical",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "15px",
        }}
      >
        <button
          onClick={generateSummary}
          disabled={loading}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {loading ? "Generating..." : "📝 Generate Summary"}
        </button>

        <button
          onClick={generateQuiz}
          disabled={loading}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#16a34a",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          🎯 Generate Quiz
        </button>
      </div>

      {summary && (
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            whiteSpace: "pre-wrap",
          }}
        >
          <h2>📄 AI Summary</h2>
          <hr />
          <p>{summary}</p>
        </div>
      )}

      {quiz && (
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            whiteSpace: "pre-wrap",
          }}
        >
          <h2>❓ AI Quiz</h2>
          <hr />
          <p>{quiz}</p>
        </div>
      )}
    </main>
  );
}