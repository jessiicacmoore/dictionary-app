export type Definition = {
  definition: string;
  example?: string;
};

export type Definitions = Definition[];

export type Meaning = {
  partOfSpeech: string;
  definitions: Definitions;
  synonyms: string[];
  antonyms: string[];
};

export type Meanings = Meaning[];

export type Phonetic = {
  text: string;
  audio: string;
};

export type Phonetics = Phonetic[];

export type Word = {
  word: string;
  phonetics: Phonetics;
  meanings: Meanings;
};
