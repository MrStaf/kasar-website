import Image from "next/image";
import Link from "next/link";
import computer from "./../../img/Computer.png";

export default function Card({ title, subtitle, id, completed = false }) {
  return (
    <div className="flex justify-center flex-1 card">
      <Link href={{ pathname: "/", query: { tab: "events", id: id } }}>
        <a className="flex flex-col items-center text-xl font-text w-72">
          <div className="flex items-center justify-center cursor-pointer h-72 w-72 bg-secondary rounded-xl">
            <Image src={computer} width="235px" height="145px" />
          </div>
          <div className="w-full mt-2 font-semibold">{title}</div>
          <div className={`${completed ? "line-through" : ""} w-full`}>{subtitle}</div>
        </a>
      </Link>
    </div>
  );
}
