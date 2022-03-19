import styled from "styled-components";
import { BsStarFill as Icon } from "react-icons/bs";
import { colors } from "../../infrastructure/theme/colors";
import { lineHeights } from "../../infrastructure/theme/spacing";

export const MiniCardContainer = styled.div`
  p,
  h3 {
    margin: 0;
    padding: 0;
  }

  width: 230px;
  height: 138px;
  background: transparent url("img/Rectangle 2232.png") 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 12px;
  padding: 8px 10px;
  box-sizing: border-box;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-header h3 {
    font: normal normal 600 18px/24px Open Sans;
    color: #000000;
    text-transform: capitalize;
  }

  .card-day-wrap select {
    border: none;
    background: transparent;
    text-transform: capitalize;
    font-size: 14px;
    color: #7f7f7f;
    outline: none;
    cursor: pointer;
    width: 70px;
  }

  .card-day-wrap select option {
    text-transform: capitalize;
    padding: 5px 0;
  }

  .card-day {
    font: normal normal normal 14px/36px Open Sans;
    color: #7f7f7f;
  }

  .card-number {
    font-size: 38px;
    font-weight: bold;
    line-height: 58px;
  }

  .card-outline-icon {
    margin-left: 10px;
  }

  .card-location {
    font: normal normal normal 14px/36px Open Sans;
    color: #7f7f7f;
  }

  @media(max-width: 750px) {
    width: 270px;
  }
`;

export const ChartCardContainer = styled.div`
  p,
  h3 {
    margin: 0;
    padding: 0;
  }

  width: 450px;
  height: 289px;
  background: transparent url("img/Rectangle 2232.png") 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 0px 10px #0000001a;
  border-radius: 12px;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 1em;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-header h3 {
    font: normal normal 600 18px/24px Open Sans;
    color: #000000;
    text-transform: capitalize;
  }

  .card-day-wrap select {
    border: none;
    background: transparent;
    text-transform: capitalize;
    font-size: 14px;
    color: #7f7f7f;
    outline: none;
    cursor: pointer;
    width: 70px;
  }

  .card-day-wrap select option {
    text-transform: capitalize;
    padding: 5px 0;
  }

  .card-header-title h3 {
    display: flex;
    align-items: center;
    font: normal normal 600 16px/24px Open Sans;
  }

  #rating-title {
    font: normal normal 600 18px/24px Open Sans;
    line-height: 28px;
  }

  .star-rate-component {
    margin-top: 1em;
  }

  @media(max-width: 768px) {
    width: 477px;
  }

  @media(max-width: 750px) {
    width: 93%;
    height: 200px;
  }
`;

export const RatingStar = styled(Icon)`
  color: #F38B1C;
  line-height: ${lineHeights.title};
  padding: 0px 2px;
  font-size: 16px;
  flex-basis: 20%;
`;
