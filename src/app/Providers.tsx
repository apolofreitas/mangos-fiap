import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";

import { BaseProps } from "~/types/utils";

export const Providers: FunctionComponent<BaseProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
