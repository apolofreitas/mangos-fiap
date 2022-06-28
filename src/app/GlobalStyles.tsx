import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      #root {
        min-height: 100vh;
        user-select: none;
        overflow: none;
      }
      ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #c7efc8;
        border-radius: 8px;
        border: 2px solid transparent;
        background-clip: content-box;
      }
    `}
  />
);
