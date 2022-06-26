import { AttachMoney } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent = () => {
  return (
    <Stack direction="row" alignItems="center">
      <AttachMoney color="primary" />
      <Typography variant="h6" color="primary" fontWeight="bold">
        mangos
      </Typography>
    </Stack>
  );
};
