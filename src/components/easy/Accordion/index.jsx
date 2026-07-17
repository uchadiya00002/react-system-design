import React from "react";
import "./index.css";

const Accordion = ({
  items,
  defaultActiveIndex = 0,
  activeIndex,
  onChange
}) => {

  const handleClick = (index) => {
    if (activeIndex.has(index)) {
      const newActiveIndex = new Set(activeIndex);
      newActiveIndex.delete(index);
      onChange(newActiveIndex);
    } else {
      const newActiveIndex = new Set(activeIndex);
      newActiveIndex.add(index);
      onChange(newActiveIndex);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={item.header} onClick={() => handleClick(index)}>
          <button
            className="accordion-header"
          >
            {item.header}
          </button>
          {activeIndex.has(index) && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
