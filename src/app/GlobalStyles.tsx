import { Global, css } from "@emotion/react";
import normalize from "emotion-normalize";

export const GlobalStyles = () => (
  <Global
    styles={css`
      ${normalize}
      html, body, #root {
        padding: 0;
        margin: 0;
        min-height: 100vh;
        font-family: "Roboto", Helvetica, Arial, sans-serif;
      }
    `}
  />
);
