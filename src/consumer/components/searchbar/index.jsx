import React from "react";
import { SearchBarContainer, Input, IconContainer } from "./searchBar.styles";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({
  placeholder = "Search keyword",
  width,
  height,
  shadow,
}) => {
  return (
    <SearchBarContainer width={width} height={height} shadow={shadow}>
      <Input type="text" placeholder={placeholder} />
      <IconContainer>
        <BiSearch size={20} />
      </IconContainer>
    </SearchBarContainer>
  );
};
export default SearchBar;

// styles props for switcing inputs

// border -> SearchContainer
// shadow -> SearchContainer
// iconBgColor == give value of transparent or said color
// iconColor
