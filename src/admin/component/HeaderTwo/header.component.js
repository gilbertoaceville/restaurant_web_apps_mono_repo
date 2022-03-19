import React from "react";
import { DropDownMenu } from "../Dropdown";
import SearchBar from "../SearchBar";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import {
  BranchText,
  HeaderContainer,
  HeaderRightDiv,
  Icon,
  Notifications,
  Settings,
} from "./header.styles";

const styles = {
  background: "#F38B1C 0% 0% no-repeat padding-box",
  width: "200px",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0
};

/**
 *
 * @param {*} param0 children refers to nested elements below the search bar
 * @returns a two column grid UI
 * if you make use of this header...
 * Any components you need to work with becomes the children of this header
 */

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <div className="drop-down-layout">
        <DropDownMenu _style={styles} logo={true} />
        <div className="layout-fixer"></div>
      </div>

      <div className="right-layout-wrap">
        <div className="right-layout">
          <SearchBar />
          <HeaderRightDiv>
            <Notifications>
              <Icon>
                <IoIosNotifications />
                <div className="icon-number">3</div>
              </Icon>
              <BranchText>Notification</BranchText>
            </Notifications>
            <Settings>
              <Icon>
                <IoIosSettings />
              </Icon>
              <BranchText>Settings</BranchText>
            </Settings>
          </HeaderRightDiv>
        </div>
        {children}
      </div>
    </HeaderContainer>
  );
};

export default Header;
