import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchWordData } from "@features/word-details/api";
import { Word } from "@features/word-details/types";
import { Container } from "@features/layout";
import { SomethingWrong } from "@features/ui";
import { MeaningList, WordHeader } from "@features/word-details";

function WordDetails() {
  const [queryParams] = useSearchParams();
  const query = queryParams.get("search") || "";

  const { data, error } = useQuery({
    queryKey: ["wordData", query],
    queryFn: () => fetchWordData(query),
    enabled: !!query,
  });

  if (error || !data || data.length === 0) return <SomethingWrong />;

  const wordInfo = data[0] as Word;

  return (
    <Container>
      <WordHeader word={wordInfo.word} phonetics={wordInfo.phonetics} />
      <MeaningList meanings={wordInfo.meanings} />
    </Container>
  );
}

export default WordDetails;
