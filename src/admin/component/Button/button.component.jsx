import React from "react"
import {ButtonWrapper} from "./button.styles"

export const Button = ({children}) =>{
    return(
        <ButtonWrapper >
            <p>{children}</p>
        </ButtonWrapper>
    )
}