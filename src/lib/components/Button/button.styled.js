import styled from "styled-components";
import { shadeColor } from "../../factory.lib";
import { variantMatch } from "../../helper.lib";

const variantSize = size =>
  size
    ? size === "sm"
      ? "0.677rem"
      : size === "md"
      ? "0.775rem"
      : size === "lg"
      ? "1rem"
      : ""
    : "0.775rem";

const variantIconSize = size =>
  size
    ? size === "sm"
      ? "small"
      : size === "md"
      ? "medium"
      : size === "lg"
      ? "large"
      : ""
    : "medium";

const variantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.5rem 0.9rem"
      : size === "md"
      ? "0.6rem 2rem"
      : size === "lg"
      ? "1rem 2.2rem"
      : "0.8rem 2rem";
  }
};
const resVariantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.3rem 0.4rem"
      : size === "md"
      ? "0.4rem 1rem"
      : size === "lg"
      ? "1rem 2.2rem"
      : "0.5rem .7rem";
  }
};
const lowResVariantPadding = (size, hasIcon) => {
  if ((size && hasIcon) || hasIcon) {
    return "0.8rem 1rem";
  } else {
    return size === "sm"
      ? "0.3rem 0.4rem"
      : size === "md"
      ? "0.4rem .7rem"
      : size === "lg"
      ? ".5rem 1.5rem"
      : "0.6rem 1rem";
  }
};

export const ButtonStyled = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "2px")};
  font-weight: ${({ bold }) => (bold ? 'bold' : "500")};
  padding: ${({ size, hasIcon }) => variantPadding(size, hasIcon)};
  @media (max-width: 750px) {
    padding: ${({ size, hasIcon }) => resVariantPadding(size, hasIcon)};
  }
  @media (max-width: 600px) {
    padding: ${({ size, hasIcon }) => lowResVariantPadding(size, hasIcon)};
  }
  font-size: ${({ size }) => variantSize(size)};
  letter-spacing: 0.02857em;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "max-content")};
  color:  ${({ text }) =>
    text === 'Accept' ? '#00d115'
  : text === 'Cancel' ? '#ff3e00'
  :  '#f38b1c' 
};

  background-color: ${({ text }) =>
    text === 'Accept' ? '#ccf6d0'
  : text === 'Cancel' ? '#ffd8cc'
  :  '#ffd8cc' 
};
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  &:active,
  &:focus {
    outline: 0;
    border: none;
  }

  &:hover {
    /* background:; */
  }

  &:disabled {
    /* background: grey;
    cursor: not-allowed; */
  }

  .text__icon {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${({ color, variant }) =>
        color
          ? color
          : variant};
      font-size: ${({ size }) => variantSize(size)};
      letter-spacing: 0.061em
    }
  }

  &::-moz-focus-inner {
    border: 0;
  }

  .icon {
    padding-left: 1rem;

    svg {
      font-size: ${({ size }) => variantIconSize(size)};
      font-weight: 600;
    }
  }
`;
