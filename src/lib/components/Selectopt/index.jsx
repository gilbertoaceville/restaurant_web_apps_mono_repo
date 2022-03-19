import React from "react";
import {} from "./selectOpt.styles";

const Index = ({ defaultOption, children }) => {
  return (
    <div>
      <div className="leftDiv">
        <select className="monthlyArrow">
          <option>{defaultOption}</option>
          {children.map((child, index) => {
            return <option key={index + child}>{child}</option>;
          })}
          <RiArrowDownSLine />
        </select>
      </div>
    </div>
  );
};

export default Index;
