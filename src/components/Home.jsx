import { Box } from "@mui/material";
import { useState } from "react";
import { HeroBanner, SearchExersies, Exercises } from "./";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExersies />
      <Exercises />
    </Box>
  );
};

export default Home;
