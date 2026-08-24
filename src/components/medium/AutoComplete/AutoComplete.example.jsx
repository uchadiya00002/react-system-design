import { useEffect } from "react";
import AutoComplete from "./index.jsx";
import { top100Films } from "../../../utils/index.js";
function AutoCompleteExample() {
  useEffect(() => {
    console.log(top100Films);
  }, []);

  return (
    <AutoComplete items={top100Films} renderItems={(option) => option.label} />
  );
}
export default AutoCompleteExample;
