import { Button, Box, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UseFetch, ExerciseOptions } from "../utils/useFetch";
import HorizontialScrollBar from "./HorizontialScrollBar";

const SearchExercise = ({ bodyPart, setbodyPart, setExercises }) => {
	const [search, setSearch] = useState("");
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
			const bodyPartsData = await UseFetch(
				"https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
				ExerciseOptions,
			);
			setBodyParts(["all", ...bodyPartsData]);
		};

		fetchExercisesData();
	}, []);

	const handleSearch = async () => {
		if (search) {

			
			const data = await UseFetch(
				"https://exercisedb.p.rapidapi.com/exercises",
				ExerciseOptions,
			);

			const SearchedExercises = data.filter((exercise) => {
				return (
					exercise.name.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search)
				);
			});

			setExercises(SearchedExercises);
			setSearch("");
		}
	};
	return (
		<Stack
			sx={{
				textAlign: "center",
				justifyContent: "center",
				p: "20px",
				mt: "37px",
			}}
		>
			<Typography
				fontWeight="700"
				fontFamily='Roboto","Helvetica","Arial",sans-serif'
				sx={{
					fontSize: { lg: "44px", md: "30px" },
					textAlign: "center",
				}}
			>
				Awesome Exercises You
				<br />
				Should Know
			</Typography>

			<Box position="relative" mb="72px" alignItems="center" margin="auto">
				<TextField
					height="76px"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value.toLocaleLowerCase());
					}}
					placeholder="Search Exercises"
					type="text"
					sx={{
						input: { fontWeight: "700", border: "none", borderRadius: "4px" },
						width: { lg: "1170px", md: "800px", xs: "350px" },
						backgroundColor: "#fff",
						borderRadius: "40px",
					}}
				/>
				<Button
					className="search-btn"
					sx={{
						bgcolor: "#FF2625",
						color: "#fff",
						textTransform: "none",
						width: { lg: "175px", xs: "80px" },
						height: "56px",
						position: "absolute",
						fontSize: { lg: "20px", xs: "14px" },
						right: "0",
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>

			<Box sx={{ position: "relative", width: "100%", p: "20px" }}>
				<HorizontialScrollBar
					data={bodyParts}
					bodyPart={bodyPart}
					setbodyPart={setbodyPart}
					isbodyPart
				/>
			</Box>
		</Stack>
	);
};

export default SearchExercise;
