# 📚 StudyFlow AI – Smart Study Assistant

StudyFlow AI is a web application that helps students study more efficiently by using Artificial Intelligence to summarize lengthy study notes and generate practice quizzes. It is designed for students who want to revise faster and test their understanding before exams.

---

## Problem

Students often spend a lot of time reading long lecture notes and preparing for exams. It can be difficult to identify the most important information and create practice questions manually.

**StudyFlow AI** solves this problem by allowing users to paste their notes and instantly receive:
- A concise AI-generated summary
- A multiple-choice quiz for self-assessment

---

## Live Demo

🌐 https://studyflow-ai-roan.vercel.app

---

## GitHub Repository

💻 https://github.com/sharjeelaslam77/studyflow-ai

---

## Features

- 📄 AI-powered note summarization
- ❓ AI-generated multiple-choice quizzes
- ⚡ Fast response using Google Gemini AI
- 🎨 Clean and user-friendly interface
- 📱 Responsive design
- 🌐 Live deployment on Vercel

---

## AI Feature

This application integrates **Google Gemini AI** to assist students in learning more effectively.

### Summary Prompt

```
Summarize these study notes into simple, easy-to-understand bullet points.
```

### Quiz Prompt

```
Generate 5 multiple-choice questions from these study notes.
Each question should have four options and clearly indicate the correct answer.
```

---

## Technologies Used

- Next.js
- React
- TypeScript
- Google Gemini API
- Vercel
- GitHub

---

## Screenshots

### Homepage

*(Insert Homepage Screenshot Here)*

### AI Summary

*(Insert Summary Screenshot Here)*

### AI Quiz

*(Insert Quiz Screenshot Here)*

---

## Installation

Clone the repository

```bash
git clone https://github.com/sharjeelaslam77/studyflow-ai.git
```

Go to the project directory

```bash
cd studyflow-ai
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Folder Structure

```
app/
 ├── api/
 │   ├── summarize/
 │   └── quiz/
 ├── dashboard/
 └── page.tsx
```

---

## Future Improvements

- Upload PDF notes
- Flashcard generation
- Study progress tracking
- User authentication
- Download summaries as PDF

---

## Author

**Sharjeel Aslam**

Computer Engineering Student  
Air University Islamabad