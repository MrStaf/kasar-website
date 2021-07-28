import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../img/kasar.png";

export default function Footer({ fixed = true }) {
  const router = useRouter();
  const path = router.route.split("/")[1];
  const fix = fixed ? "fixed " : "";
  return (
    <footer className={fix + "bottom-0 flex items-center flex-shrink-0 justify-between flex-grow-0 w-full px-4 text-sm text-white bg-bg font-text"}>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-16 h-12 bg-white rounded-lg cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 15L16 10L5 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="mx-4 truncate select-none w-28">
          <p>À la découver...</p>
          <p>S0 E3</p>
        </div>
        <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 20L9 12L19 4V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 19V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex items-center justify-center w-12 h-12 mx-2 rounded-full bg-ligth">
          <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4H6V20H10V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 4H14V20H18V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4L15 12L5 20V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-grow max-w-3xl mx-4 cursor-pointer">
        <p className="cursor-default select-none">23:24</p>
        <div className="relative flex items-center flex-grow mx-2">
          <div className="absolute w-full h-1 rounded-md bg-ligth"></div>
          <div className="absolute w-1/2 h-1 bg-white rounded-md"></div>
        </div>
        <p className="cursor-default select-none">45:24</p>
      </div>
      <div className="flex flex-grow-0 ml-8 cursor-pointer w-28">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.54 8.46002C16.4774 9.39766 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="relative flex items-center flex-grow mx-2">
          <div className="absolute w-full h-1 rounded-md bg-ligth"></div>
          <div className="absolute w-2/3 h-1 bg-white rounded-md"></div>
        </div>
      </div>
    </footer>
  );
}
