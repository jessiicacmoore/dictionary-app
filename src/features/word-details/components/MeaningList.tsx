import { Meanings } from "@features/word-details/types";
import { DefinitionList, RelatedWordsList } from "@features/word-details";

function MeaningList({ meanings }: { meanings: Meanings }) {
  return (
    <>
      {meanings.map(({ partOfSpeech, definitions, synonyms, antonyms }) => (
        <div key={partOfSpeech}>
          <h3 className="heading-with-line">{partOfSpeech}</h3>
          <h4>Meaning</h4>
          <DefinitionList definitions={definitions} />
          {synonyms.length > 0 && (
            <div className="mt-12 flex gap-8">
              <h4 className="mt-0">Synonyms</h4>
              <RelatedWordsList words={synonyms} />
            </div>
          )}
          {antonyms.length > 0 && (
            <div className="mt-12 flex gap-8">
              <h4 className="mt-0">Antonyms</h4>
              <RelatedWordsList words={antonyms} />
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default MeaningList;
