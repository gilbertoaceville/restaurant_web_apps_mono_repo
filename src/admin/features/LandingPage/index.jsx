import React, { useState } from "react";
import LogoImage from "../../../lib/assets/logo/logo.png";
import {
    LandingPageWrapper,
    LogoContainer,
    FormContainer,
    FormTitle,
    Logo,
} from "./LandingPage.styles";
import SignUpPage from "../AuthPages/SignUp";
import SignInPage from "../AuthPages/SignIn";
import Image from 'next/image';
import ForgotPasswordPage from "../AuthPages/ForgotPassword";


// 
const LandingPage = () => {
    const [showLogin, setShowTab] = useState(true);
    const [showForgotPW, setShowForgotPW] = useState(true);


    const onClickTab = () => {
        setShowTab(!showLogin);
    };

    return (
        <React.Fragment>
            {showForgotPW ?
                <LandingPageWrapper>
                    <LogoContainer>
                        <div id="logo-holder">
                            {/* <Logo src={LogoImage} /> */}
                            <Image
                                src={LogoImage}
                                alt="logo"
                                width={800}
                                height={600}
                            />
                        </div>
                    </LogoContainer>
                    <FormContainer>
                        <div className={"form-and-title-holder"}>
                            <div className={"form-title-holder"}>
                                <FormTitle
                                    onClick={onClickTab}
                                    style={{
                                        color: showLogin ? "#F38B1C" : "#7F7F7F",
                                        borderBottom: showLogin ? "2px solid #F38B1C" : "",
                                    }}
                                >
                                    {" Create Account"}
                                </FormTitle>
                                <FormTitle
                                    onClick={onClickTab}
                                    style={{
                                        color: !showLogin ? "#F38B1C" : "#7F7F7F",
                                        borderBottom: !showLogin ? "2px solid #F38B1C" : "",
                                    }}
                                >
                                    {"SignIn"}
                                </FormTitle>
                            </div>
                            <div className={"form-holder"}>
                                {showLogin ? (
                                    /* CREATE ACCOUNT */
                                    <SignUpPage />
                                ) : (
                                    /* SIGNIN */
                                    <SignInPage
                                        onClick={() => setShowForgotPW(!showForgotPW)}
                                    />
                                )}
                            </div>
                        </div>
                    </FormContainer>

                </LandingPageWrapper>
                :
                <ForgotPasswordPage />
            }
        </React.Fragment>
    );
};

export default LandingPage;
