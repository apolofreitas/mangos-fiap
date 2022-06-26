import { ThemeProvider } from "@mui/material";
import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "~/theme";
import { BaseProps } from "~/types/utils";

export const Providers: FunctionComponent<BaseProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
