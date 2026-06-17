"use client";
import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { store } from "./redux/state/store";
import { Provider } from "react-redux";
import emotionCache from "./emotionCache";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>{children}</Provider>
    </CacheProvider>
  );
}
``