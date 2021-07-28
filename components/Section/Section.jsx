import Image from "next/image";
import Link from "next/link";

export default function Section(props) {
  return <section className={`${props.className} flex flex-col items-center flex-grow w-full h-full max-w-2xl px-6 py-4 my-12 bg-primary rounded-2xl`}>{props.children}</section>;
}
