import { Switch } from "@mui/material";
import { useState } from "react";
import Bulb from "../devices/bulb";

const MainBoard = (props) => {
	const { afterClick, supply, label } = props;
	
	// console.log("supply inside function", supply)
	const handleClick = (e) => {
		afterClick(!supply);
	};

	return (
		<Switch
			checked={supply}
			onChange={handleClick}
			inputProps={{ "aria-label": label }}
		/>
	);
};


export default MainBoard;