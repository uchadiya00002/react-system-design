import React from "react";
import Accordion from "./index.jsx";

const accordionItems = [
  {
    header: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces with reusable components.",
  },
  {
    header: "Why use accordions?",
    content:
      "Accordions help hide secondary content until the user asks to expand it.",
  },
  {
    header: "Is it accessible?",
    content:
      "This example keeps the panel state in a controlled set so you can toggle sections open and closed.",
  },
];

function AccordionExample() {
  const [activeIndex, setActiveIndex] = React.useState(new Set([0]));

  return (
    <section className="demo-section">
      <h2>Accordion Example</h2>
      <Accordion
        items={accordionItems}
        activeIndex={activeIndex}
        onChange={setActiveIndex}
      />
    </section>
  );
}

export default AccordionExample;
