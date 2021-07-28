import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../img/kasar.png";

export default function Header() {
  const router = useRouter();
  const path = router.route.split("/")[1];
  return (
    <header className="flex items-center flex-grow-0 flex-shrink-0 w-full px-4 text-white bg-bg font-body text-md">
      <Link href="/">
        <a className="flex items-center">
          <Image src={logo} width="50px" height="50px" />
        </a>
      </Link>
      <Link href="/">
        <a className="mt-2 ml-2 mr-8 text-3xl font-logo">KASAR</a>
      </Link>
      <svg width="8" height="45" viewBox="0 0 8 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" y1="-1.74846e-07" x2="4" y2="45" stroke="#7A1AF3" strokeWidth="8" />
      </svg>
      <div className="flex justify-between w-full mx-8">
        <Link href="/events">
          <div className={`${path === "events" ? "text-tertiary" : ""} cursor-pointer select-none`}>.events</div>
        </Link>
        <Link href="/podcast">
          <div className={`${path === "podcast" ? "text-tertiary" : ""} cursor-pointer select-none`}>.podcast</div>
        </Link>
        <Link href="/links">
          <div className={`${path === "links" ? "text-tertiary" : ""} cursor-pointer select-none`}>.liens</div>
        </Link>
        <Link href="/nous_rejoindre">
          <div className={`${path === "nous_rejoindre" ? "text-tertiary" : ""} cursor-pointer select-none`}>.nous_rejoindre</div>
        </Link>
        <Link href="/association">
          <div className={`${path === "association" ? "text-tertiary" : ""} cursor-pointer select-none`}>.l-association</div>
        </Link>
      </div>
    </header>
  );
}
