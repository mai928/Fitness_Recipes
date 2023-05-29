import React, { useState } from "react";
import HeroBanner from "../components/heobanner";
import SearchExercise from "../components/searchexercise";
import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
const Home = () => {
	const [exercises, setExercises] = useState([]);
	const [bodyPart, setbodyPart] = useState("all");

	return (
		<Box>
			<HeroBanner />
			<SearchExercise
				bodyPart={bodyPart}
				setbodyPart={setbodyPart}
				setExercises={setExercises}
			/>
			<Exercises
				bodyPart={bodyPart}
				exercises={exercises}
				setExercises={setExercises}/>
		</Box>
	);
};

export default Home;
