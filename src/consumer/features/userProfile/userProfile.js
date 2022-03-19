import React, { useState } from "react";
import Button from "../../../restaurant/component/Button/button.component";
import InputComponent from "../../../restaurant/component/Input/input.component";
import EditableProfile from "../../components/editableProfile/editableProfile.component";
import Footer from "../../components/footer/footer.component";
import SelectComponent from "../../components/select/select.component";
import SubHeader from "../../components/subheader/subheader.component";
import { HeaderWrap, ProfileContainer } from "./userProfile.styles";

const state = [
  { name: "abia", value: "abia" },
  { name: "enugu", value: "enugu" },
];
const city = [
  { name: "aba", value: "aba" },
  { name: "umuahia", value: "umuahia" },
];
const UserProfile = () => {
  const [selectedOption, setSelectedOption] = useState("Male");
  return (
    <ProfileContainer>
      <SubHeader search={false} />
      <article className="form-container">
        <form className="form">
          <div className="left-form-layout">
            <EditableProfile />
            <HeaderContainer />
            <InputComponent label="First Name" val="Linda" />
            <InputComponent label="Last Name" val="Cabret" />
            <div className="radio-input-container">
              <label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  checked={selectedOption === "Male"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <span>Male</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  checked={selectedOption === "Female"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <span>Female</span>
              </label>
            </div>
            <div className="separator"></div>
            <HeaderContainer title="Password" />
            <InputComponent
              label="Current Password"
              type="password"
              required={true}
              placeholder="**** **** ****"
            />
            <InputComponent
              label="New Password"
              type="password"
              required={true}
              placeholder="**** **** ****"
            />
            <InputComponent
              label="Confirm Password"
              type="password"
              required={true}
              placeholder="**** **** ****"
            />
            <div className="btn-container">
              <Button value="Change Password" type="submit" />
            </div>
          </div>
          <div className="right-form-layout">
            <HeaderContainer title="Address and Phone" />
            <InputComponent
              label="Address"
              val="145 Abia Polytechnic, off Aba Owerri Road"
            />
            <SelectComponent title="State" options={state} />
            <SelectComponent title="City" options={city} />
            <InputComponent
              label="Phone"
              type="tel"
              required={true}
              val="+23481645879545"
            />
            <div className="btn-container">
              <Button value="Save" type="button" />
            </div>
          </div>
        </form>
      </article>
      <Footer />
    </ProfileContainer>
  );
};

const HeaderContainer = ({ title = "Personal details" }) => {
  return (
    <HeaderWrap>
      <h2 className="header-title">{title}</h2>
    </HeaderWrap>
  );
};

export default UserProfile;
