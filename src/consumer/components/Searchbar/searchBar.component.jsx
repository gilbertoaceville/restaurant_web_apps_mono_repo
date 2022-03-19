import React from "react"
import { SearchBarContainer,Input,IconContainer } from "./searchBar.styles"
import {BsSearch} from "react-icons/bs"

export const SearchBar = ({height,iconwidth}) =>{
    return(
        <SearchBarContainer height={height}>
            <Input  />
            <IconContainer height={height} iconwidth={iconwidth}>
            <BsSearch size={12}/>
            </IconContainer>
        </SearchBarContainer>
    )
}