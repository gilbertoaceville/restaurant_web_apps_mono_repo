import React from "react";
import DeliveryManagementCard from "../../components/deliveryManagementCard/deliveryManagement.component";
import Footer from "../../components/footer/footer.component";
import SubHeader from "../../components/subheader/subheader.component";
import { DeliveryWrapper } from "./delivery.styles";

const Delivery = () => {
  return (
    <DeliveryWrapper>
      <SubHeader search={false} />
      <article className="delivery-cards-wrapper">
        <section className="delivery-cards-container">
          <DeliveryManagementCard />
          <DeliveryManagementCard />
          <DeliveryManagementCard />
          <DeliveryManagementCard />
        </section>
      </article>
      <Footer />
    </DeliveryWrapper>
  );
};

export default Delivery;
