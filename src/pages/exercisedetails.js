import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimiliarExercises from "../components/SimiliarExercises";
import { ExerciseOptions, UseFetch, YoutubOptions } from "../utils/useFetch";

const ExerciseDetails = () => {
	const [exerciseDetail, setexerciseDetail] = useState({});
	const [exerciseVideos, setexerciseVideos] = useState([]);
	const [targetExercises, settargetExercises] = useState([]);
	const [equipmentExercises, setequipmentExercises] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchExerciseData = async () => {
			const DataExercise = await UseFetch(
				`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
				ExerciseOptions,
			);

			const DataYoutub = await UseFetch(
				`https://youtube-search-and-download.p.rapidapi.com/search?query=${DataExercise.name}`,
				YoutubOptions,
			);

			const targetMusclesExercises = await UseFetch(
				`https://exercisedb.p.rapidapi.com/exercises/target/${DataExercise.target}`,
				ExerciseOptions,
			);

			const equipmentMusclesExercises = await UseFetch(
				`https://exercisedb.p.rapidapi.com/exercises/equipment/${DataExercise.equipment}`,
				ExerciseOptions,
			);

			setexerciseDetail(DataExercise);
			setexerciseVideos(DataYoutub.contents);
			settargetExercises(targetMusclesExercises);
			setequipmentExercises(equipmentMusclesExercises);
		};
		fetchExerciseData();
	}, [id]);

	console.log(exerciseDetail);
	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos
				exerciseVideos={exerciseVideos}
				name={exerciseDetail.name}
			/>
			<SimiliarExercises
				targetExercises={targetExercises}
				equipmentExercises={equipmentExercises}
			/>
		</Box>
	);
};

export default ExerciseDetails;
