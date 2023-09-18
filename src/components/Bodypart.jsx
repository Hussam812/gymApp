import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
const Bodypart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      direction="row"
      typpe="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgrounfColor: "#FFF",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img src={Icon} alt="dumble" style={{ width: "40px", height: "40px" }} />
    </Stack>
  );
};

export default Bodypart;