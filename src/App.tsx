import React, { useState } from "react";
import Tabs from "./components/easy/Tabs";
import Profile from "./components/easy/Tabs/Profile";
import Setting from "./components/easy/Tabs/Setting";
// import { faq } from "./utils";
// import Accordion from "./components/easy/Accordion";
import "./App.css";

const tabsData = [
  { label: "Profile", content: <Profile /> },
  { label: "Settings", content: <Setting /> },
  { label: "Tab 3", content: "Content for Tab 3" },
];

function App() {
  // const [activeIndex, setActiveIndex] = React.useState(new Set([]));
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
    <div className="header-label">
      System Design
    </div>
      {/* <Accordion
          items={faq}
          defaultActiveIndex={0}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        /> */}
      <Tabs
        tabs={tabsData}
        defaultActiveTab={0}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
    </>
  );
}

export default App;
