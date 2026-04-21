"use client"
import React, { useState, useCallback } from "react";

export function Parent() {
  const [count, setCount] = useState(0);

  const onChange = useCallback(() => {
    console.log("oi");
  }, []);

  console.log("Parent renderizou");

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        Increment count: {count}
      </button>

      <Input onChange={onChange} />
    </>
  );
}

type InputProps = {
  onChange: () => void;
};

const Input = React.memo(({ onChange }: InputProps) => {
  console.log("Input renderizou");

  return (
    <input
      type="text"
      placeholder="Type something"
      onChange={onChange}
    />
  );
});

export default Parent;

//onChange NÃO muda (graças ao useCallback)

//A referencia importa quando alguém compara ou depende da identidade dela

//custo de comparação 