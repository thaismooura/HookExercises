"use client";
import { useState } from "react";
import { ButtonStyle, ButtonContainer } from "./useState.styles";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <ButtonContainer>
      <p>Counter Value: {counter}</p>
      <ButtonStyle onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </ButtonStyle>
      <ButtonStyle onClick={() => setCounter(counter - 1)}>
        Decrement Counter
      </ButtonStyle>
    </ButtonContainer>
  );
}
