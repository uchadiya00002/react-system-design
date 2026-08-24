import { useState, useEffect, useRef } from "react";
import "./index.css";

function AutoComplete({ items }) {
  const [inputValue, setInputValue] = useState("");
  const [showList, setShowList] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const wrapperRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowList(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredItems =
    inputValue.trim() === ""
      ? []
      : items.filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase()),
        );

  const handleKeyDown = (event) => {
    if (!showList || filteredItems.length === 0) {
      if (event.key === "Escape") {
        setShowList(false);
      }

      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        setHighlightedIndex((prevIndex) => {
          if (prevIndex === filteredItems.length - 1) {
            return 0;
          }

          return prevIndex + 1;
        });

        break;

      case "ArrowUp":
        event.preventDefault();

        setHighlightedIndex((prevIndex) => {
          if (prevIndex <= 0) {
            return filteredItems.length - 1;
          }

          return prevIndex - 1;
        });

        break;

      case "Enter":
        event.preventDefault();

        if (highlightedIndex >= 0) {
          const selectedItem = filteredItems[highlightedIndex];

          setInputValue(selectedItem.label);
          setShowList(false);
          setHighlightedIndex(-1);
        }

        break;

      case "Escape":
        event.preventDefault();

        setShowList(false);
        setHighlightedIndex(-1);

        break;

      default:
        break;
    }
  };

  return (
    <div className="autocomplete-wrapper" ref={wrapperRef}>
      <input
        role="combobox"
        type="text"
        value={inputValue}
        className="autocomplete-input"
        onFocus={() => setShowList(true)}
        onChange={(event) => {
          setInputValue(event.target.value);
          setShowList(true);

          // New search = reset keyboard selection
          setHighlightedIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        aria-expanded={showList}
        aria-controls="autocomplete-list"
        aria-activedescendant={
          highlightedIndex >= 0
            ? `autocomplete-option-${highlightedIndex}`
            : undefined
        }
      />

      {showList && (
        <div
          id="autocomplete-list"
          className="autocomplete-list"
          role="listbox"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                id={`autocomplete-option-${index}`}
                key={item.label}
                role="option"
                aria-selected={highlightedIndex === index}
                className={`autocomplete-item ${
                  highlightedIndex === index ? "selected-item" : ""
                }`}
                onMouseDown={(event) => {
                  // Prevent input from losing focus before selection
                  event.preventDefault();
                }}
                onClick={() => {
                  setInputValue(item.label);
                  setShowList(false);
                  setHighlightedIndex(-1);
                }}
              >
                {item.label}
              </div>
            ))
          ) : inputValue.trim() !== "" ? (
            <div className="autocomplete-empty">No results found</div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
