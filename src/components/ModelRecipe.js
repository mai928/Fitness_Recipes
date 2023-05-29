import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MaximizeIcon from "@mui/icons-material/Maximize";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
const ModelRecipe = ({ item, setOpenModel }) => {
	return (
		<Stack
			onMouseOut={() => setOpenModel(false)}
			sx={{
				width: "380px",
				height: "380px",
				backgroundColor: "#FFFAFB",
				position: "absolute",
			}}
		>
			<Box
				sx={{
					my: 1,
				}}
			>
				<MaximizeIcon
					onClick={() => setOpenModel(false)}
					sx={{ color: "#ced1db", cursor: "pointer" }}
					fontSize="large"
				/>
			</Box>
			<>
				<Stack alignItems={"flex-start"} mx="40px">
					<Typography fontSize={"15px"}>
						Meal Type:{" "}
						<span style={{ marginLeft: "70px", fontWeight: "bold" }}>
							{item.recipe.mealType[0]}
						</span>
					</Typography>
					<Typography fontSize={"15px"}>
						cuisine Type:
						<span style={{ marginLeft: "58px", fontWeight: "bold" }}>
							{item.recipe.cuisineType[0]}
						</span>
					</Typography>
					<Typography fontSize={"15px"}>
						Total Time:{" "}
						<span style={{ marginLeft: "70px", fontWeight: "bold" }}>
							{item.recipe.totalTime} min
						</span>{" "}
					</Typography>
				</Stack>

				<Box
					sx={{
						border: "1px solid #ced1db ",
						margin: "15px",
						opacity: 0.5,
					}}
				/>
				<Stack alignItems={"flex-start"} mx="40px" gap={"10px"}>
					<Typography mt={"10px"} mb={"5px"}>
						Community
					</Typography>

					<Stack flexDirection={"row"} gap={"30px"}>
						<CheckCircleOutlineIcon
							sx={{
								color: "#0288d1",
							}}
						/>
						<Typography>0</Typography>
					</Stack>
					<Stack flexDirection={"row"} gap={"30px"}>
						<FavoriteOutlinedIcon color="error" />
						<Typography>3</Typography>
					</Stack>
					<Stack flexDirection={"row"} gap={"30px"}>
						<CommentOutlinedIcon sx={{ color: "#26bc35" }} />
						<Typography>5</Typography>
					</Stack>
				</Stack>
			</>
		</Stack>
	);
};

export default ModelRecipe;
