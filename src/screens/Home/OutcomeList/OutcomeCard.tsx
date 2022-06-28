import { Box, Card, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { OutcomeData } from "~/types/data";
import { BaseProps } from "~/types/utils";
import { formatNumberAsCurrency } from "~/utils/number";

export interface OutcomeCardProps extends BaseProps {
  outcome: OutcomeData;
}

export const OutcomeCard: FunctionComponent<OutcomeCardProps> = ({
  outcome,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
        py: 1,
        px: 6,
      }}
    >
      <Typography variant="body1">{outcome.name}</Typography>
      <Typography variant="body2">
        {formatNumberAsCurrency(outcome.value)}
      </Typography>
    </Card>
  );
};
