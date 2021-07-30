import { useRef, useState, useEffect } from "react";

export default function Footer({ fixed = true }) {
  const fix = fixed ? "fixed " : "";
  // Refs
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const volumeBar = useRef(null);
  const animationRef = useRef(null);

  // States
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);

  // Effects

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    progressBar.current.value = 0;
    volumeBar.current.value = volume;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // Functions
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
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
        <audio ref={audioPlayer}>
          <source src="http://localhost:8000/podcast/orelsan-san.mp3" preload="metadata" onLoad={console.log}></source>
        </audio>
        <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 20L9 12L19 4V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 19V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex items-center justify-center w-12 h-12 mx-2 rounded-full bg-ligth" onClick={togglePlayPause}>
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
        <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4L15 12L5 20V4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-grow max-w-3xl mx-4 cursor-pointer">
        <p className="cursor-default select-none">{calculateTime(currentTime)}</p>
        <div className="relative flex items-center flex-grow mx-2">
          <input type="range" ref={progressBar} onChange={changeRange} className="w-full h-2" />
        </div>
        <p className="cursor-default select-none">{duration && !isNaN(duration) && calculateTime(duration)}</p>
      </div>
      <div className="flex flex-grow-0 ml-8 cursor-pointer w-28">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
