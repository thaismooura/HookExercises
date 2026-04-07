"use client"
import { useEffect, useState } from "react";
import { UserContainer, InputSyle } from "./useEffect.styles";

export function Credentials() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => console.log(name));

  return (
    <UserContainer>
      <label>Insert your name</label>
      <InputSyle type="text" onChange={(e) => setName(e.target.value)}></InputSyle>
      <label>Insert your password</label>
      <InputSyle type="text" onChange={(e) => setPassword(e.target.value)}></InputSyle>
    </UserContainer>
  );
}
