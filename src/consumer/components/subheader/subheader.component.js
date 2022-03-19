import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import SearchCategories from "../searchCategories/search.component";
import { Container } from "./subheader.styles";

const SubHeader = ({ search = true }) => {
  const [showCategory, setShowCategory] = useState(true);

  const displayCategories = () =>
    setShowCategory((showCategory) => !showCategory);
  return (
    <Container>
      <section className="header-section">
        <div className="header-section-wrap">
          <header onClick={displayCategories}>
            <h2>
              <BsFillGrid3X3GapFill /> Categories
            </h2>
          </header>
          <ul className={showCategory ? "category-list" : "show-category-list"}>
            <li>
              <span>Rice</span>
              <span className="arrow"></span>
            </li>
            <li>
              <span>Rice</span>
              <span></span>
            </li>
          </ul>
        </div>
        {search && <SearchCategories />}
      </section>
    </Container>
  );
};

export default SubHeader;
