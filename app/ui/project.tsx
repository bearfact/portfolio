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
};

const Project = ({
  date,
  href,
  title,
  desc,
  images,
  imageflex,
}: ProjectProps) => {
  return (
    <article className="flex flex-col items-start border-2 border-gray-500 hover:border-gray-300 rounded-lg p-4 w-[100%] mb-8 text-gray-300 hover:text-gray-100 duration-300 ease-in-out">
      <div className="flex flex-wrap items-center gap-x-4text-sm">
        <time dateTime="2020-03-16" className="mb-2 mr-4">
          {date}
        </time>
      </div>
      <div className="group relative">
        <h3 className="mt-5 text-2xl font-semibold leading-6">
          <Link href={href}>
            <span className="absolute inset-0 "></span>
            {title}
          </Link>
        </h3>
        <p className="mt-5 text-sm leading-6 max-w-md">{desc}</p>
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

export default Project;
