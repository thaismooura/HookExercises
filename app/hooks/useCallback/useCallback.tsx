"use client";
import React, { useState, useCallback, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
}

export function Parent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [userProduct, setUserProduct] = useState<Product>();

  useEffect(() => {
    async function GetProduct() {
      const response = await fetch("https://fakestoreapi.com/products");
      const message: Product[] = await response.json();
      setProducts(message);
    }
    GetProduct();
  }, []);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
      setUserProduct(products.find((p) => p.id === Number(e.target.value))),
    [products],
  );

  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
  //     setUserProduct(products.find((p) => p.id === Number(e.target.value)));

  console.log("Parent being called");

  return (
    <div>
      <label>Type the product id</label>
      <Input onChange={handleOnChange}></Input>
      <div>{userProduct?.title}</div>
    </div>
  );
}

export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}

const Input = React.memo(({ onChange }: InputProps) => {
  console.log("Input is being called");

  return <input onChange={onChange} type="text"></input>;
});

export default Parent;

//custo de comparação
// evita custo de renderização desnecessária dos componentes filhos
