"use client";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import BackToButton from "@/app/ui/back-tobutton";

const API_URL = "https://opentdb.com/api.php?amount=10";

type ApiQuestion = {
  type: "multiple" | "boolean";
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type ApiResponse = {
  response_code: number;
  results: ApiQuestion[];
};

type TriviaQuestion = ApiQuestion & { answers: string[] };

type Status = "idle" | "loading" | "playing" | "finished" | "error";

// Sampled from the same d3 interpolateRainbow palette the home page's
// hover-block effect draws from (see app/ui/blocks.tsx).
const CATEGORY_BADGE_COLOR = "rgb(228, 65, 157)";
const DIFFICULTY_BADGE_COLOR = "rgb(26, 199, 194)";

function Badge({ color, children }: { color: string; children: string }) {
  return (
    <span
      className="rounded-full border px-3 py-1 text-xs font-semibold"
      style={{
        color,
        borderColor: color,
        backgroundColor: color.replace("rgb(", "rgba(").replace(")", ", 0.12)"),
      }}
    >
      {children}
    </span>
  );
}

function decodeHtml(html: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TriviaPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const loadQuestions = async () => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Network error, please try again.");
      const data: ApiResponse = await res.json();
      if (data.response_code !== 0 || !data.results?.length) {
        throw new Error("Could not load questions, please try again.");
      }
      const prepared: TriviaQuestion[] = data.results.map((q) => {
        const category = decodeHtml(q.category);
        const question = decodeHtml(q.question);
        const correct_answer = decodeHtml(q.correct_answer);
        const incorrect_answers = q.incorrect_answers.map(decodeHtml);
        return {
          ...q,
          category,
          question,
          correct_answer,
          incorrect_answers,
          answers: shuffle([correct_answer, ...incorrect_answers]),
        };
      });
      setQuestions(prepared);
      setIndex(0);
      setCorrect(0);
      setIncorrect(0);
      setSelected(null);
      setStatus("playing");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setStatus("error");
    }
  };

  const current = questions[index];

  const handleAnswer = (answer: string) => {
    if (selected !== null) return;
    setSelected(answer);
    if (answer === current.correct_answer) {
      setCorrect((c) => c + 1);
    } else {
      setIncorrect((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
      setSelected(null);
    } else {
      setStatus("finished");
    }
  };

  return (
    <div className="py-6 sm:py-8">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <BackToButton href="/" title="Home" align="start" />

        <h1 className="text-4xl font-bold mb-8 text-center">Trivia</h1>

        {status === "idle" && (
          <div className="flex flex-col items-center gap-6 mt-16">
            <p className="text-gray-300 text-center max-w-md">
              Answer 10 trivia questions and see how you do.
            </p>
            <button
              onClick={loadQuestions}
              className="rounded-lg border-2 border-emerald-500/60 px-8 py-3 text-xl font-semibold text-gray-200 transition-colors hover:border-emerald-400 hover:text-gray-100 bg-emerald-500/5"
            >
              Begin
            </button>
          </div>
        )}

        {status === "loading" && (
          <div className="mt-16 text-center text-gray-300">
            Loading questions&hellip;
          </div>
        )}

        {status === "error" && (
          <div className="mt-16 flex flex-col items-center gap-6">
            <p className="text-red-400 text-center">{errorMsg}</p>
            <button
              onClick={loadQuestions}
              className="rounded-lg border-2 border-gray-500 px-6 py-2 text-gray-300 transition-colors hover:border-gray-300 hover:text-gray-100"
            >
              Try Again
            </button>
          </div>
        )}

        {status === "playing" && current && (
          <div className="mt-8">
            <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
              <span>
                Question {index + 1} of {questions.length}
              </span>
              <div className="flex gap-2">
                <Badge color={CATEGORY_BADGE_COLOR}>{current.category}</Badge>
                <Badge color={DIFFICULTY_BADGE_COLOR}>{current.difficulty}</Badge>
              </div>
            </div>
            <div className="rounded-lg border-2 border-gray-500 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                {current.question}
              </h2>
              <div className="flex flex-col gap-3">
                {current.answers.map((answer) => {
                  const isSelected = selected === answer;
                  const isCorrectAnswer = answer === current.correct_answer;
                  const showResult = selected !== null;
                  return (
                    <button
                      key={answer}
                      onClick={() => handleAnswer(answer)}
                      disabled={selected !== null}
                      className={clsx(
                        "text-left rounded-lg border-2 px-5 py-3 transition-colors",
                        !showResult &&
                          "border-gray-500 hover:border-gray-300 text-gray-300 hover:text-gray-100",
                        showResult &&
                          isCorrectAnswer &&
                          "border-emerald-500 bg-emerald-500/10 text-gray-100",
                        showResult &&
                          isSelected &&
                          !isCorrectAnswer &&
                          "border-red-500 bg-red-500/10 text-gray-100",
                        showResult &&
                          !isSelected &&
                          !isCorrectAnswer &&
                          "border-gray-700 text-gray-500"
                      )}
                    >
                      {answer}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-gray-400">
                Correct: {correct} &middot; Incorrect: {incorrect}
              </div>
              {selected !== null && (
                <button
                  onClick={handleNext}
                  className="rounded-lg border-2 border-emerald-500/60 px-6 py-2 font-semibold text-gray-200 transition-colors hover:border-emerald-400 hover:text-gray-100 bg-emerald-500/5"
                >
                  {index + 1 < questions.length ? "Next Question" : "See Results"}
                </button>
              )}
            </div>
          </div>
        )}

        {status === "finished" && (
          <div className="mt-16 flex flex-col items-center gap-6">
            <h2 className="text-2xl font-semibold">
              You scored {correct} / {questions.length}
            </h2>
            <div className="text-gray-300">
              {correct} correct &middot; {incorrect} incorrect
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={loadQuestions}
                className="rounded-lg border-2 border-emerald-500/60 px-6 py-2 font-semibold text-gray-200 transition-colors hover:border-emerald-400 hover:text-gray-100 bg-emerald-500/5"
              >
                Play Again
              </button>
              <Link
                href="/"
                className="rounded-lg border-2 border-gray-500 px-6 py-2 font-semibold text-gray-300 transition-colors hover:border-gray-300 hover:text-gray-100"
              >
                I&apos;m Done
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
