import styled from "styled-components";

const font = "12px";
const txtColor = "#707070";
export const HeaderContainer = styled.section`
  display: grid;
  grid-template-columns: 200px 1fr;
  padding-right: 10px;

  .drop-down-layout {
    display: flex;
  }

  .drop-down-layout .layout-fixer {
    width: 200px;
  }

  .right-layout {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 750px) {
    padding-right: 0;
    display: flex;
    justify-content: space-between;

    .drop-down-layout .layout-fixer {
      display: none;
    }

    .right-layout {
      justify-content: space-between;
    }
  }
`;

export const HeaderRightDiv = styled.div`
  display: flex;
`;

export const FlexibleDiv = styled.div`
  height: max-content;
  ${"" /* flex-basis: 33.3%; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Notifications = styled(FlexibleDiv)`
  padding: 10px 5px;
  cursor: pointer;
  &:hover {
    border-radius: 15px;
    background-color: #70707015;

    svg {
      color: #f38b1c;
    }
  }
`;

export const Icon = styled.div`
  height: 50%;
  width: 50%;
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
    right: 4px;
    box-shadow: 0 2px 3px -1px #ffffff;
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

  @media (max-width: 750px) {
    flex-basis: unset;
    font-size: 12px;
  }
`;

export const Settings = styled(FlexibleDiv)`
  padding: 10px 5px;
  cursor: pointer;
  &:hover {
    border-radius: 15px;
    background-color: #70707015;
    svg {
      color: #f38b1c;
    }
  }
`;
