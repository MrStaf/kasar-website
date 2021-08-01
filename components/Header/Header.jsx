import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../img/kasar.png";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const path = router.query.tab;
  const [hamburger, setHamburger] = useState(false);
  return (
    <header className="relative flex items-center justify-between flex-grow-0 flex-shrink-0 w-full px-4 text-white md:justify-start bg-bg font-body text-md">
      <div className="flex">
        <Link href="/">
          <a className="flex items-center w-12 h-12">
            <Image src={logo} width="50px" height="50px" />
          </a>
        </Link>
        <Link href="/">
          <a className="mt-2 ml-2 mr-8 text-3xl font-logo">KASAR</a>
        </Link>
        <svg width="8" height="45" viewBox="0 0 8 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="4" y1="-1.74846e-07" x2="4" y2="45" stroke="#7A1AF3" strokeWidth="8" />
        </svg>
      </div>
      <div
        className="md:hidden"
        onClick={() => {
          setHamburger(!hamburger);
        }}>
        <svg width="50" height="50" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.59912 12.9149H21.5991" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.59912 6.91486H21.5991" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.59912 18.9149H21.5991" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* Hamburger link */}
      <div
        className={`${hamburger ? "" : "hidden"} rounded-b-lg fixed right-0 z-10 flex flex-col items-center w-full gap-3 py-2 mt-2 text-2xl border-t border-b md:hidden border-bg-light top-14 bg-bg`}
        onClick={() => {
          setHamburger(!hamburger);
        }}>
        <Link href={{ pathname: "/", query: { tab: "events" } }}>
          <div className={`${path === "events" ? "text-tertiary" : ""} cursor-pointer select-none`}>.events</div>
        </Link>
        <Link href={{ pathname: "/", query: { tab: "podcast" } }}>
          <div className={`${path === "podcast" ? "text-tertiary" : ""} cursor-pointer select-none`}>.podcast</div>
        </Link>
        <Link href="links">
          <div className="cursor-pointer select-none">.liens</div>
        </Link>
        <Link href={{ pathname: "/", query: { tab: "nous_rejoindre" } }}>
          <div className={`${path === "nous_rejoindre" ? "text-tertiary" : ""} cursor-pointer select-none`}>.nous_rejoindre</div>
        </Link>
        <Link href={{ pathname: "/", query: { tab: "association" } }}>
          <div className={`${path === "association" ? "text-tertiary" : ""} cursor-pointer select-none`}>.l&#39;association</div>
        </Link>
      </div>
      {/* Nav links */}
      <div className="justify-between hidden w-full mx-8 md:flex">
        <Link href={{ pathname: "/", query: { tab: "events" } }}>
          <div className={`${path === "events" ? "text-tertiary" : ""} cursor-pointer select-none`}>.events</div>
        </Link>
        <Link href={{ pathname: "/", query: { tab: "podcast" } }}>
          <div className={`${path === "podcast" ? "text-tertiary" : ""} cursor-pointer select-none`}>.podcast</div>
        </Link>
        <Link href="links">
          <div className="cursor-pointer select-none">.liens</div>
        </Link>
        <Link href={{ pathname: "/", query: { tab: "nous_rejoindre" } }}>
          <div className={`${path === "nous_rejoindre" ? "text-tertiary" : ""} cursor-pointer select-none`}>.nous_rejoindre</div>
        </Link>
        <Link href={{ pathname: "/", query: { tab: "association" } }}>
          <div className={`${path === "association" ? "text-tertiary" : ""} cursor-pointer select-none`}>.l&#39;association</div>
        </Link>
      </div>
    </header>
  );
}
