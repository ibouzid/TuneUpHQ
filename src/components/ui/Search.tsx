import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, X } from "lucide-react";
import { useDebounce } from "../../hooks/useDebounce";
import { Icon } from "./Icon";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  //TODO Implement api in mock server
  const { data: results, isLoading } = useQuery({
    queryKey: ["search", debouncedSearch],
    queryFn: () =>
      fetch(`/api/search?q=${debouncedSearch}`).then((res) => res.json()),
    enabled: debouncedSearch.length > 2,
  });

  return (
    <div className="relative w-full max-w-md">
        {isLoading && (
        <div className="absolute inset-y-0 right-10 flex items-center">
          <div className="animate-spin h-4 w-4 border-2 border-gold-500 border-t-transparent rounded-full" />
        </div>
      )}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon icon={Search} className="text-text-secondary size-5" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by VIN, Customer, or Plate..."
        className="w-full bg-background-subtle border border-border-subtle rounded-md py-2 pl-10 pr-10 text-text-primary focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <Icon
            icon={X}
            className="text-text-secondary hover:text-text-primary size-4 cursor-pointer"
          />
        </button>
      )}
    </div>
  );
}
