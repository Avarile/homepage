import React, { useState, useEffect, ReactChild } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "../theme";
import AOS from "aos";

type ModeType = "light" | "dark";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<ModeType>("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: any) => {
    try {
      window.localStorage.setItem("theme", mode);
    } catch {
      /* do nothing */
    }

    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem("theme");
      if (localTheme !== null) {
        localTheme ? setTheme(localTheme as ModeType) : setMode("light");
      }
    } catch {
      setMode("light");
    }

    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};

export default function Page({ children }: { children: ReactChild }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: "ease-in-out",
    });
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  );
}
