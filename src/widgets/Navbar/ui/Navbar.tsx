import { LINKS } from "@/shared/constants/links";
import Link from "next/link";
import { Fragment } from "react";

export const Navbar = () => {
  return (
    <div className="grid grid-cols-5 gap-4 justify-center w-full px-2 py-5 rounded-t-2xl bg-zinc-900">
      {LINKS.map((link, index) => (
        <Fragment key={index}>
          {index === 2 ? (
            <div className="bg-yellow-400">23</div>
          ) : (
            <Link href={link.url} className="flex justify-center text-white">
              {link.name}
            </Link>
          )}
        </Fragment>
      ))}
    </div>
  );
};
