import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  height: 160px;
  width: 40.6%;
  overflow: hidden;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius:20px;
  padding: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: yellowgreen;
  ${'' /* background-image: url(${({ image }) => (image ? image : image)}); */}





  @media screen and (max-width: 1292px) {
    width: 42%;
    height: 170px;
  }

  @media screen and (max-width: 992px) {
    width: 40%;
  }

  @media screen and (max-width: 482px) {
    width: 85%;
    margin-top: 20px;
  }
`;


