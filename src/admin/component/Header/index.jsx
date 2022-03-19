import React, { useState } from "react";
import Image from "next/image";
import {
  HeaderWrapper,
  HeaderLeftDiv,
  HeaderCenterDiv,
  HeaderRightDiv,
  HeaderLogo,
  Branch,
  BranchImage,
  BranchText,
  Offline,
  Notifications,
  Help,
  Icon,
  Text,
  Settings,
  FlexibleDiv,
} from "./header.styles";
import Logo from "../../assets/logo.png";
import {
  IoIosNotifications,
  IoIosSettings,
  IoIosNotificationsOutline,
  IoIosInformationCircleOutline as Info,
} from "react-icons/io";
import { MdOutlineSupportAgent, MdOutlineLocationOn } from "react-icons/md";
import { BsToggleOff as Off, BsToggleOn as On } from "react-icons/bs";
// import { FaToggleOn as TogOn, FaToggleOff as TogOff } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { DropDownMenu as BranchDropDown } from "../Dropdown/index";
import { DropDownMenu as HelpDropDown } from "../Dropdown/index";
import { DropDownMenu as SettingsDropDown } from "../Dropdown/index";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const onClick = () => {
    setToggle(!toggle);
  };

  return (
    <HeaderWrapper>
      {/* leftDiv */}
      <HeaderLeftDiv>
        <HeaderLogo src={Logo.src} />
      </HeaderLeftDiv>

      {/* centerDiv */}
      <HeaderCenterDiv>
        <Branch>
          <BranchImage>
            <img src={Logo.src} alt="Branch" />
          </BranchImage>
          <BranchText>
            {"Faulks Branch"}
            <span className="icon">
              <IoIosArrowDown />
            </span>
            {/* <BranchDropDown
              _style={{ left: '-20px' }}
              listItem={BranchListItem}
            /> */}
          </BranchText>
        </Branch>
        <Offline>
          {toggle ? (
            <>
              <div className={"offline"}>
                <div style={{fontSize: "14px"}} className={"you-are-offline"}>{"You're Offline"}</div>
                <div className={"offline-switch"}>
                  <Off
                    onClick={onClick}
                    id="off"
                    style={{
                      color: "#707070",
                      fontSize: "1.2rem",
                      padding: "0px",
                    }}
                  />
                </div>
              </div>
              <div className={"offline-text text"}>
                {
                  " Stay offline when you're not availabe to reeceive orders. your branch can only receive orders when you're online"
                }
              </div>
            </>
          ) : (
            <>
              <div className={"online"}>
                <div style={{fontSize: "14px"}} className={"you-are-online"}>{"You're Online"}</div>
                <div className={"online-switch"}>
                  <On
                    onClick={onClick}
                    style={{
                      color: "#15d527",
                      fontSize: "1.2rem",
                    }}
                  />
                </div>
              </div>
              <div className={"online-text text"}>
                {"You're currently online, you'll be receiving orders."}
              </div>
            </>
          )}
        </Offline>
      </HeaderCenterDiv>

      {/* rightDiv */}
      <HeaderRightDiv>
        <Notifications>
          <Icon>
            <IoIosNotifications />
            <div className="icon-number">3</div>
          </Icon>
          <BranchText>{"Notification"}</BranchText>
        </Notifications>
        <Help>
          <Icon>
            <MdOutlineSupportAgent />
          </Icon>
          <BranchText>
            {"Help"}
            <span className="icon">
              <IoIosArrowDown />
            </span>
            {/* <HelpDropDown
              _style={{ left: '-20px' }}
              listItem={HelpListItem}
            /> */}
          </BranchText>
        </Help>
        <Settings>
          <Icon>
            <IoIosSettings />
          </Icon>
          <BranchText>
            {"Settings"}
            <span className="icon">
              <IoIosArrowDown />
            </span>
            {/* <SettingsDropDown
              _style={{ left: '-40px' }}
              listItem={SettingsListItem}
            /> */}
          </BranchText>
        </Settings>
        <FlexibleDiv></FlexibleDiv>
      </HeaderRightDiv>
    </HeaderWrapper>
  );
};

export default Header;

const BranchListItem = [
  {
    icon: "",
    text: "Lagos",
  },
  {
    icon: "",
    text: "Umuahia",
  },
  {
    icon: "",
    text: "Owerri",
  },
  {
    icon: "",
    text: "PortHarcourt",
  },
];
const HelpListItem = [
  {
    icon: "",
    text: "Call our help line",
  },
  {
    icon: "",
    text: "Send an Email",
  },
  {
    icon: "",
    text: "Quick response",
  },
];
const SettingsListItem = [
  {
    icon: <IoIosNotificationsOutline />,
    text: "Notification",
  },
  {
    icon: <MdOutlineLocationOn />,
    text: "Location Permission",
  },
  {
    icon: <Info />,
    text: "Legal & About",
  },
];
