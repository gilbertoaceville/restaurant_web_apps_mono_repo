import React from "react";
import { ButtonText, ButtonWrapper, } from "./Button.styles"

export const CutomButton =({children,background,color})=>{
    return(
        <ButtonWrapper background={background}>
            <ButtonText color={color}>
                {children}
            </ButtonText>
        </ButtonWrapper>
    )
}