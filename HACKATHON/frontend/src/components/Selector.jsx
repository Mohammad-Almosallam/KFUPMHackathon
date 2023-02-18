import { useState } from "react";
function Selector({ name, filterAdvanced }) {
  const [value, setValue] = useState("medium");
  function updadeSelector(e) {
    const newSelect = e.target.value;
    console.log(newSelect);
    setValue(newSelect);
    console.log("start");
    filterAdvanced(name, newSelect);
  }
  return (
    <div className="flex  justify-center ml-12">
      <div className="mb-3 xl:w-96">
        <h3 className="pb-3  first-letter:uppercase font-bold">{name}</h3>
        <select
          value={value}
          onChange={updadeSelector}
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}
export default Selector;
