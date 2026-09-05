import clsx from "clsx";
import Link from "next/link";

type BackToButtonProps = {
  href: string;
  title: string;
  align?: "start" | "end";
};

export default function BackToButton({
  href,
  title,
  align = "end",
}: BackToButtonProps) {
  return (
    <div
      className={clsx(
        "flex mt-4",
        align === "start" ? "justify-start mb-5" : "justify-end md:pr-20"
      )}
    >
      <Link
        href={href}
        className={clsx(
          "group rounded-lg border border-transparent px-5 transition-colors",
          align !== "start" && "hover:border-gray-600"
        )}
      >
        <div className={`text-2xl font-semibold`}>
          <span className="inline-block transition-transform group-hover:-translate-x-2 motion-reduce:transform-none">
            &lt;-&nbsp;
          </span>
          <span className="text-lg">{title}</span>
        </div>
      </Link>
    </div>
  );
}
