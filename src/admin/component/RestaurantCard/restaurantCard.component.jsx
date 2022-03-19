import React, { useState } from "react";
import { RestaurantCardWrapper, Section } from "./restaurantCard.styles";
import { Button } from "../Button/button.component";
import { Switch } from "./Switch/switch.component";

import { RestrauntsBranchCard } from "../restrauntsBranchCard/restrauntsBranchCard.component";
export const RestaurantCard = () => {
  return (
    <RestaurantCardWrapper>
      <Section padding="10px">
        <RestrauntsBranchCard
          height="250px"
          minWidth="120px"
          
          firstGradientColor
          secondGradientColor
          thirdGradientColor
        />
        <Button>Access Restaurant</Button>
      </Section>
      <Section>
        <div className="section section1">
          <Switch />

          <p className="name">Faulks Branch</p>
          <p className="address">
            162 Old Glenridge St Fountain Aba, Abia State, Nigeria.
          </p>

          <p className="id">ID: RES124785</p>

          <p className="rating">499 reviews</p>
        </div>
        <div className=" section section2">
          <div className="today-order">
            <p>Today Orders</p>
            <p className="figures">80</p>
            <p>Complaint</p>
            <p className="figures">2</p>
          </div>
          <div className="today-customer">
            <p>Today customers</p>
            <p className="figures">78</p>
            <p>Returning customers</p>
            <p className="figures">245</p>
          </div>
        </div>
      </Section>
    </RestaurantCardWrapper>
  );
};
