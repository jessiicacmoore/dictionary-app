import { Phonetics } from "@features/word-details/types";

type WordHeaderProps = {
  word: string;
  phonetics: Phonetics;
};

function WordHeader({ word, phonetics }: WordHeaderProps) {
  return (
    <div>
      <h2>{word}</h2>
      {phonetics.length > 0 && (
        <p className="font-sans text-2xl text-primary-purple-500">
          {phonetics[0].text}
        </p>
      )}
    </div>
  );
}

export default WordHeader;
