import styled from "styled-components";

const font = "12px";
const txtColor = "#707070";

export const FlexibleDiv = styled.div`
  height: max-content;
  flex-basis: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  background: #fff9ec 0% 0% no-repeat padding-box;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderLeftDiv = styled.div`
  height: 100%;
  flex-basis: 20%;
  box-sizing: border-box;
`;
export const HeaderLogo = styled.img`
  height: 100%;
  width: 50%;
  object-fit: contain;
  box-sizing: border-box;
  cursor: pointer;
`;

export const HeaderCenterDiv = styled.div`
  display: flex;
  height: 100%;
  flex-basis: 55%;
`;
export const Branch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
`;

export const BranchImage = styled.div`
  flex-basis: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const BranchText = styled.div`
  flex-basis: 30%;
  font-size: 15px;
  color: ${txtColor};
  display: flex;
  align-items: center;

  .icon {
    margin: 3px 0 0 4px;
  }
`;

export const Offline = styled.div`
  width: 35%;
  height: 100%;

  .offline,
  .online {
    display: flex;
    width: 100%;
    height: 40%;
    justify-content: flex-start;
    align-items: flex-end;

    .you-are-offline {
      font-size: ${font};
      color: ${txtColor};
    }
    .you-are-online {
      font-size: ${font};
      color: #15d527;
    }

    .offline-switch,
    .online-switch {
      margin-left: 10px;
      display: flex;
      cursor: pointer;

    }
  }

  .text {
    display: flex;
    width: 100%;
    height: 60%;
    font-size: 10px;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10px;
  }

  .offline-text {
    color: ${txtColor};
  }

  .online-text {
    color: ${txtColor};
  }
`;

export const HeaderRightDiv = styled.div`
  display: flex;
  height: 100%;
  flex-basis: 25%;
  align-items: center;
`;

export const Notifications = styled(FlexibleDiv)`
padding: 10px 5px;
cursor: pointer;
&:hover{
  border-radius: 15px;
  background-color: #70707015;

  svg{
    color: #f38b1c;
  }
}
`;

export const Help = styled(FlexibleDiv)`
padding: 10px 5px;
cursor: pointer;
&:hover{
  border-radius: 15px;
  background-color: #70707015;
  svg{
    color: #f38b1c;
  }
}
`;

export const Settings = styled(FlexibleDiv)`
padding: 10px 5px;
cursor: pointer;
&:hover{
  border-radius: 15px;
  background-color: #70707015;
   svg{
    color: #f38b1c;
  }
}
`;

export const Icon = styled.div`
  height: 50%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.7rem;
  color: ${txtColor};
  position: relative;

  .icon-number {
    font-size: 10px;
    background-color: #ea4335;
    border-radius: 100%;
    height: 11px;
    width: 11px;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1px;
    right: 18px;
    box-shadow: 0 2px 3px -1px #ffffff;
  }
`;

export const Text = styled.div`
  height: 50%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 11px;
  color: ${txtColor};
`;
