import react, { useRef, useEffect } from "react";

function InfiniteScroll({ children, loadMore, hasMore, loading }) {
  const observerRef = useRef(null);
  useEffect(() => {
    if (loading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry.isIntersecting) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [loading, hasMore, loadMore]);

  return (
    <div className="infinite-scroll">
      {children}

      {/* Sentinel */}
      <div ref={observerRef} style={{ height: "20px" }} />

      {loading && <div className="loading">Loading more...</div>}

      {!hasMore && <div className="end-message">No more items.</div>}
    </div>
  );
}

export default InfiniteScroll;
