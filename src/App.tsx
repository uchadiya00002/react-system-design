import React from "react";
import Accordion from "./components/easy/Accordion";
import { faq } from "./utils";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = React.useState(new Set([]));
  return (
    <>
      System Design
      <div>
        <Accordion
          items={faq}
          defaultActiveIndex={0}
          activeIndex={activeIndex}
          onChange={setActiveIndex}
        />
      </div>
    </>
  );
}

export default App;
