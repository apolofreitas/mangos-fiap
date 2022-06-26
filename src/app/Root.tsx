import { FunctionComponent, StrictMode } from "react";

import { Providers } from "./Providers";
import { Router } from "./Router";

export const Root: FunctionComponent = () => (
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>
);
