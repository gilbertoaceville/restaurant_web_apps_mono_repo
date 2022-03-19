import React from "react";
import { DispatcherWrapper } from "./dispatcher.styles";
import Dashboard from "../../Dashboard";
import DispatcherCard from "../../../component/Cards/MultipurposeCard";
import UserImage from "../../../../lib/assets/kk.jpg";
import { Button } from "../../../component/Button/button.component";
const Index = () => {
  return (
    <Dashboard>
      <DispatcherWrapper>
        <div className={"headLabel"}>
          <div className={"NAG"}>Name / Address / Gender</div>
          <div className={"EP"}>Email / Phone</div>
          <div className={"blank"}>
            <div className="addDispatcher">
              <Button title='Add Dispatcher Button'>
                <span style={{ fontSize: "25px" }}>&#43;</span>
                {" Add Dispatcher"}
              </Button>
            </div>
          </div>
        </div>
        <div className={"cardHolder"}>
          <DispatcherCard
            userData={userData}
            isDispatcher
            onClickMessage={() => console.log("clicked message button")}
            onClickCall={() => console.log("clicked call button")}
            onClickCancel={() => console.log("clicked cancel button")}
          />
        </div>
      </DispatcherWrapper>
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
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: true,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "10",
    isVerified: true,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: false,
  },
  {
    userImage: UserImage,
    userName: "john doe",
    userAddress: "44b Aba Portharcourt Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "5",
    isVerified: true,
  },
  {
    userImage: UserImage,
    userName: "Adebamowo taiwo",
    userAddress: "44b Aba Owerri Road",
    userGender: "female",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "7",
    isVerified: true,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: false,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: true,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: true,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: false,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: true,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: true,
  },
  {
    userImage: UserImage,
    userName: "kayode kaleyemi",
    userAddress: "44b Aba Owerri Road",
    userGender: "MalE",
    userEmail: "usermail@example.com",
    userPhone: "08000000000",
    orderTime: "ordered just now",
    userKmAway: "2",
    isVerified: false,
  },
];
