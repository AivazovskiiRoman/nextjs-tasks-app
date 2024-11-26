import { useState } from "react";
import { SearchProps } from "@/types/SearchProps";

const SearchTasksWithFilter = ({ tasks, onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(filtered);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch(tasks); // Reset to the full task list
  };

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search Task by JS Filter"
        className="bg-customGray text-grey py-3 px-3 rounded-[8px] shadow-md max-w-740 w-full border border-customGray-light outline-none"
      />
      {query && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label="Clear search"
        >
          &#x2715;
        </button>
      )}
    </div>
  );
};

export default SearchTasksWithFilter;
