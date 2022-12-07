import { Switch } from "@mui/material";
import { useState } from "react";
import { handleReset, handleStart } from "../devices/timeHelper";
// import Duration  from "../devices/supplyDuration";


function state(){
	const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)
}
const Plug = (props) => {
	const { afterClick, supply, label } = props;
	const handleClick = (e) => {
		afterClick(!supply);
	};
	const handleTimer = () => {
		supply ? handleStart : handleReset
	} 
	// const twoCalls = data => {
	// 	handleClick(),
	// 	Duration.handleStart()
	//   }
	return (
		<Switch
			checked={supply}
			onChange={ e => {handleClick(e);
				console.log("duration", Duration.handleStart());
				}}
			inputProps={{ "aria-label": label }}
		/>
	);
};

export default Plug;
