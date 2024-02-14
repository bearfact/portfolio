import Link from "next/link";

type BackToButtonProps = {
  href: string;
  title: string;
};

export default function BackToButton({ href, title }: BackToButtonProps) {
  return (
    <div className=" flex justify-end mt-4 md:pr-20">
      <Link
        href={href}
        className="group rounded-lg border border-transparent px-5 transition-colors hover:border-gray-600"
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
