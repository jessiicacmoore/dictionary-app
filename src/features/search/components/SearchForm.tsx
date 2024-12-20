import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { getRandomBabyAnimal } from "@utils/getRandomBabyAnimal";
import { TextInput } from "@features/ui";
import { Button } from "@features/ui";

function SearchForm() {
  const [queryParams, setQueryParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(queryParams.get("search") || "");

  useEffect(() => {
    const currentSearch = queryParams.get("search") || "";
    setSearchTerm(currentSearch);
  }, [queryParams]);

  const handleSubmit = (e: React.FormEvent) => {
    if (searchTerm.trim()) {
      setQueryParams({ search: searchTerm });
    }
    e.preventDefault();
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <TextInput
        id="search-input"
        label="Search"
        placeholder={getRandomBabyAnimal() + "..."}
        value={searchTerm}
        onChange={setSearchTerm}
        className="flex-grow"
      />
      <Button type="submit" className="min-w-20" aria-label="Search">
        <IoSearch
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl"
          aria-hidden
        />
      </Button>
    </form>
  );
}

export default SearchForm;
