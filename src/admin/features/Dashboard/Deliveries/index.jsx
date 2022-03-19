import React, { useState } from "react";
import { DeliveriesWrapper } from "./deliveries.styles";
import Dashboard from "../../Dashboard";
import DeliveriesCard from "../../../component/Cards/MultipurposeCard";
import UserImage from "../../../../lib/assets/kk.jpg";
import ViewReportModal from "../../../component/Modal/ViewReport";
const Index = () => {
  const [openReportCard, setOpenReportCard] = useState(false);
  return (
    <Dashboard>
      {openReportCard && (
        <ViewReportModal onClick={() => setOpenReportCard(!openReportCard)} />
      )}
      <DeliveriesWrapper>
        <div className={"headLabel"}>
          <div className={"NAG"}>Name / Address / Gender</div>
          <div className={"EP"}>Email / Phone</div>
          <div className={"status"}>Status</div>
          <div className={"report"}></div>
          <div className={"blank"}></div>
        </div>
        <div className={"cardHolder"}>
          <DeliveriesCard
            userData={userData}
            onClickViewReport={() => setOpenReportCard(!openReportCard)}
            isDeliveries
            onClickMessage={() => console.log("clicked message button")}
            onClickCall={() => console.log("clicked call button")}
            onClickCancel={() => console.log("clicked cancel button")}
          />
        </div>
      </DeliveriesWrapper>
    </Dashboard>
  );
};

export default Index;
const userData = [
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "just now",
    userKmAway: "2",
  },
];
