import styled from "styled-components";

export const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  align-items: center;
`;

export const ProfileOverlayContainer = styled.div`
  width: 136px;
  height: 136px;
  border: 4px solid #f38b1c;
  border-radius: 100%;
  position: relative;

  img {
    border-radius: 100%;
  }

  .input-container {
      position: absolute;
      top: 50%;
      left: 0;
      z-index: -1;
      display: none;
  }

  .input-container input {
      width: 100%;
  }
`;

export const ProfileOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 100%;
  background-color: #33333350;
  z-index: 1;
`;

export const Touched = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  background: #ffffff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EditIconImage = styled.div`
  height: 70%;
  width: 70%;
  border-radius: 100%;
  border: 1px solid #f38b1c;
  display: flex;
  align-items: center;
  justify-content: center;

  .fa-pen {
    color: #f38b1c;
    font-size: 14px;
  }
`;
