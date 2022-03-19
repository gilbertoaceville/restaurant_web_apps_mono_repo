import { useEffect, useState, useRef } from "react";
import { Container } from "./dropdown.styles";
import {
  IoIosArrowUp,
  IoIosArrowDown
} from "react-icons/io";

const txtColor = "#707070";

export const DropDownMenu = ({_style, listItem}) => {
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
    <Container className="container" ref={container}>
      <button type="button" className="button" onClick={() => setOpen(!open)}>
        {open ? <IoIosArrowUp color={txtColor} /> : <IoIosArrowDown color={txtColor} />}
      </button>
      {open && (
        <div className={`dropdown-wrapper`} style={_style} >
          {
            listItem.map(({icon, text})=>(
          <ul className="dropdown-menu">
            <li className="dropdown-menu__item icon">{icon}</li>
            <li className="dropdown-menu__item text">{text}</li>
          </ul>
            ))
          }
        </div>
      )}
    </Container>
  );
};

// export default DropDownMenu;
