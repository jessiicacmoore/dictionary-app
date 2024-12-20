import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchWordData } from "@features/word-details/api";
import { Word } from "@features/word-details/types";
import { SomethingWrong, Spinner } from "@features/ui";
import { MeaningList, NoQuery, WordHeader } from "@features/word-details";

function WordDetails() {
  const [queryParams] = useSearchParams();
  const query = queryParams.get("search") || "";

  const { data, error, isLoading } = useQuery({
    queryKey: ["wordData", query],
    queryFn: () => fetchWordData(query),
    enabled: !!query,
  });

  if (!query) return <NoQuery />;

  if (isLoading) return <Spinner />;

  if (error) return <SomethingWrong message={error.message} />;

  const wordInfo = data[0] as Word;

  return (
    <>
      <WordHeader word={wordInfo.word} phonetics={wordInfo.phonetics} />
      <MeaningList meanings={wordInfo.meanings} />
    </>
  );
}

export default WordDetails;
