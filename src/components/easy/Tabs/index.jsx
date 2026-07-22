import React from "react";
import "./index.css";

const Tabs = ({ tabs, currentTab, onTabChange }) => {
  const handleTabClick = (index) => {
    if (tabs[index].disabled) return;
    onTabChange(index);
  };

  if (!tabs.length) return <p>No tabs</p>;

  return (
    <div className="tabs">
      <div role="tablist" className="tabItems">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={currentTab === index}
            className={`tabLabel ${currentTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
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
      <div role="tabpanel" className="tabContent">
        {tabs[currentTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
