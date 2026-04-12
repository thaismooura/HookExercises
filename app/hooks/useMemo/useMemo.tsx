"use client";
import { useMemo, useState } from "react";
import { UserContainer, InputStyle } from "./useMemo.styles";

export default function CredentialManagerWithValidator() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const passwordValidator = useMemo(()=>PasswordValidator(password), [password]);

  return (
    <UserContainer>
      <label>Insert your userName</label>
      <InputStyle onChange={(e)=>setUserName(e.target.value)} type="text"></InputStyle>
      <label>Insert your password</label>
      <InputStyle type="text" onChange={(e)=>setPassword(e.target.value)}></InputStyle>
      {passwordValidator}
    </UserContainer>

  );
}
function PasswordValidator(password: string) {
  console.log(`Password informed is: ${password}`);
  if (password.length < 8)
    return <span>Password cannot have less then 8 characters </span>;
  if (password.length == 0) return <span>Inform your password</span>;
  return <span>Valid password</span>;
}
