import LightbulbIcon from "@mui/icons-material/Lightbulb";

const Bulb = ({ supply, color = "green", size = 5, mcbSupply }) => {
  return (
    <LightbulbIcon
      sx={{
        color: supply && mcbSupply ? color : "black",
        fontSize: `${size * 20}px`,
      }}
    />
  );
};

export default Bulb;
