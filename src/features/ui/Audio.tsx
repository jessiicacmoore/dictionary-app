import { useRef } from "react";
import { FaPlay } from "react-icons/fa";

type AudioProps = {
  audioSrc: string;
  label: string;
};

function Audio({ audioSrc, label }: AudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <button
        aria-label={label}
        onClick={handlePlay}
        className="bg-primary-purple-100 grid h-16 w-16 place-content-center rounded-full text-primary-purple-500 transition-colors hover:bg-primary-purple-200 hover:text-primary-purple-800 focus:bg-primary-purple-200 focus:text-primary-purple-800 sm:h-20 sm:w-20 sm:text-2xl dark:hover:text-gray-700 dark:focus:text-gray-700"
      >
        <FaPlay aria-hidden />
      </button>
    </>
  );
}

export default Audio;
