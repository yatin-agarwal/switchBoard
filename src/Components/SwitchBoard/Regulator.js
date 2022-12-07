import { Slider } from "@mui/material";
import { useState } from "react";

const Regulator = (props) => {
  const { afterChange, supply, label } = props;
  const handleChange = (e, newSupply) => {
    console.log(newSupply);
    afterChange(newSupply);
  };
  //   console.log("ac", afterChange); //function is changing in supply
  //   console.log("s", supply); //speed of fan
  //   console.log("l", label); // Appliance name
  return (
    <Slider
      aria-label={label}
      defaultValue={supply}
      valueLabelDisplay="auto"
      step={20}
      marks
      min={0}
      max={100}
      onChange={handleChange}
    />
  );
};

export default Regulator;
