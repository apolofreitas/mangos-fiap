import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { OutcomeData } from "~/types/data";
import { OutcomeCard } from "./OutcomeCard";

export const OutcomeList: FunctionComponent = () => {
  const outcomeList: OutcomeData[] = [
    { name: "internet", value: 120 },
    { name: "mercado", value: 642 },
    { name: "netflix", value: 55.9 },
    { name: "internet", value: 120 },
    { name: "mercado", value: 642 },
    { name: "netflix", value: 55.9 },
    { name: "internet", value: 120 },
    { name: "mercado", value: 642 },
    { name: "netflix", value: 55.9 },
    { name: "internet", value: 120 },
    { name: "mercado", value: 642 },
    { name: "netflix", value: 55.9 },
  ];

  return (
    <Box>
      <Divider
        textAlign="left"
        sx={{
          fontSize: 18,
          "&::before": { width: 0 },
          "&::after": { borderColor: "primary.main", width: "100%" },
        }}
      >
        ultimas transações
      </Divider>
      <Box
        display="flex"
        py={1}
        gap={1}
        overflow="auto"
        sx={{
          scrollSnapType: "x mandatory",
          "& > *": { scrollSnapAlign: "start" },
        }}
      >
        {outcomeList.map((outcome, index) => (
          <OutcomeCard key={index + outcome.name} outcome={outcome} />
        ))}
      </Box>
    </Box>
  );
};
