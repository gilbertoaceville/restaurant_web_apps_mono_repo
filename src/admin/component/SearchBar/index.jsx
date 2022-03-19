import React from "react"
import { SearchBarContainer,Input,IconContainer } from "./searchBar.styles"
import {BiSearch} from "react-icons/bi"

 const SearchBar = ({placeholder="Search keyword", width='670px'}) =>{
    return(
        <SearchBarContainer width={width}>
            <Input type="text" placeholder={placeholder} />
            <IconContainer>
            <BiSearch size={20}/>
            </IconContainer>
        </SearchBarContainer>
    )
};
export default SearchBar;


// styles props for switcing inputs

// border -> SearchContainer
// shadow -> SearchContainer
// iconBgColor == give value of transparent or said color
// iconColor