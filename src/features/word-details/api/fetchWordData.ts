export const fetchWordData = async (word: string) => {
  if (!word) return null;
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );
  // if (!response.ok) throw new Error("Failed to fetch word data");

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message ||
        "Yikes! Looks like we’re in uncharted territory. That word might be hiding somewhere else.",
    );
  }

  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error(
      `Nada. Zilch. Nothing. We couldn’t find any results for ${word} - maybe double-check your spelling?`,
    );
  }

  return data;
};
