import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchDate";
import { Details, ExerciseVideos, SimilarExercises } from "./";

const ExerciseDetails = () => {
  const [exercieDetail, setexercieDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMusclesExercises, setTargetMusclesExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailUrl = "https://exercisedb.p.rapidapi.com/exercises";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/search";
      const exerciseDetailData = await fetchData(
        `${exerciseDetailUrl}/exercise/${id}`,
        exerciseOptions
      );
      setexercieDetail(exerciseDetailData);
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
      const targetMusclesExercisesData = await fetchData(
        `${exerciseDetailUrl}/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMusclesExercises(targetMusclesExercisesData);
      const equipmentExerciseData = await fetchData(
        `${exerciseDetailUrl}/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExerciseData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Details exercieDetail={exercieDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exercieDetail.name}
      />
      <SimilarExercises
        equipmentExercises={equipmentExercises}
        targetMusclesExercises={targetMusclesExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
