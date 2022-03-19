import React, { useReducer } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  BranchText,
  Cart,
  Help,
  Icon,
  Notifications,
  Settings,
  WrapperContainer,
} from "./header.styles";
import Logo from "./../../../lib/assets/logo/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  IoIosNotifications,
  IoIosSettings,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import SearchBar from "../searchbar";
import { FiMenu } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { DropDownSelect } from "../DropdownSelect/dropDownSelect.component";
import { CgMenuGridR } from "react-icons/cg";
import { FcOnlineSupport } from "react-icons/fc";
import Profile from "../../assets/pdf.png";

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Us",
    to: "/about-us",
  },
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "Testimonials",
    to: "/testimonials",
  },
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "Careers",
    to: "/careers",
  },
  {
    name: "Location",
    to: "/location",
  },
];
export const Header1 = ({ addModal }) => {
  const router = useRouter();
  return (
    <WrapperContainer>
      <div className="section-container">
        <div className="section logo-container">
          <Image src={Logo} height={"80px"} width={"120px"} />
        </div>
        <ul className="section first-nav-link-container">
          {links?.map(({ name, to }) => {
            const classname = router.asPath === to ? "route-active" : "";
            return (
              <li className={classname} key={name}>
                <Link href={to}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="section second-nav-link-container">
          <div className="section button-container">
            <div onClick={addModal} className="button order-button">
              <p>ORDER NOW</p>
            </div>
            <div className="button auth-button">
              <p>Log in</p>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export const Header2 = () => {
  const [toggle, setToggle] = useReducer((state) => !state, true);
  const [toggler, setToggler] = useReducer((state) => !state, true);

  return (
    <WrapperContainer>
      <div className="section-container">
        <div className="section logo-container">
          <Image src={Logo} height={"80px"} width={"120px"} />
        </div>

        <div className="section  second-nav-link-container">
          <SearchBar
            shadow="0px 4px 4px -2px #aaa"
            height="45px"
            width="461px"
          />
        </div>

        <div className="section first-nav-link-container">
          <a href="/">
            <div className="profile-image">
              <Image
                src={Profile}
                objectFit="cover"
                height="100%"
                width="100%"
                alt="Profile picture"
              />
            </div>
            <p>Hi, Linda</p>
          </a>
          <a href="/">
            <Cart>
              <Icon>
                <AiOutlineShoppingCart />
                <div className="icon-number cart-icon-number">2</div>
              </Icon>
              <BranchText>My Cart</BranchText>
            </Cart>
          </a>
          <a href="/">
            <Notifications>
              <Icon>
                <IoIosNotifications />
                <div className="icon-number">3</div>
              </Icon>
              <BranchText>Notification</BranchText>
            </Notifications>
          </a>
          <Help>
            <Icon>
              <FaUserAlt />
            </Icon>
            <BranchText onClick={setToggler}>
              Help{" "}
              {toggler ? (
                <IoIosArrowDown color="#7f7f7f" />
              ) : (
                <IoIosArrowUp color="#7f7f7f" />
              )}
            </BranchText>
          </Help>

          <Settings>
            <Icon>
              <IoIosSettings />
            </Icon>
            <BranchText onClick={setToggle}>
              Settings{" "}
              {toggle ? (
                <IoIosArrowDown color="#7f7f7f" />
              ) : (
                <IoIosArrowUp color="#7f7f7f" />
              )}
            </BranchText>
          </Settings>
        </div>
      </div>
    </WrapperContainer>
  );
};
