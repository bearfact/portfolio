"use client";
import Link from "next/link";
import Blocks from "./ui/blocks";
import Hero from "./ui/hero";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Blocks />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="text-center relative flex flex-col place-items-center">
        <Hero />

        <div className="mt-8 text-lg text-center text-gray-300">
          Mentor | Architect | Full-Stack Engineer | Consultant
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <a
          href="https://linkedin.com/in/joseph-crone"
          className="z-10 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find out more about my professional background.
          </p>
        </a>

        <a
          href="https://github.com/bearfact"
          className="z-10 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            View some code and things I&#39;ve been working on.
          </p>
        </a>

        <Link
          href="/projects"
          className="z-10 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-600"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore some past projects.
          </p>
        </Link>
      </div>
    </main>
  );
}
