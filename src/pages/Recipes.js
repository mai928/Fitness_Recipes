import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecipeResult from "../components/RecipeResult";
import { RecipeOptions, UseFetchRecipe } from "../utils/useFetch";

const Recipes = () => {
	const [search, setSearch] = useState("");
	const [DataRecipe, setDataRecipe] = useState([]);

	useEffect(() => {
		const RecipeData = async () => {
			const DataResponseRecipe = await UseFetchRecipe(
				`https://edamam-recipe-search.p.rapidapi.com/search?q=healthy`,
				RecipeOptions,
			);
			setDataRecipe(DataResponseRecipe.hits);
		};
		RecipeData();
	}, []);



	const handleSearch = async () => {
		if (search) {
			const recipe = await UseFetchRecipe(
				`https://edamam-recipe-search.p.rapidapi.com/search?q=${search}`,
				RecipeOptions,
			);

			const recipeFiltered = recipe.hits.filter((item) => {
				return item.recipe.label.toLowerCase().includes(search);
			});

			setDataRecipe(recipeFiltered);
			setSearch("");
		}
	};


	return (
		<Box
			sx={{
				textAlign: "center",
				justifyContent: "center",
				p: "25px",
				mt: "50px",
			}}
		>
			<Stack mb={"20px"} mt={"30px"}>
				<Typography variant="h4">Recipes</Typography>
				<Typography>
					Healthy, whole food recipes that nourish your body and your tastebuds
				</Typography>
			</Stack>

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
						width: { lg: "900px", md: "700px", xs: "350px" },
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
						fontSize: { lg: "20px", xs: "14px" },
						right:'0' 

					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>

			<RecipeResult DataRecipe={DataRecipe} />
		</Box>
	);
};

export default Recipes;
