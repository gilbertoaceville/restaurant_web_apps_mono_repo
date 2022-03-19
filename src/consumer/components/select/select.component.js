import React, { useState } from "react";
import { SelectContainer } from "./select.styles";

const SelectComponent = ({ title, options = [] }) => {
  const [selectValue, setSelectValue] = useState("");
  return (
    <SelectContainer>
      <div className="method-select">
        <p>{title}</p>
        <select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          {options.map(({ value, name }) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </SelectContainer>
  );
};

export default SelectComponent;
