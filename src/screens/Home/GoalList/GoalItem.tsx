import { Box, Stack, Typography } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { GoalData } from "~/types/data";
import { BaseProps } from "~/types/utils";
import { formatNumberAsCurrency } from "~/utils/number";

interface GoalItemProps extends BaseProps {
  goal: GoalData;
  adornment?: ReactNode;
}

export const GoalItem: FunctionComponent<GoalItemProps> = ({
  goal,
  adornment,
}) => {
  return (
    <Stack direction="row" spacing={1}>
      {adornment}
      <Typography>{goal.name}</Typography>
      <Box flex="1" />
      <Typography>
        ({((goal.value / goal.finalValue) * 100).toFixed(0).toString()}%)
      </Typography>
      <Typography>
        {`${formatNumberAsCurrency(goal.value)} / ${formatNumberAsCurrency(
          goal.finalValue
        )}`}
      </Typography>
    </Stack>
  );
};
