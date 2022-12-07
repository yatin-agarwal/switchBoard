import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Fan = ({ supply , mcbSupply}) => {
	//const [speed, setSpeed] = React.useState(30);
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		if (supply && mcbSupply) {
			const timer = setInterval(() => {
				setProgress((prevProgress) =>
					prevProgress >= 100 ? 0 : prevProgress + 10
				);
			}, 10000 / (supply));
			return () => {
				clearInterval(timer);
			};
		}
	}, [supply]);

	return <CircularProgress variant="determinate" value={progress} />;
};

export default Fan;
