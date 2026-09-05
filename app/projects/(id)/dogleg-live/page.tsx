import BackToButton from "@/app/ui/back-tobutton";
import { Fragment } from "react";
export default function Page() {
  return (
    <Fragment>
      <BackToButton href="/projects" title="Projects" />
      <main className="max-w-2xl mx-auto text-lg">
        <div className="flex flex-col my-16">
          <article className="">
            <header className="">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:mb-6 lg:text-4xl ">
                Dogleg Live -{" "}
                <a href="https://dogleg.live" target="_blank">
                  dogleg.live
                </a>
              </h1>
            </header>
            <div className="flex justify-between space-x-2 border-b border-white mb-4">
              <figure>
                <img
                  className="w-full max-w-2xl mx-auto mb-6 rounded-lg sm:mb-8"
                  src="/dogleg-dash.jpeg"
                  alt="Dogleg Live Tournament Dashboard"
                />
              </figure>
              <figure>
                <img
                  className="w-full max-w-2xl mx-auto mb-6 rounded-lg sm:mb-8"
                  src="/dogleg-login.jpeg"
                  alt="Dogleg Live Login"
                />
              </figure>
              <figure>
                <img
                  className="w-full max-w-2xl mx-auto mb-6 rounded-lg sm:mb-8"
                  src="/dogleg-stats.jpeg"
                  alt="Dogleg Live Stats"
                />
              </figure>
            </div>
            <h2 className="text-2xl font-bold mb-4">What is it?</h2>

            <p className="lead mb-6">
              Dogleg Live is a mobile-first golf tournament management PWA.
              Create tournaments, invite players, track live scores, and view
              leaderboards &mdash; built for your group.
            </p>
            <p className="mb-6">
              A spiritual successor to my earlier FISO Golf project, Dogleg
              Live supports multiple rounds, teams, and scoring formats,
              including scramble, shamble, best ball, best splits, and
              stroke-play. Tournament organizers can invite players with a
              shareable code, assign teams, and manage rounds across multiple
              courses.
            </p>
            <p className="mb-6">
              As a Progressive Web App, Dogleg Live can be installed on a
              phone home screen for quick access on the course, with live
              score entry and leaderboard updates powered by Supabase
              Realtime. Players can also review their all-time scoring
              history, including score distribution and average score by par.
            </p>
            <figure className="my-4 border-b border-white">
              <img
                className="w-full max-w-2xl mx-auto mb-6 rounded-lg sm:mb-8"
                src="/dogleg-dash.jpeg"
                alt="Dogleg Live Tournament Dashboard"
              />
              <figcaption>Dogleg Live Tournament Dashboard</figcaption>
            </figure>

            <h2 className="text-2xl font-bold mb-4">Technology</h2>
            <p className="mb-6">
              This application is built using{" "}
              <a href="https://nextjs.org" target="_blank">
                NextJS
              </a>{" "}
              (App Router, Turbopack) as the front-end framework, with{" "}
              <a href="https://trpc.io" target="_blank">
                tRPC
              </a>{" "}
              for the API layer and{" "}
              <a href="https://orm.drizzle.team" target="_blank">
                Drizzle ORM
              </a>{" "}
              for the database. Data, authentication, and realtime updates
              are provided by{" "}
              <a href="https://supabase.com" target="_blank">
                Supabase
              </a>{" "}
              (Postgres, Auth, and Realtime). Styling is handled with{" "}
              <a href="https://tailwindcss.com" target="_blank">
                Tailwind CSS
              </a>
              , and the app is installable as a PWA via{" "}
              <a
                href="https://github.com/DuCanhGH/next-pwa"
                target="_blank"
              >
                next-pwa
              </a>
              . Golf course and tee data comes from the{" "}
              <a href="https://www.golfcourseapi.com" target="_blank">
                Golf Course API
              </a>
              .
            </p>

            <p className="">Additional libraries and tools used include:</p>
            <ul>
              <li>@tanstack/react-query</li>
              <li>zod</li>
              <li>Font Awesome</li>
              <li>Vitest</li>
              <li>ESLint / Prettier</li>
              <li>GitHub Actions (CI)</li>
            </ul>
          </article>
        </div>
      </main>
    </Fragment>
  );
}
