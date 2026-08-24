import { useState, useEffect } from "react";
import useDebounce from "./index.jsx";
function DebounceExample() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const debouncedValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResults([]);
      setError(null);
      return;
    }

    const controller = new AbortController();

    const handleSearchGithubUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${debouncedValue}`,
               {
          signal: controller.signal,
        }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setSearchResults(data.items);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    handleSearchGithubUser();
      return () => {
    controller.abort();
  };
  }, [debouncedValue]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      className="debounce-wrapper"
    >
      <input
        placeholder="Search Github Users..."
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          outline: "none",
          padding: "5px 10px",
          width: "400px",
        }}
      />

      <div className="searchResults">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.login}</li>
            ))}
          </ul>
        ) : debouncedValue ? (
          <div>No users found</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default DebounceExample;
