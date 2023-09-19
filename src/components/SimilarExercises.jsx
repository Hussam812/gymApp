import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HorizontalScrollBar, Loader } from "./";
const SimilarExercises = ({ targetMusclesExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb={2}>
        {targetMusclesExercises.length ? (
          <HorizontalScrollBar data={targetMusclesExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3">
        Exercises that target the same Equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} onClick={() => {}} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
