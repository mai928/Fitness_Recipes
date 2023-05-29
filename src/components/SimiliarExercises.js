import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontialScrollBar from "./HorizontialScrollBar";
import Loader from "./Loader";

const SimiliarExercises = ({ targetExercises, equipmentExercises }) => {
	return (
		<Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
			<Typography variant="h3" mb={'5px'}>
				Exercises that target the same muscle group
			</Typography>

			<Stack flexDirection={"row"} sx={{ p: "2", position: "relative" }}>
				{targetExercises.length ?(
					<HorizontialScrollBar data={targetExercises} />
				):<Loader/>}
			</Stack>


      <Typography variant="h3" mb={'5px'}>
				Exercises that use the same Equipment
			</Typography>

			<Stack flexDirection={"row"} sx={{ p: "2", position: "relative" }}>
				{targetExercises.length ?(
					<HorizontialScrollBar data={equipmentExercises} />
				):<Loader/>}
			</Stack>
		</Box>
	);
};

export default SimiliarExercises;
