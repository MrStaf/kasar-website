import { useRef, useState, useEffect } from "react";
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

export default function Footer({ podcasts, active, setActive }) {
  const [item, setItem] = useState([]);
  const [index, setIndex] = useState(null);

  // Refs
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const volumeBar = useRef(null);
  const animationRef = useRef(null);
  const sourceRef = useRef(null);

  // States
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);

  // Effects
  useEffect(() => {
    // console.log(active);
    if (active === undefined) {
      if (podcasts?.items?.length > 0) {
        setItem([podcasts?.items[podcasts?.items?.length - 1]]);
        sourceRef.current.src = podcasts?.items[podcasts?.items?.length - 1].enclosure.url;
      }
    } else {
      setItem(
        podcasts.items.filter((itm, index) => {
          if (itm.guid === active) {
            setIndex(index);
            return itm;
          }
        }),
      );
      let url = podcasts.items.filter((itm) => {
        if (itm.guid === active) {
          return itm;
        }
      })[0]?.enclosure?.url;
      if (url !== undefined) {
        sourceRef.current.src = url;
        if (isPlaying) {
          togglePlayPause();
        }
        setCurrentTime(0);
        audioPlayer.current.load();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isPlaying, podcasts?.items]);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    progressBar.current.value = 0;
    volumeBar.current.value = volume;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, volume]);

  // Functions
  const previousSound = () => {
    if (active) {
      // console.log(podcasts?.items[(index - 1) % podcasts?.items?.length]);
      setActive(podcasts?.items[(index - 1) % podcasts?.items?.length]?.guid);
    }
  };

  const nextSound = () => {
    if (active) {
      setActive(podcasts?.items[(index + 1) % podcasts?.items?.length]?.guid);
    }
  };

  const togglePlayPause = () => {
    // console.log(active);
    if (!active) {
      setActive(item[0].guid);
    } else {
      const prevValue = isPlaying;
      setIsPlaying(!prevValue);
      if (!prevValue) {
        audioPlayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
      }
    }
  };

  const changeVolume = () => {
    audioPlayer.current.volume = volumeBar.current.value / 100;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty("--seek-before-width", `${(progressBar.current.value / duration) * 100}%`);
    setCurrentTime(progressBar.current.value);
  };
  return (
    <footer className="bottom-0 flex items-center justify-between flex-grow-0 flex-shrink-0 w-full px-1 py-1 overflow-hidden text-sm text-white sm:px-4 bg-bg font-text sm:py-0">
      {!active && <div className="text-sm sm:text-lg font-text">Écoutez le dernier podcast</div>}
      <div className="flex items-center">
        <div className={`relative hidden md:flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer ${active ? "" : "order-1 ml-4"}`}>
          <Image
            src={item[0]?.itunes?.image ? item[0]?.itunes?.image : `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            layout="fill"
            alt={"Picture of " + item[0]?.title}
            objectFit="contain"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            className="rounded-lg"
          />
        </div>
        <div className={`${active ? "" : "order-1"} mx-4 truncate select-none w-28`}>
          <p>{item[0]?.title}</p>
          <p>{item[0]?.season !== undefined && `S${item[0]?.season} E${item[0]?.episode}`}</p>
        </div>
        <audio
          ref={audioPlayer}
          onEnded={() => {
            nextSound();
            togglePlayPause();
          }}>
          <source ref={sourceRef}></source>
        </audio>
        {active && (
          <svg className="hidden cursor-pointer md:block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={previousSound}>
            <path d="M19 20L9 12L19 4V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 19V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        <div className={`${active ? "" : "ml-1 sm:ml-8"} flex items-center justify-center w-12 h-12 sm:mx-2 rounded-full bg-ligth`} onClick={togglePlayPause}>
          {!isPlaying ? (
            <svg className="cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.8335 3.5L22.1668 14L5.8335 24.5V3.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4H6V20H10V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 4H14V20H18V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        {active && (
          <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={nextSound}>
            <path d="M5 4L15 12L5 20V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div className={`${!active ? "hidden" : ""} flex flex-grow max-w-3xl mx-4 cursor-pointer`}>
        <p className="cursor-default select-none">{calculateTime(currentTime)}</p>
        <div className="relative flex items-center flex-grow mx-2">
          <input type="range" ref={progressBar} onChange={changeRange} className="w-full h-2" />
        </div>
        <p className="hidden cursor-default select-none md:block">{duration ? calculateTime(duration) : ""}</p>
      </div>
      <div className="flex-grow-0 hidden ml-1 cursor-pointer md:ml-8 w-28 md:flex">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
          <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.54 8.46002C16.4774 9.39766 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="relative flex items-center flex-grow mx-2">
          <input type="range" ref={volumeBar} onChange={changeVolume} className="w-full h-2 rounded-lg" />
        </div>
      </div>
    </footer>
  );
}
