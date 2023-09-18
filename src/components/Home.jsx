import { Box } from "@mui/material";
import { useState } from "react";
import { HeroBanner, SearchExersies, Exercises } from "./";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");

  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExersies
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
