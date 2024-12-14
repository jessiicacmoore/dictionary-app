import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Container } from "@features/layout";
import { TextInput } from "@features/ui";
import { Button } from "@features/ui";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <TextInput
          id="search-input"
          label="Search"
          placeholder="Puppies..."
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
    </Container>
  );
}

export default SearchForm;
