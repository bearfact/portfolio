import clsx from "clsx";
import { ReactElement } from "react";
import Link from "next/link";

type ProjectProps = {
  date: string;
  href: string;
  title: string;
  desc: string;
  images?: ReactElement[];
  imageflex?: string;
  featured?: boolean;
};

const Project = ({
  date,
  href,
  title,
  desc,
  images,
  imageflex,
  featured,
}: ProjectProps) => {
  return (
    <article
      className={clsx(
        "flex flex-col items-start rounded-lg w-[100%] mb-8 duration-300 ease-in-out",
        featured
          ? "border-2 border-emerald-500/60 hover:border-emerald-400 p-6 sm:p-8 text-gray-200 hover:text-gray-100 bg-emerald-500/5"
          : "border-2 border-gray-500 hover:border-gray-300 p-4 text-gray-300 hover:text-gray-100"
      )}
    >
      <div className="flex flex-wrap items-center gap-x-4text-sm">
        <time dateTime="2020-03-16" className="mb-2 mr-4">
          {date}
        </time>
      </div>
      <div className="group relative">
        <h3
          className={clsx(
            "mt-5 font-semibold leading-6",
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          )}
        >
          <Link href={href}>
            <span className="absolute inset-0 "></span>
            {title}
          </Link>
        </h3>
        <p
          className={clsx(
            "mt-5 leading-6",
            featured ? "text-base max-w-2xl" : "text-sm max-w-md"
          )}
        >
          {desc}
        </p>
      </div>
      <div
        className={clsx(
          imageflex ? imageflex : "",
          "relative mt-8 flex flex-wrap space-y-4 items-center gap-4"
        )}
      >
        {images}
      </div>
    </article>
  );
};

export default Project;
