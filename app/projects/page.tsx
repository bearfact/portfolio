import Image from "next/image";
import { Fragment, ReactElement } from "react";
import Link from "next/link";
import clsx from "clsx";

type ProjectProps = {
  date: string;
  tags: string[];
  href: string;
  title: string;
  desc: string;
  images?: ReactElement[];
  imageflex?: string;
};

const Project = ({
  date,
  tags,
  href,
  title,
  desc,
  images,
  imageflex,
}: ProjectProps) => {
  return (
    <article className="flex flex-col items-start border-2 border-gray-500 rounded-lg p-4 w-[100%] mb-4">
      <div className="flex items-center gap-x-4 text-sm">
        <time dateTime="2020-03-16" className="text-gray-300">
          {date}
        </time>
        {tags.map((tag) => (
          <span
            key={tag}
            className="relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-900"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="group relative">
        <h3 className="mt-5 text-4xl font-semibold leading-6 text-gray-300 group-hover:text-gray-300">
          <a href={href} className="hover:underline">
            <span className="absolute inset-0 "></span>
            {title}
          </a>
        </h3>
        <p className="mt-5 text-sm leading-6 text-gray-300 max-w-md">{desc}</p>
      </div>
      <div
        className={clsx(
          imageflex ? imageflex : "",
          "relative mt-8 flex space-y-4 items-center gap-x-4"
        )}
      >
        {images}
      </div>
    </article>
  );
};

export default function Page() {
  return (
    <Fragment>
      <div className="flex justify-end mt-4 pr-4 sm:pr-24">
        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <div className={`text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:-translate-x-2 motion-reduce:transform-none">
              &lt;-&nbsp;
            </span>
            <span className="text-lg">Back to Home</span>
          </div>
        </Link>
      </div>
      <div className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex flex-wrap">
            <div className="mr-2 ml-2 flex-none">
              <Project
                date="April, 2023"
                tags={["Personal", "NextJS", "Node API"]}
                href="https://fiso.golf"
                title="FISO Golf"
                desc="A mutli-player, mutli-team, multi-round golf tournament web application with a dozen+ games and scoring options. Perfect for running your next golf outing. Built with React, NextJS, Zustand, MaterialUI, Express, Knex, and Postgres."
                images={[
                  <Image
                    key="dashboard"
                    width={500}
                    height={300}
                    src="https://media.licdn.com/dms/image/D562DAQGsyAa-VgTTGA/profile-treasury-image-shrink_800_800/0/1704051953990?e=1708369200&v=beta&t=KDszXDkz1AosV031hxJK6ks3K0BE9i79K0Pu3G25NUg"
                    alt="Fiso Golf Dashboard"
                  />,
                  <Image
                    key="login"
                    width={500}
                    height={300}
                    src="https://media.licdn.com/dms/image/D562DAQEBDJgN0x8zqg/profile-treasury-image-shrink_800_800/0/1704051912256?e=1708369200&v=beta&t=J01vORootQ0Sab4Enh4S5gYHcZedTqJCbprzPvNIso8"
                    alt="Fiso Golf Login"
                  />,
                ]}
                imageflex="flex-col"
              />
            </div>
            <div className="grow">
              <div className="flex flex-col items-start col-span-2 mr-2 ml-2">
                <Project
                  date="Mar, 2018"
                  tags={["Co-Founder", "Angular", "Ruby on Rails", "AWS"]}
                  href="https://redjade.net"
                  title="RedJade Sensory Software"
                  desc="SaaS software that provides a platform for sensory professionals to create and manage sensory tests and data. Used by some of the most prominent companies in the food and beverage industry."
                />
                <Project
                  date="Jan, 2022"
                  tags={["Contract", "NextJS", "GraphQL", "Headless Shopify"]}
                  href="https://shinesty.com"
                  title="Shinesty.com"
                  desc="Keeping you outfitted for all of life's social moments, welcome to the home of the largest collection of outrageous party clothing and themed party apparel on the internet. Your life just got way better.  Built with NextJS, Apollo/GraphQL, and TailwindCSS custom components."
                />
                <Project
                  date="June, 2023"
                  tags={["Contract", "Craco", "Shopify/Amazon", "NodeJS"]}
                  href="#"
                  title="Solid Ratio App"
                  desc="Custom application providing insight in to the union of Amazon and Shopify sales data. Built with Craco, ReactJS, MobX, NodeJS, Sequelize, Postgres, and AWS Lambda."
                  images={[
                    <Image
                      key="dashboard"
                      width={500}
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
