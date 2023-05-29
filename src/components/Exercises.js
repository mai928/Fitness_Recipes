import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { ExerciseOptions, UseFetch } from "../utils/useFetch";


const Exercises = ({ bodyPart, exercises, setExercises }) => {
	const [currentPage, setcurrentPage] = useState(1);
	const exercisePerPage = 9;

	const indexOfLastExercise = currentPage * exercisePerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
	const currentExercise = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise,
	);

	const paginate = (e, value) => {
		setcurrentPage(value);
		window.scrollTo({ top: 1000, behavior: "smooth" });
	};



	useEffect(() => {
		const fetchExercisesData = async () => {
		  let exercisesData = [];
	
		  if (bodyPart === 'all') {
			exercisesData = await UseFetch('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions);
		  } else {
			exercisesData = await UseFetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, ExerciseOptions);
		  }
	
		  setExercises(exercisesData);
		};
	
		fetchExercisesData();
	  }, [bodyPart]);
	return (
		<Box
			id="exercises"
			sx={{
				mt: { lg: "110px" },
			}}
			mt="50px"
			p="20px"
		>
			<Typography variant="h3" mb="46px">
				Showing Results
			</Typography>
			<Stack
				direction={"row"}
				sx={{ gap: { lg: "110px", xs: "50px" } }}
				flexWrap={"wrap"}
				justifyContent={"center"}
			>
				{currentExercise.map((exercise, index) => (
					<ExerciseCard
						key={index}
						setExercises={setExercises}
						exercise={exercise}
					/>
				))}
			</Stack>
			<Stack mt="100px" alignItems={"center"}>
				<Pagination
					color="standard"
					shape="rounded"
					defaultPage={1}
					count={Math.ceil(exercises.length / exercisePerPage)}
					page={currentPage}
					onChange={paginate}
					size="large"
				/>
			</Stack>
		</Box>
	);
};

export default Exercises;
