import { useEffect, useState, useRef } from "react";
import { Container } from "./dropdown.styles";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { GiFoodTruck, GiShoppingBag } from "react-icons/gi";

const txtColor = "#707070";

const listItems = [
  { text: "Dashboard", icon: <MdDashboard /> },
  { text: "Restaurant", icon: <BiDish /> },
  { text: "Customers", icon: <FaUsers /> },
  { text: "Deliveries", icon: <GiFoodTruck /> },
  { text: "Orders", icon: <GiShoppingBag /> },
  { text: "Deliveries", icon: <GiFoodTruck /> },
  { text: "Orders", icon: <GiShoppingBag /> },
];

export const DropDownMenu = ({
  _style,
  listItem = listItems,
  logo = false,
  position
}) => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  const handleClickOutside = ({ target }) => {
    if (container.current && !container.current.contains(target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <Container className="container" ref={container} >
      <button type="button" className="button" onClick={() => setOpen(!open)}>
        {open ? (
          <IoIosArrowUp color={txtColor} />
        ) : (
          <IoIosArrowDown color={txtColor} />
        )}
      </button>
      {!open && (
        <div className={`dropdown-wrapper`} style={_style}>
          {logo && (
            <Image
              src={Logo}
              alt="logo"
              objectFit="contain"
              height="120px"
              width="120px"
            />
          )}
          {listItem.map(({ icon, text }) => (
            <ul className="dropdown-menu">
              <li className="dropdown-menu__item icon">{icon}</li>
              <li className="dropdown-menu__item text">{text}</li>
            </ul>
          ))}

          <div className="dropdown-last-wrap">
            <ul className="dropdown-penultimate-Item">
              <li className="dropdown-penultimate-Item__item icon">
                <AiOutlineArrowLeft />
              </li>
              <li className="dropdown-penultimate-Item__item text">
                Back to Admin
              </li>
            </ul>
            <ul className="dropdown-menu dropdown-lastItem">
              <li className="dropdown-menu__item icon">
                <GoSignOut />
              </li>
              <li className="dropdown-menu__item text">Sign Out</li>
            </ul>
          </div>
        </div>
      )}
    </Container>
  );
};

// export default DropDownMenu;
