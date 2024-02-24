import BackToButton from "@/app/ui/back-tobutton";
export default function Page() {
  return (
    <div className="p-4">
      <BackToButton href="/projects" title="Projects" />
      <main className="max-w-2xl mx-auto text-lg">
        <div className="flex flex-col my-16">
          <article className="">
            <header className="">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:mb-6 lg:text-4xl ">
                FISO Golf App -{" "}
                <a href="https://fiso.golf" target="_blank">
                  fiso.golf
                </a>
              </h1>
            </header>
            <div className="flex justify-between space-x-2 border-b border-white mb-4">
              <figure>
                <img
                  className="w-full max-w-2xl mx-auto mb-6 rounded-lg sm:mb-8"
                  src="/fiso-dash.jpeg"
                  alt="FISO Golf Dashboard"
                />
              </figure>
              <figure>
                <img
                  className="w-full max-w-2xl mx-auto mb-6 rounded-lg sm:mb-8"
                  src="/fiso-login.jpeg"
                  alt="FISO Golf Login"
                />
              </figure>
            </div>
            <h2 className="text-2xl font-bold mb-4">What is it?</h2>

            <p className="lead mb-6">
              FISO Golf is a multi-player, multi-team, multi-round golf
              tournament web application with a dozen+ games and scoring
              options. Perfect for running your next golf outing.
            </p>
            <p className="mb-6">
              Born out of the need for a better solution to run golf tournaments
              for my own personal use. The application is designed to support a
              variety of games and scoring options, including best ball,
              scramble, stableford, half-and-half, stroke-play and more. It also
              supports a variety of team formats, including 1v1, 2v2, 3v3, 4v4,
              and Ryder cup style events.
            </p>
            <p className="mb-6">
              Using USGA GHIN handicaps, the application will automatically
              assign strokes to players based on their handicap and the course
              rating and slope. With linear or logarithmic scoring options, and
              the ability to adjust the value of each game, the application is
              flexible enough to support any type of team golf event.
            </p>
            <figure className="my-4 border-b border-white">
              <img
                className="w-full max-w-2xl mx-auto mb-6 rounded-lg sm:mb-8"
                src="/fiso-dash.jpeg"
                alt="FISO Golf Dashboard"
              />
              <figcaption>FISO Golf Dashboard</figcaption>
            </figure>
            <h2 className="text-2xl font-bold mb-4">What&#39;s in Store?</h2>
            <p className="mb-6">
              With plans to complete a mobile companion app, for live scoring
              and leaderboards, my goal is to release this as a paid service in
              the near future.
            </p>

            <h2 className="text-2xl font-bold mb-4">Technology</h2>
            <p className="mb-6">
              This application is built using{" "}
              <a
                className="text-underline"
                href="https://react.dev"
                target="_blank"
              >
                React
              </a>{" "}
              and{" "}
              <a href="https://nextjs.org" target="_blank">
                NextJS
              </a>{" "}
              as the front-end framework. The components are provided by{" "}
              <a href="https://mui.com" target="_blank">
                MaterialUI
              </a>
              . State management is handled by{" "}
              <a href="https://github.com/pmndrs/zustand" target="_blank">
                Zustand
              </a>
              . The backend is a NodeJS application built with{" "}
              <a href="https://expressjs.com" target="_blank">
                Express
              </a>{" "}
              and{" "}
              <a href="https://knexjs.org" target="_blank">
                Knex
              </a>
              , using Postgres as the database. Hosting is provided by{" "}
              <a href="https://vercel.com" target="_blank">
                Vercel
              </a>{" "}
              and AWS (ALB, ECS, RDS).
            </p>

            <p className="">Additional libraries and tools used include:</p>
            <ul>
              <li>hapi/joi</li>
              <li>hapi/boom</li>
              <li>axios</li>
              <li>passport</li>
              <li>jest</li>
              <li>rosie</li>
              <li>supertest</li>
            </ul>
          </article>
        </div>
      </main>
    </div>
  );
}
