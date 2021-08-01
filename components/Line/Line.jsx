import Image from "next/image";

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) => (typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str));

export default function Line({ title, ep, active, img, setActive, id }) {
  return (
    <div className={`${active === id ? "bg-bg-light" : "bg-bg"} flex items-center justify-between w-full px-5 py-3 my-1 text-sm text-white font-text bg-bg rounded-2xl`}>
      <div className="flex">
        <div className="relative flex items-center justify-center w-16 h-16 bg-clip-border rounded-2xl">
          <Image src={img} layout="fill" alt={"Picture of " + title} objectFit="contain" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} className="rounded-2xl" />
        </div>
        <h1 className="flex flex-col justify-center flex-grow-0 flex-shrink pr-4 ml-4">
          <span className="overflow-clip">{title}</span>
          <div className="flex items-center">
            <p className="mr-2">{ep}</p>
            <svg className="cursor-pointer" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12.75 6L9 2.25L5.25 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 2.25V11.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </h1>
      </div>
      <div className="flex">
        <div
          className={`${active === id ? "bg-white" : ""} flex items-center justify-center w-16 h-16 border rounded-full`}
          onClick={() => {
            setActive(id);
            console.log(id);
          }}>
          <svg className={`${active === id ? "stroke-black" : "stroke-white"} cursor-pointer`} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.8335 3.5L22.1668 14L5.8335 24.5V3.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
