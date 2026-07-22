import React, { useState } from "react";
import Tabs from "./components/easy/Tabs";
import Profile from "./components/easy/Tabs/Profile";
import Setting from "./components/easy/Tabs/Setting";
import "./App.css";

const tabsData = [
  { id: 1, label: "Profile", content: <Profile />, disabled: true },
  { id: 2, label: "Settings", content: <Setting />, disabled: false },
  { id: 3, label: "Tab 3", content: "Content for Tab 3", disabled: false },
];

function App() {
  const [currentTab, setCurrentTab] = useState(() => {
    const savedTab = localStorage.getItem("active-tab");
    return savedTab ? parseInt(savedTab) : 0;
  });

  React.useEffect(() => {
    localStorage.setItem("active-tab", currentTab);
  }, [currentTab]);

  return (
    <>
      <div className="header-label">System Design</div>
      <Tabs
        tabs={tabsData}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
    </>
  );
}

export default App;
