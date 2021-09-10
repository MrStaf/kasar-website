import Image from "next/image";
import Link from "next/link";

const ASSETS_URL = "https://content.benoit.fage.fr/assets/";

export default function Card({ title, subtitle, id, completed = false, img, className, pathname = "/", passHref = false }) {
  let query;
  if (pathname !== "/") {
    query = undefined;
  } else {
    query = { tab: "events", id: id };
  }
  return (
    <div className={`${className !== undefined ? className : ""} flex justify-center card`}>
      <Link href={{ pathname: pathname, query: query }} passHref={passHref}>
        <a className="flex flex-col items-center text-xl font-text w-72" target="_blank">
          <div className="relative flex items-center justify-center cursor-pointer h-72 w-72 bg-secondary rounded-xl">{img && <Image src={ASSETS_URL + img} layout="fill" objectFit="cover" className="rounded-xl" />}</div>
          <div className="w-full mt-2 font-semibold">{title}</div>
          <div className={`${completed ? "line-through" : ""} w-full font-body`}>{subtitle}</div>
        </a>
      </Link>
    </div>
  );
}
