import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Loader } from "./";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p={"200px"}
    >
      <Typography variant="h4" mb="33px">
        Watch
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blacnk"
            key={index}
            className="exercise-video"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h5" color="#ff2225" mt="10px">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
