import React from "react";
import InfiniteScroll from "./index.jsx";
import "./index.css";

function InfiniteScrollExample() {
  const [characters, setCharacters] = React.useState([]);
  const [nextUrl, setNextUrl] = React.useState(
    "https://rickandmortyapi.com/api/character",
  );
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const requestInFlight = React.useRef(false);

  const hasMore = Boolean(nextUrl);

  const loadMore = React.useCallback(async () => {
    if (loading || !nextUrl || requestInFlight.current) return;

    requestInFlight.current = true;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(nextUrl);

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "API rate limit reached. Please wait a moment and try again.",
          );
        }

        throw new Error("Failed to fetch characters");
      }

      const data = await response.json();

      setCharacters((prev) => {
        const existingIds = new Set(prev.map((character) => character.id));
        const uniqueResults = data.results.filter(
          (character) => !existingIds.has(character.id),
        );

        return [...prev, ...uniqueResults];
      });

      setNextUrl(data.info.next);
    } catch (err) {
      setError(err.message || "Something went wrong while loading data.");
    } finally {
      setLoading(false);
      requestInFlight.current = false;
    }
  }, [loading, nextUrl]);

  React.useEffect(() => {
    if (!characters.length && !loading) {
      loadMore();
    }
  }, [characters.length, loading, loadMore]);

  return (
    <div className="InfiniteScrollExample">
      <h1>Rick & Morty Characters</h1>

      <InfiniteScroll loadMore={loadMore} loading={loading} hasMore={hasMore}>
        <div className="character-list">
          {characters.map((character) => (
            <div className="character-card" key={character.id}>
              <img src={character.image} alt={character.name} />

              <h2>{character.name}</h2>

              <p>
                <strong>Status:</strong> {character.status}
              </p>

              <p>
                <strong>Species:</strong> {character.species}
              </p>
            </div>
          ))}
        </div>

        {error && (
          <div className="error">
            <p>{error}</p>

            <button onClick={loadMore}>Try again</button>
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScrollExample;
