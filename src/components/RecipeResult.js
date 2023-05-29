import { Box, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MaximizeIcon from "@mui/icons-material/Maximize";
import ModelRecipe from "./ModelRecipe";
import Yum from "../assets/images/yum.webp";
const RecipeResult = ({ DataRecipe }) => {
	// console.log(DataRecipe);
	const [openModel, setOpenModel] = useState(false);
	const [recipeId, setRecipeId] = useState("");
	const [ingrediant, setIngrediant] = useState([]);

	const navigate = useNavigate();
	useEffect(() => {
		const handleIngrediant = () => {
			const itemIngrediant = DataRecipe.map((item) => {
				return item.recipe.ingredientLines.map((items) => {
					return items;
				});
			});

			setIngrediant(itemIngrediant);
		};

		handleIngrediant();
	}, [recipeId]);

	const handleModel = (id) => {
		setRecipeId(id);
		setOpenModel(true);
	};

	return (
		<Stack
			sx={{
				p: "25px",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "row",
				flexWrap: "wrap",
				gap: "30px",
				mt: "40px",
			}}
		>
			{DataRecipe.map((item) => (
				<Stack
					onClick={() => {
						navigate(`/recipeDetails/${item.recipe.label}`);
					}}
					sx={{
						width: 400,
						height: 400,
						backgroundColor: "white",
						borderRadius: "10px",
						border: "10px solid white",
						position: "relative",
					}}
				>
					<img
						src={item.recipe.image}
						style={{
							width: 380,
							height: 200,
							borderRadius: "5px",
							cursor: "pointer",
						}}
					/>
					<Stack
						sx={{
							flexDirection: "row",
							justifyContent: "space-between",
							margin: "20px",
						}}
					>
						<Stack sx={{ mt: "10px", pb: "20px", alignItems: "flex-start" }}>
							<Typography
								sx={{
									fontWeight: "bold",
									color: "",
									fontSize: "16px",
									":hover": {
										color: "#3a9691",
									},
								}}
							>
								{item.recipe.label?.slice(0, 30)}
								{item.recipe.label.length > 30 ? "..." : ""}
							</Typography>
							<Typography
								sx={{
									color: "#707070",
									fontSize: "14px",
									textTransform: "uppercase",
									marginTop: "6px",
								}}
							>
								{item.recipe.dishType[0].slice(0, 10) + " healthy food"}
							</Typography>
							<Rating
								name="read-only"
								value={Math.trunc(item.recipe.yield - 3)}
								readOnly
								sx={{ color: "#e16120", marginTop: "12px" }}
							/>
						</Stack>

						<Stack onMouseOver={() => handleModel(item.recipe.label)} sx={{}}>
							<img
								style={{
									backgroundColor: "#e16120",
									marginRight: "10px",
									marginTop: "10px",
									borderRadius: "50px",
								}}
								width={"50px"}
								height={"50px"}
								src={Yum}
							/>
							<Typography
								sx={{
									fontSize: "13px",
									marginRight: "10px",
									marginTop: "10px",
									color: "#707070",
									fontWeight: "bold",
								}}
							>
								{Math.floor(item.recipe.calories)}
							</Typography>
						</Stack>
					</Stack>
					<MaximizeIcon
						onClick={() => handleModel(item.recipe.label)}
						sx={{
							alignItems: "center",
							justifyContent: "flex-end",
							margin: "auto",
							color: "#ced1db",
							cursor: "pointer",
						}}
						fontSize="large"
					/>
					{openModel && recipeId === `${item.recipe.label}` && (
						<ModelRecipe item={item} setOpenModel={setOpenModel} />
					)}
				</Stack>
			))}
		</Stack>
	);
};

export default RecipeResult;
