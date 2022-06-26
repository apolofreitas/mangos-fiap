import { Components } from "@mui/material";
import { palette } from "./palette";

export const components: Components = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      size: "small",
    },
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          "& .MuiInputBase-root": {
            backgroundColor: palette.background?.paper,
          },
        },
      },
    ],
  },
};
