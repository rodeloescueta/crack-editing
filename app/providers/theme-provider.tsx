"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useContext, Suspense } from "react";

export type Theme = "blue" | "purple";

const ThemeContext = createContext<Theme>("blue");

function ThemeProviderInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const theme: Theme = searchParams.get("theme") === "purple" ? "purple" : "blue";

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="theme-blue">{children}</div>}>
      <ThemeProviderInner>{children}</ThemeProviderInner>
    </Suspense>
  );
}

export const useTheme = () => useContext(ThemeContext);
