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
import Logo from "../../../../lib/assets/logo/logo.png";
import {
  IoIosNotifications,
  IoIosSettings,
  IoIosNotificationsOutline,
  IoIosInformationCircleOutline as Info
} from "react-icons/io";
import {
  MdOutlineSupportAgent,
  MdOutlineLocationOn
} from "react-icons/md";
import { BsToggleOff as Off, BsToggleOn as On } from "react-icons/bs";
// import { FaToggleOn as TogOn, FaToggleOff as TogOff } from "react-icons/fa";
import { DropDownMenu as BranchDropDown } from "../../../component/Dropdown/index";
import { DropDownMenu as HelpDropDown } from "../../../component/Dropdown/index";
import { DropDownMenu as SettingsDropDown } from "../../../component/Dropdown/index";




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
          <BranchText>{"Faulks Branch"}
            <BranchDropDown
              _style={{ left: '-20px' }}
              listItem={BranchListItem}
            />
          </BranchText>

        </Branch>
        <Offline>
          {toggle ? (
            <>
              <div className={"offline"}>
                <div className={"you-are-offline"}>{"You're Offline"}</div>
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
                <div className={"you-are-online"}>{"You're Online"}</div>
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
          </Icon>
          <Text>{"Notification"}</Text>
        </Notifications>
        <Help>
          <Icon>
            <MdOutlineSupportAgent />
          </Icon>
          <Text>{"Help"}
            <HelpDropDown
              _style={{ left: '-20px' }}
              listItem={HelpListItem}
            />
          </Text>
        </Help>
        <Settings>
          <Icon>
            <IoIosSettings />
          </Icon>
          <Text>{"Settings"}
            <SettingsDropDown
              _style={{ left: '-40px' }}
              listItem={SettingsListItem}
            />
          </Text>
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
    text: 'Lagos',
  },
  {
    icon: "",
    text: 'Umuahia',
  }, {
    icon: "",
    text: 'Owerri',
  },
  {
    icon: "",
    text: 'PortHarcourt',
  },
]
const HelpListItem = [
  {
    icon: "",
    text: 'Call our help line',
  },
  {
    icon: "",
    text: 'Send an Email',
  },
  {
    icon: "",
    text: 'Quick response',
  },
]
const SettingsListItem = [
  {
    icon: <IoIosNotificationsOutline />,
    text: 'Notification',
  },
  {
    icon: <MdOutlineLocationOn />,
    text: 'Location Permission',
  },
  {
    icon: <Info />,
    text: 'Legal & About'
  }
]
