import { useState } from "react";
import axios from "axios";
import { TASKS_API } from "@/lib/constants/tasks";
import { SearchProps } from "@/types/SearchProps";

const SearchTasksWithAPI = ({ tasks, onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() === "") {
      onSearch(tasks);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get<Task[]>(
        TASKS_API.endpoints.search(value)
      );
      onSearch(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Error fetching search results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    onSearch(tasks); // Reset to the full task list
  };

  return (
    <div className="mb-4 relative">
      {error && <span className="text-red-500">{error}</span>}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search with Fuse by API"
        className="bg-customGray text-grey py-3 px-3 rounded-[8px] shadow-md max-w-740 w-full border border-customGray-light outline-none"
      />
      {loading && <span>Loading...</span>}
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

export default SearchTasksWithAPI;
