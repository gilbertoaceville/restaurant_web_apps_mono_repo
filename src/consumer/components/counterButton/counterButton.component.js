import React,{useState} from "react";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";
import {
  CounterComponent,
  MinusWrapper,
  Minus,
  CounterWrapper,
  CounterText,
  PlusWrapper,
  Plus,
} from "./counterButton.styles";

export const CounterButton = () => {
    const [count, setCount] = useState(0);
    const DecreaseCount = () => {
      return setCount(count - 1);
    };
    const IncreaseCount = () => {
      return setCount(count + 1);
    };
  return (
    <CounterComponent >
      <MinusWrapper
        width="25%"
        onClick={DecreaseCount}

      >
        <Minus size={10} />
      </MinusWrapper>
      <CounterWrapper
        width="50%"
        background={colors.primary}
        paddingVertical="0"
      >
        <CounterText fontSize={fontSizes.body}>{count}</CounterText>
      </CounterWrapper>
      <PlusWrapper width="25%" onClick={IncreaseCount} paddingVertical="0">
        <Plus size={10} />
      </PlusWrapper>
    </CounterComponent>
  );
}