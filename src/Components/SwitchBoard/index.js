import * as React from "react";
import Plug from "./Plug";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Regulator from "./Regulator";
import MainBoard from "./mcb";

const SwitchBoard = ({ arrangements }) => {
  const renderArrangement = (arrangement) => {
    // console.log(arrangement);
    switch (arrangement.type) {
      case "plug":
        return (
          <Plug
            afterClick={arrangement.handleChange}
            label={arrangement.label}
            supply={arrangement.supply}
          />
        );
      case "regulator":
        return (
          <Regulator
            afterChange={arrangement.handleChange}
            label={arrangement.label}
            supply={arrangement.supply}
          />
        );
      case "mainBoard":
        return (
          <MainBoard
            afterClick={arrangement.handleChange}
            label={arrangement.label}
            supply={arrangement.supply}
          />
        );
      default:
        <></>;
        break;
    }
  };

  return (
    <Box sx={{ width: 600, height: 200, margin: "20px auto" }}>
      <Paper elevation={3} square>
        {arrangements.map((arrangement) => {
          return renderArrangement(arrangement);
        })}
      </Paper>
    </Box>
  );
};

export default SwitchBoard;
