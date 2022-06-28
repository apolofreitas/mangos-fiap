import { AttachMoney } from "@mui/icons-material";
import { Stack, StackProps, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent<StackProps> = ({ ...props }) => {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      <AttachMoney color="primary" />
      <Typography variant="h6" color="primary" fontWeight="bold">
        mangos
      </Typography>
    </Stack>
  );
};
