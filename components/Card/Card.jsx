import Image from "next/image";
import Link from "next/link";
import computer from "./../../img/Computer.png";

export default function Card({ title, date, id }) {
  return (
    <card className="flex flex-col items-center text-xl font-text w-72">
      <Link href={"/events/" + id}>
        <div className="flex items-center justify-center cursor-pointer h-72 w-72 bg-secondary hover:bg-primary rounded-xl">
          <Image src={computer} width="235px" height="145px" />
        </div>
      </Link>
      <div className="w-full mt-2 font-semibold">{title}</div>
      <div className="w-full">{date}</div>
    </card>
  );
}
