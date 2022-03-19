import React from "react";
import Dashboard from "../../../../src/restaurant/features/Dashboard";
import OrderRequest from "../../../../src/restaurant/features/Dashboard/OrderRequest";
import Canceled from "../../../../src/restaurant/features/Dashboard/OrderRequest/Canceled";
import Delivered from "../../../../src/restaurant/features/Dashboard/OrderRequest/Delivered";
import NewOrders from "../../../../src/restaurant/features/Dashboard/OrderRequest/NewOrders";
import OnDelivery from "../../../../src/restaurant/features/Dashboard/OrderRequest/OnDelivery";

const Index = ({ children }) => {
  return (
    <OrderRequest>
      <NewOrders />
    </OrderRequest>
  );
};

export default Index;