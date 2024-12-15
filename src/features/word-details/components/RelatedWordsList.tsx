import { Link } from "react-router-dom";

function RelatedWordsList({ words }: { words: string[] }) {
  return (
    <ul className="flex flex-wrap gap-4">
      {words.map((word) => (
        <li key={word}>
          <Link to={{ pathname: "/", search: `?search=${word}` }}>{word}</Link>
        </li>
      ))}
    </ul>
  );
}

export default RelatedWordsList;
