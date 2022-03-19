import styled from "styled-components";

const checkColor = (color, val) => {
  if (color) return color.includes("#") ? color + val : color;
};

export const SelectDropdownWrapper = styled("div")`
  /* margin-bottom: 20em; */
  .select__wrapper {
    text-align: left;
    width: ${({ width }) => width || "25em"};
    height: ${({ height }) => height || "max-contents"};
    /* border-radius: 0.25em; */
    margin-top: -2px;
    background: transparent;
    box-shadow: 6px 8px 10px 0px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    /* padding: 1em 0.2em; */
    flex-direction: column;
    border: none;
  }

  .select__wrapper h3 {
    margin: 0px;
  }

  .select {
    position: relative;
    text-align: left;
    cursor: pointer;
    /* border: solid blue; */
  }

  .select::after {
    content: "";
    position: absolute;
    right: 0.8em;
    top: 0.6em;
    border: 0.5em solid red;
    border-color: gray transparent transparent transparent;
    transition: 0.4s all ease-in-out;
  }

  .select__label {
    font-size: 13px;
    line-height: 16px;
    font-weight: 100;
    height: 40px;
    position: absolute;
    opacity: 0.8;
    color: #303233;
    bottom: -10px;
  }

  .select__label p {
    transition: all 0.3s;
    text-indent: 5px;
  }

  .select__value {
    font-weight: 400;
    padding-left: 0.9em;
    min-height: 20px;
  }

  .select__value p {
    margin: 0px;
    min-height: 20px;
    font-size: 13px;
    font-weight: 400;
    color: #444;
  }

  .select__options {
    background: #f4f5f7;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    transition: opacity 0.2s, padding 0.2s, max-height 0.2s;
    overflow-y: scroll;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    z-index: 999;
    border: 0.06em solid
      ${({ color }) => (color ? checkColor(color, "65") : "#4d008f65")};
    background: #fff;
    border-radius: 0.25em;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 5px 0px;
  }
  .select__options::-webkit-scrollbar {
    display: none;
  }
  .select__options .select__option {
    padding: 13px;
    transition: all 0.2s;
    border-top: 0.06em solid #d9d9d9;
    font-size: 18px;
    font-weight: 400;
  }

  .select__options .select__option:hover,
  .select__options .select__option-active {
    background: ${({ color }) => (color ? color + "15" : "#8800ff15")};
  }

  .select-active .select__trigger {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 9;
  }

  .select-active .select__options {
    max-height: 18em;
    opacity: 1;
    margin-top: 1.2em;
  }

  .select-active .select__label,
  .select.selected .select__label {
    font-size: 13px;
    font-weight: 900;
    opacity: 1;
    display: none;
  }

  .select-active .select__label p,
  .select.selected .select__label p {
    margin-top: 0px;
    margin-left: 0px;
  }

  .select-deactivate .select__value {
    animation: fadeIn 0.3s;
  }

  .select-deactivate .select__options {
    background: #f4f5f7;
    max-height: 0px;
    opacity: 0;
  }
  .select-active {
    transition: 0.4s all ease-in-out;
  }

  .select-active.select::after {
    transform: rotate(-180deg);
    top: 0em;
    border-color: ${({ color }) => color || "#8800ff"} transparent transparent
      transparent;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
