export const fetchWordData = async (word: string) => {
  if (!word) return null;
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );
  if (!response.ok) throw new Error("Failed to fetch word data");
  return response.json();
};
