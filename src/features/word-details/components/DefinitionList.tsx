import { Definitions } from "@features/word-details/types";

function DefinitionList({ definitions }: { definitions: Definitions }) {
  return (
    <ul>
      {definitions.map(({ definition, example }) => (
        <li
          key={definition}
          className="relative mb-8 pl-8 before:absolute before:left-0 before:top-3.5 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-primary-purple-500"
        >
          <p>{definition}</p>
          {example && (
            <p className="text-gray-500">
              <span className="sr-only">Example: </span>
              <span>{`"${example}"`}</span>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

export default DefinitionList;
