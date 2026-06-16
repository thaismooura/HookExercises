"use client";
import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("lightTheme");

  function toggleTheme() {
    setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function Header() {
  const context = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: context?.theme === "lightTheme" ? "lightblue" : "gray",
      }}
    >
      <h1>This is the header</h1>
      <button onClick={context?.toggleTheme}>Change theme</button>
    </div>
  );
}
