import { Phonetics } from "@features/word-details/types";
import { Audio } from "@features/ui";

type WordHeaderProps = {
  word: string;
  phonetics: Phonetics;
};

function WordHeader({ word, phonetics }: WordHeaderProps) {
  const firstWithAudio = phonetics.find((item) => item.audio);
  const phoneticToDisplay =
    phonetics.length > 0 ? firstWithAudio || phonetics[0] : null;
  return (
    <div className="flex items-center justify-between pt-12">
      <div>
        <h2>{word}</h2>
        {phoneticToDisplay && (
          <p className="font-sans text-2xl text-primary-purple-500">
            {phonetics[0].text}
          </p>
        )}
      </div>
      {phoneticToDisplay?.audio && (
        <Audio
          label={`Play pronunciation for ${word}`}
          audioSrc={phoneticToDisplay.audio}
        />
      )}
    </div>
  );
}

export default WordHeader;
