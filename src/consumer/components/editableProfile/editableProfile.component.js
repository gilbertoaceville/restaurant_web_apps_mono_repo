import React, { useRef, useState } from "react";
import Image from "next/image";
import Profile from "../../assets/pdf.png";
import {
  EditProfileContainer,
  ProfileOverlayContainer,
  ProfileOverlay,
  EditIconImage,
  Touched,
} from "./editableProfile.styles";

const EditableProfile = () => {
  const [image, setImage] = useState(Profile);
  const fileToUpload = useRef();
  const onImageChange = (e) => {
    e.preventDefault();
    if (
      e.target.files &&
      e.target.files[0] &&
      (e.target.files[0].type === "image/jpeg" ||
        e.target.files[0].type === "image/jpg" ||
        e.target.files[0].type === "image/png")
    ) {
      const file = new FileReader();

      file.onloadend = (ev) => {
        if (ev.loaded > 2660710) {
          return;
        } else {
          setImage(ev.target.result);
          // sessionStorage.setItem("image", ev.target.result);
        }
      };
      file.readAsDataURL(e.target.files[0]);
    } else {
      setImage(null);
    }
  };

  const selectImage = () => fileToUpload.current.click();
  return (
    <EditProfileContainer>
      <ProfileOverlayContainer>
        <ProfileOverlay />
        <Image
          src={image}
          alt="profile"
          objectFit="contain"
          height="136px"
          width="136px"
        />
        <div className="input-container">
          <input
            ref={fileToUpload}
            type="file"
            accept="image/*"
            name="myImage"
            onChange={(e) => onImageChange(e)}
          />
        </div>
        <Touched onClick={selectImage}>
          <EditIconImage>
            <i className="fa-solid fa-pen"></i>
          </EditIconImage>
        </Touched>
      </ProfileOverlayContainer>
    </EditProfileContainer>
  );
};

export default EditableProfile;
