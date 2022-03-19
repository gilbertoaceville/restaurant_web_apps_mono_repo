import React from "react";

import { CardImage, Container } from "./square.style";

export const Square = ({ image }) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></Container>
  );
};
