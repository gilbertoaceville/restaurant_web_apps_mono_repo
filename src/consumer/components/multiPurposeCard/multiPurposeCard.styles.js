import styled from "styled-components";
import { Container } from "../container/container.component";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../typography/text.component";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/spacing";
import { RiDeleteBin5Line as IconForDelete } from "react-icons/ri";
import { MdLocationOn as IconForLocation } from "react-icons/md";
import { NairaIcon as IconForNaira } from "../../../lib/assets/Icons";
import { AiOutlinePlus as IconForPlus } from "react-icons/ai";
import { AiOutlineMinus as IconForMinus } from "react-icons/ai";
import { AiFillHeart as Love } from "react-icons/ai";

export const MultiPurposeCardContainer = styled(Container)`
  border-radius: 16px;
  padding: 10px 3%;
  width: ${({ width }) => (width ? width : "100%")};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : "rgba(149, 157, 165, 0.2) 0px 8px 24px"};
  border: ${({ border }) => (border ? `1px solid ${colors.primary}` : 0)};
`;
export const ImageSection = styled(Container)``;
export const CardImage = styled.img`
  width: 90px;
  height: 78px;
`;
export const InfoSection = styled(Container)`
  flex:1;
  flex-direction: column;
`;
export const DeleteIcon = styled(IconForDelete)`
  color: ${colors.primary};
`;

export const Wrapper = styled(Container)``;
export const FoodName = styled(Text)``;
export const IconWrapper = styled(Container)``;
export const LocationIcon = styled(IconForLocation)`
  color: ${colors.primary};
`;

export const AddressWrapper = styled(Container)``;
export const Address = styled(Text)``;

export const QuantitySection = styled(Container)`
 
`;
export const QuantityText = styled(Text)``;

export const LastOrPriceSection = styled(Container)`
  flex-direction: column;
`;

export const PriceWrapper = styled(Container)``;
export const PriceFigure = styled(Text)``;
export const NairaIcon = styled(IconForNaira)`
  line-height: ${lineHeights.copy};
`;
export const DynamicSectionWrapper = styled(Container)``;

export const FavouriteIconContainer = styled(Container)``;
export const FavouriteIcon = styled(Love)`
  color: ${colors.primary};
`;

export const OrderStatusWrapper = styled(Container)``;

export const OrderStatusText = styled(Text)``;
