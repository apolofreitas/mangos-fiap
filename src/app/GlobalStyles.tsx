import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      #root {
        min-height: 100vh;
      }
    `}
  />
);
