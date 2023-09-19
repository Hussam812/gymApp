import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import Back from "../assets/icons/Back.png";

const Bodypart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      direction="column"
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        position: "relative",
        border: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: bodyPart === item ? "#ffa9a9" : "#fff",
        zIndex: bodyPart === item ? 100 : 10,

        borderRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1850, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumble" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        textTransform="capitalize"
        fontWeight="bold"
        color="#3A1212"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default Bodypart;
