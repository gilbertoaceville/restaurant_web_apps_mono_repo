import React, { useState } from "react";
import { SearchCategoryContainer } from "./search.styles";
import Image from 'next/image';
import SearchIcon from "../../assets/search-icon.png";

const SearchCategories = ({margin, placeholder="Search menus, prices and stores", type, required}) => {
  const [value, setValue] = useState("");
  return (
    <SearchCategoryContainer>
      <input
        margin={margin}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        value={value}
        required={required}
        type={type}
        className="search-category-input"
      />
      <div className="search-icon-container">
        <Image src={SearchIcon} alt="search icon" objectFit="contain" height="15px" width="15px"/>
      </div>
    </SearchCategoryContainer>
  );
};

export default SearchCategories;
