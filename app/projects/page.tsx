import Image from "next/image";
import { Fragment } from "react";
import Project from "../ui/project";
import BackToButton from "../ui/back-tobutton";

export default function Page() {
  return (
    <Fragment>
      <div className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BackToButton href="/" title="Home" align="start" />
          <div className="mr-2 ml-2 mb-4">
            <Project
              date="Sep, 2026"
              href="/projects/dogleg-live"
              title="Dogleg Live"
              desc="A mobile-first golf tournament management PWA. Create tournaments, invite players, track live scores, and view leaderboards. Built with NextJS, tRPC, Drizzle ORM, Supabase (Postgres/Auth/Realtime), and Tailwind CSS."
              images={[
                <Image
                  key="dashboard"
                  width={856}
                  height={1290}
                  src="/dogleg-dash.jpeg"
                  alt="Dogleg Live Dashboard"
                  className="h-[420px] w-auto rounded-lg border border-gray-700"
                />,
                <Image
                  key="login"
                  width={1010}
                  height={1176}
                  src="/dogleg-login.jpeg"
                  alt="Dogleg Live Login"
                  className="h-[420px] w-auto rounded-lg border border-gray-700"
                />,
                <Image
                  key="stats"
                  width={1000}
                  height={1057}
                  src="/dogleg-stats.jpeg"
                  alt="Dogleg Live Stats"
                  className="h-[420px] w-auto rounded-lg border border-gray-700"
                />,
              ]}
              imageflex="flex-row"
              featured
            />
          </div>
          <div className="mr-2 ml-2 flex flex-row-reverse gap-4">
            <div className="flex flex-1 flex-col items-start">
              <Project
                date="June, 2023"
                href="https://solidratio.com"
                title="Solid Ratio App"
                desc="Custom application providing insight into the combintation of Amazon and Shopify sales data. Built with Craco, ReactJS, MobX, NodeJS, Sequelize, Postgres, and AWS Lambda."
                images={[
                  <Image
                    key="dashboard"
                    width={400}
                    height={300}
                    src="/solid-ratio.png"
                    alt="solid ratio dashboard"
                  />,
                ]}
              />
              <Project
                date="Jan, 2022"
                href="https://shinesty.com"
                title="Shinesty.com"
                desc="Complete Shopify frontend rebuild from Liquid templates to React/NextJS.  Built with NextJS, Apollo/GraphQL, and TailwindCSS custom components."
              />
            </div>
            <div className="flex flex-1 flex-col items-start">
              <Project
                date="May, 2018 - June, 2021"
                href="/projects/hellofresh"
                title="Green Chef a HelloFresh Company"
                desc="Green Chef is a meal kit delivery service that provides organic ingredients and easy recipes to cook healthy meals. Served as the Director of Engineering and Architect for the Green Chef platform."
              />
              <Project
                date="Dec, 2013 - March 2018"
                href="/projects/redjade"
                title="RedJade Sensory Software"
                desc="SaaS software that provides a platform for sensory professionals to create and manage sensory tests and data. Used by some of the most prominent companies in the food and beverage industry."
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
