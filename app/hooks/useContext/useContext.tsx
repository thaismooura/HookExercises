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
    setTheme((prev) => (prev === "lightTheme" ? "darkTheme" : "lightTheme"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function Header({ children }: { children: React.ReactNode }) {
  const context = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor:
            context?.theme === "lightTheme" ? "lightcoral" : "gray",
        }}
      >
        <h1>Hi I'm the Header</h1>
        {children}
      </div>
      <button onClick={context?.toggleTheme}>Toggle theme</button>
    </>
  );
}

export function Card() {
  return (
    <div>
      <input placeholder="type something"></input>
    </div>
  );
}
