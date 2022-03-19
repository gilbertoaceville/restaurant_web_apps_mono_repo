import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { lineHeights } from "../../infrastructure/theme/spacing";
import { fontSizes } from "../../infrastructure/theme/fonts";

const TextStyles = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : fontSizes.body)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "auto")};
  color: ${({ color }) => (color ? color : colors.black)};
  margin: 0;
  padding: 0;
  line-height: ${({ lineHeight }) => lineHeight || lineHeights.paragraph};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  display:${({displayInline})=>displayInline?"inline":"block"};

  @media (max-width: 1050px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.8rem")};
    text-align: ${({ resTextAlign }) =>
      resTextAlign ? resTextAlign : "center"};
  }
`;

export const Text = (props) => {
  return (
    <TextStyles
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      color={props.color}
      lineHeight={props.lineHeight}
      textAlign={props.textAlign}
      resTextAlign={props.resTextAlign}
      displayInline={props.displayInline}
    >
      {props.children}
    </TextStyles>
  );
};
