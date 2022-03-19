import React from "react";
import {
  DashboardCards,
  LineChartTable,
  StarRateTable,
} from "../../../component/dashboardcards/dashboardcards.component";
import Header from "../../../component/HeaderTwo/header.component";
import { AllCardsWrap } from "./chart-dashboard.styles";

const MainDashboard = () => {
  return (
    <Header>
      <AllCardsWrap>
        <div className="left-layout">
          <LineChartTable />
          <StarRateTable />
        </div>
        <div className="right-layout">
          {[...Array(6)].map((_, index) => (
            <DashboardCards key={index} />
          ))}
        </div>
      </AllCardsWrap>
    </Header>
  );
};

export default MainDashboard;
