import { useRef } from "react";

function Audio({ audioSrc }: { audioSrc: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <button onClick={handlePlay}>Play</button>
    </>
  );
}

export default Audio;
