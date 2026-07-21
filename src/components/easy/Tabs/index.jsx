import React from "react";
import "./index.css";

const Tabs = ({ tabs, currentTab, onTabChange }) => {

  if (!tabs.length) return <p>No tabs</p>;

  return (
    <div className="tabs">
      <div className="tabItems">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            aria-label={`aria-${tab.label}`}
            aria-selected={currentTab === index}
            className={`tabLabel ${currentTab === index ? "active" : ""}`}
            onClick={() => onTabChange(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onTabChange(index);
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabContent">{tabs[currentTab]?.content}</div>
    </div>
  );
};

export default Tabs;
