import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchWordData } from "@features/word-details/api";
import { Word } from "@features/word-details/types";
import { LiveAnnouncer } from "@features/accessibility";
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

  const wordInfo =
    Array.isArray(data) && data.length > 0 ? (data[0] as Word) : null;

  return (
    <section>
      <h1 className="sr-only">Word Details</h1>
      <LiveAnnouncer
        isLoading={isLoading}
        error={error ? { message: error.message } : undefined}
        data={data}
        title={wordInfo?.word}
      />
      {!query && <NoQuery />}
      {isLoading && <Spinner />}
      {error && <SomethingWrong message={error.message} />}
      {data && wordInfo && (
        <>
          <WordHeader word={wordInfo.word} phonetics={wordInfo.phonetics} />
          <MeaningList meanings={wordInfo.meanings} />
        </>
      )}
    </section>
  );
}

export default WordDetails;
