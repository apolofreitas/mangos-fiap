import { Search } from "@mui/icons-material";
import { Divider, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent, useMemo } from "react";
import { Logo } from "~/components/Logo";
import { formatNumberAsCurrency } from "~/utils/number";
import { GoalList } from "./GoalList";
import { OutcomeList } from "./OutcomeList";

export const Home: FunctionComponent = () => {
  const balance = 1234.56;
  const balanceString = useMemo(
    () => formatNumberAsCurrency(balance),
    [balance]
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Stack
        spacing={2}
        padding={3}
        height="100%"
        width="100%"
        maxWidth="768px"
      >
        <Logo alignSelf="center" />
        <Typography variant="h4" margin={2} alignSelf="center">
          {balanceString}
        </Typography>
        <TextField
          placeholder="extratos, faturas..."
          InputProps={{
            startAdornment: <Search sx={{ marginRight: 1 }} />,
          }}
        />
        <OutcomeList />
        <GoalList />
      </Stack>
    </Box>
  );
};
