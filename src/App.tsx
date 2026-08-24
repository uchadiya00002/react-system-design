import "./App.css";
// import AccordionExample from "./components/easy/Accordion/Accordion.example.jsx";
// import TabsExample from "./components/easy/Tabs/Tabs.example.jsx";
// import ModalExample from "./components/medium/Modal/Modal.example.jsx";
// import InfiniteScrollExample from "./components/medium/InfiniteScroll/InfiniteScroll.example.jsx";
// import AutoCompleteExample from "./components/medium/AutoComplete/AutoComplete.example.jsx";
import DebounceExample from "./components/hooks/useDebounce/Debounce.example.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="examples-grid">
        {/* <AccordionExample />
        <TabsExample />
        <ModalExample /> */}
        {/* <InfiniteScrollExample /> */}
        {/* <AutoCompleteExample/> */}
        <DebounceExample />
      </div>
    </div>
  );
}
