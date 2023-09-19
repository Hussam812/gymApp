import { Box } from "@mui/material";
import { useState } from "react";
import { HeroBanner, SearchExersies, Exercises } from "./";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [search, setSearch] = useState("");

  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExersies
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        search={search}
        setSearch={setSearch}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
