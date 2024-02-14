import Image from "next/image";
import { Fragment } from "react";
import Project from "../ui/project";
import BackToButton from "../ui/back-tobutton";

export default function Page() {
  return (
    <Fragment>
      <BackToButton href="/" title="Home" />
      <div className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex flex-wrap sm:space-x-4">
            <div className="mr-2 ml-2">
              <Project
                date="April, 2023"
                href="/projects/fiso"
                title="FISO Golf"
                desc="A mutli-player, mutli-team, multi-round golf tournament web application with a dozen+ games and scoring options. Perfect for running your next golf outing. Built with React, NextJS, Zustand, MaterialUI, Express, Knex, and Postgres."
                images={[
                  <Image
                    key="dashboard"
                    width={400}
                    height={300}
                    src="https://media.licdn.com/dms/image/D562DAQGsyAa-VgTTGA/profile-treasury-image-shrink_800_800/0/1704051953990?e=1708369200&v=beta&t=KDszXDkz1AosV031hxJK6ks3K0BE9i79K0Pu3G25NUg"
                    alt="Fiso Golf Dashboard"
                  />,
                  <Image
                    key="login"
                    width={400}
                    height={300}
                    src="https://media.licdn.com/dms/image/D562DAQEBDJgN0x8zqg/profile-treasury-image-shrink_800_800/0/1704051912256?e=1708369200&v=beta&t=J01vORootQ0Sab4Enh4S5gYHcZedTqJCbprzPvNIso8"
                    alt="Fiso Golf Login"
                  />,
                ]}
                imageflex="flex-col"
              />
              <Project
                date="Jan, 2022"
                href="https://shinesty.com"
                title="Shinesty.com"
                desc="Keeping you outfitted for all of life&#39;s social moments, welcome to the home of the largest collection of outrageous party clothing and themed party apparel on the internet. Your life just got way better.  Built with NextJS, Apollo/GraphQL, and TailwindCSS custom components."
              />
            </div>
            <div className="">
              <div className="flex flex-col items-start col-span-2 mr-2 ml-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
