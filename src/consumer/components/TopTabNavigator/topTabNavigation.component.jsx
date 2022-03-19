import React, { Component, useState } from "react";
import {Container} from './topTabNavigation.styles'

export const TopTabs=({Component1,Component2,Tab1,Tab2})=> {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <Container className="container">
      <div className="bloc-tabs">
        <p
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          {Tab1}
        </p>
        <p
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          {Tab2}
        </p>
      
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
    
     
          <div>
        {Component1}
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        
          
          <div>
          {Component2}
          </div>
        </div>

     
      </div>
    </Container>
  );
}

