import { CssBaseline } from "@mui/material";
import { FunctionComponent, StrictMode } from "react";
import { GlobalStyles } from "./GlobalStyles";

import { Providers } from "./Providers";
import { Router } from "./Router";

export const Root: FunctionComponent = () => (
  <StrictMode>
    <Providers>
      <CssBaseline />
      <GlobalStyles />
      <Router />
    </Providers>
  </StrictMode>
);
