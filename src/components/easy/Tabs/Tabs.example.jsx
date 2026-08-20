import React from "react";
import Tabs from "./index.jsx";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    content: (
      <div>
        <h3>Overview</h3>
        <p>This tab shows a quick summary of the component.</p>
      </div>
    ),
  },
  {
    id: "details",
    label: "Details",
    content: (
      <div>
        <h3>Details</h3>
        <p>Tabs are useful for grouping related content into separate panels.</p>
      </div>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    content: (
      <div>
        <h3>Settings</h3>
        <p>You can swap the visible tab using the currentTab state.</p>
      </div>
    ),
  },
];

function TabsExample() {
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <section className="demo-section">
      <h2>Tabs Example</h2>
      <Tabs
        tabs={tabs}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
    </section>
  );
}

export default TabsExample;
