import logo from "./logo.svg";
import "./App.css";
import SwitchBoard from "./Components/SwitchBoard";
import { Box, Paper } from "@mui/material";
import Bulb from "./Components/devices/bulb";
import { useState } from "react";
import Fan from "./Components/devices/fan";
import MainBoard from "./Components/SwitchBoard/mcb";
import Time from "./Components/SwitchBoard/time";
import Duration from "./Components/devices/supplyDuration";

function App() {
  const [bulb1Supply, setBulb1Supply] = useState(true);
  const [bulb2Supply, setBulb2Supply] = useState(false);
  const [bulb3Supply, setBulb3Supply] = useState(false);
  const [fan1Supply, setFan1Supply] = useState(20);
  const [mainSupply, setMainSupply] = useState(false);
  // const [timer, setTimer] = useState(0);
  const arrangements = [
    {
      label: "Light1",
      handleChange: (supply) => {
        setBulb1Supply(supply);
      },
      supply: bulb1Supply,
      type: "plug",
    },
    {
      label: "Light2",
      handleChange: (supply) => {
        setBulb2Supply(supply);
      },
      supply: bulb2Supply,
      type: "plug",
    },
    {
      label: "Light3",
      handleChange: (supply) => {
        setBulb3Supply(supply);
      },
      supply: bulb3Supply,
      type: "plug",
    },
    {
      label: "Fan1",
      handleChange: (supply) => {
        setFan1Supply(supply);
      },
      supply: fan1Supply,
      type: "regulator",
    },
    {
      label: "mcb",
      handleChange: (supply) => {
        setMainSupply(supply);
      },
      supply: mainSupply,
      type: "mainBoard",
    },
  ];

  return (
    <div className="App">
      <Box>
        <Paper
          elevation={0}
          sx={{ width: 200, alignContent: "left", margin: "10" }}
        >
          <Time></Time>
        </Paper>
      </Box>
      <Box sx={{ width: 1500, height: 200, margin: "20px auto" }}>
        <Paper
          elevation={1}
          sx={{ display: "flex", justifyItems: "space-between" }}
        >
          <Bulb color="red" supply={bulb1Supply} mcbSupply={mainSupply} />
          <Bulb color="blue" supply={bulb2Supply} mcbSupply={mainSupply} />
          <Bulb color="green" supply={bulb3Supply} mcbSupply={mainSupply} />
        </Paper>
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            justifyItems: "space-between",
            margin: "20 auto",
          }}
        >
          <Duration />
          <Duration />
          <Duration />
        </Paper>
        <Paper elevation={1}>
          <Fan supply={fan1Supply} mcbSupply={mainSupply} />
        </Paper>
      </Box>
      <Box>
        <Duration />
      </Box>
      <SwitchBoard arrangements={arrangements} />
    </div>
  );
}

export default App;
