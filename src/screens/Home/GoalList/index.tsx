import { Box, Card, Divider } from "@mui/material";
import { FunctionComponent } from "react";
import { GoalData } from "~/types/data";
import { GoalItem } from "./GoalItem";

export const GoalList: FunctionComponent = () => {
  const goalList: GoalData[] = [
    {
      name: "viagem para amsterdã",
      value: 12250,
      finalValue: 15000,
    },
    {
      name: "casa própria",
      value: 130000,
      finalValue: 180000,
    },
    {
      name: "carro",
      value: 60000,
      finalValue: 80000,
    },
    {
      name: "guitarra",
      value: 8000,
      finalValue: 8000,
    },
  ];

  return (
    <Box height="100%" overflow="auto">
      <Divider
        textAlign="left"
        sx={{
          fontSize: 18,
          "&::before": { width: 0 },
          "&::after": { borderColor: "primary.main", width: "100%" },
        }}
      >
        metas
      </Divider>
      {goalList.map((goal, index) => (
        <GoalItem
          key={index + goal.name}
          goal={goal}
          adornment={
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "1.5em",
                height: "1.5em",
                borderRadius: 0.5,
              }}
            >
              {index + 1}
            </Card>
          }
        />
      ))}
    </Box>
  );
};
