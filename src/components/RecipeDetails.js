import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
	RecipeOptions,
	UseFetch,
	UseFetchRecipe,
	YoutubOptions,
} from "../utils/useFetch";
import Yum from "../assets/images/yum.webp";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import HttpsIcon from "@mui/icons-material/Https";

const RecipeDetails = () => {
	const { id } = useParams();

	console.log({ id });
	const [DataRecipe, setDataRecipe] = useState({});
	const [VideoRecipe, setVideoRecipe] = useState();

	useEffect(() => {
		const RecipeData = async () => {
			const DataResponseRecipe = await UseFetchRecipe(
				`https://edamam-recipe-search.p.rapidapi.com/search?q=${id}`,
				RecipeOptions,
			);

			const DataYoutub = await UseFetch(
				`https://youtube-search-and-download.p.rapidapi.com/search?query=${DataResponseRecipe.hits[0].recipe.label}`,
				YoutubOptions,
			);

			setDataRecipe(DataResponseRecipe.hits[0].recipe);
			setVideoRecipe(DataYoutub.contents);
		};
		RecipeData();
	}, [id]);

	console.log(DataRecipe);

	return (
		<Stack mr={20} ml={23} mb={10}>
			{/* Details  */}
			<Stack
				flexDirection={"row"}
				justifyContent={"space-between"}
				mt={7}
				mb={7}
				sx={{}}
			>
				<Stack mt={5} ml={5}>
					<Typography fontWeight={"bold"} variant="h3">
						{DataRecipe.label}
					</Typography>
					<Typography
						sx={{
							color: "#bababa",
							":hover": {
								color: "#3a9691",
							},
						}}
					>
						{DataRecipe.dishType}
					</Typography>
					<Stack flexDirection={"row"} mt={"15px"} gap={"30px"}>
						<Rating
							name="read-only"
							value={Math.trunc(DataRecipe.yield - 3)}
							readOnly
							sx={{ color: "#e16120" }}
						/>
						<Typography
							sx={{
								color: "#e16120",
								fontWeight: "bold",
							}}
						>
							{" "}
							( {Math.trunc(DataRecipe.yield - 3)} )
						</Typography>
					</Stack>

					<Stack flexDirection={"row"} gap={"60px"} mt={"30px"} mb={"20px"}>
						<Stack alignItems={"center"}>
							<Typography sx={{ color: "#4a4a4a", fontSize: "30px" }}>
								{DataRecipe.ingredients?.length}
							</Typography>
							<Typography sx={{ color: "#4a4a4a", fontSize: "15px" }}>
								Ingrediant
							</Typography>
						</Stack>
						<Box borderRight={"1px solid #bababa"} />

						<Stack alignItems={"center"}>
							<Typography sx={{ color: "#4a4a4a", fontSize: "30px" }}>
								{DataRecipe.totalTime}
							</Typography>
							<Typography sx={{ color: "#4a4a4a", fontSize: "15px" }}>
								Minutes
							</Typography>
						</Stack>
						<Box borderRight={"1px solid #bababa"} />

						<Stack alignItems={"center"}>
							<Typography sx={{ color: "#4a4a4a", fontSize: "30px" }}>
								{DataRecipe.calories?.toFixed(2)}
							</Typography>

							<Typography sx={{ color: "#4a4a4a", fontSize: "15px" }}>
								Calories
							</Typography>
						</Stack>
					</Stack>

					<Stack flexDirection={"row"} gap={"25px"} mt={1}>
						<Button
							sx={{
								width: "170px",
								backgroundColor: "#4b9b96",
								color: "white",
								py: "11px",
								borderRadius: "30PX",
								fontWeight: "bold",
								textTransform: "capitalize",
								fontSize: "15PX",
								mt: "20px",
							}}
						>
							Read More
						</Button>
						<img
							style={{
								backgroundColor: "#e16120",
								marginRight: "10px",
								marginTop: "10px",
								borderRadius: "50px",
								marginTop: "22px",
							}}
							width={"42px"}
							height={"42px"}
							src={Yum}
						/>
						<Stack flexDirection={"row"} mt={4} gap={1}>
							<HttpsIcon fontSize="small" sx={{ color: "#4b9b96" }} />
							<Typography fontWeight={"bold"} fontSize={"14px"}>
								Add to Meal Planner
							</Typography>
						</Stack>
					</Stack>
				</Stack>

				<img
					width={"480px"}
					height={"480px"}
					style={{ borderRadius: "10PX" }}
					src={DataRecipe.image}
				/>
			</Stack>
			{/* //Ingrediants */}
			<Stack>
				<Box
					mb={6}
					sx={{
						border: "1px solid #ced1db ",
						opacity: 0.5,
					}}
				/>

				<Stack flexDirection={"row"} gap={"50px"}>
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
					<Stack mt={"17px"}>
						<Typography
							sx={{
								color: "#232323",
								fontSize: "25px",
								fontWeight: "bold",
								marginBottom: "20px",
							}}
						>
							Ingrediants
						</Typography>
						<Typography>
							{DataRecipe.ingredients?.map((item) => (
								<Stack flexDirection={"row"} gap={"10px"} mt={"10px"}>
									<AddCircleOutlineOutlinedIcon
										sx={{ color: "#3a9691" }}
										fontSize="small"
									/>
									<Typography fontWeight={"bold"} sx={{ color: "#4a4a4a" }}>
										{item.text}
									</Typography>
								</Stack>
							))}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
			{/* totalNutrients */}
			<Stack>
				<Box
					mt={10}
					mb={6}
					sx={{
						border: "1px solid #ced1db ",
						opacity: 0.5,
					}}
				/>
				<Typography
					sx={{ color: "#232323", fontSize: "25px", fontWeight: "bold" }}
				>
					Nutrition
				</Typography>
				<Typography sx={{ color: "#4a4a4a", mb: "40px" }}>
					full nutritional details with Gold gym{" "}
				</Typography>

				<Stack flexDirection={"row"} flexWrap={"wrap"} gap={"25px"}>
					{DataRecipe?.totalNutrients?.FAT?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							{" "}
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.FAT?.quantity).toFixed(2) || ""}
							</Typography>
							<Typography
								fontWeight={"bold"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.FAT?.label || " "}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.FIBTG?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.FIBTG?.quantity).toFixed(2) || ""}
							</Typography>
							<Typography
								fontWeight={"bold"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.FIBTG?.label || " "}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.ZN?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.ZN?.quantity).toFixed(2) || ""}
							</Typography>
							<Typography
								fontWeight={"bold"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.ZN?.label || " "}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.H?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.H?.quantity).toFixed(2) || ""}
							</Typography>
							<Typography
								fontWeight={"bold"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.H?.label || " "}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.SUGAR?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							{" "}
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.SUGAR?.quantity).toFixed(2) || ""}
							</Typography>
							<Typography
								fontWeight={"bold"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.SUGAR?.label || " "}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.CA?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							{" "}
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.CA?.quantity).toFixed(2) || ""}
							</Typography>
							<Typography
								fontWeight={"bold"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.CA?.label || " "}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.WATER?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.WATER?.quantity).toFixed(2) || ""}
							</Typography>
							<Typography
								fontWeight={"BOLD"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.WATER?.label || ""}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.VITD?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							{" "}
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.VITC?.quantity).toFixed(2) || ""}
							</Typography>
							<Typography
								fontWeight={"bold"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.VITD?.label || ""}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.PROCNT?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.PROCNT?.quantity).toFixed(2) ||
									""}
							</Typography>
							<Typography
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
								fontWeight={"bold"}
							>
								{DataRecipe?.totalNutrients?.PROCNT?.label || ""}
							</Typography>
						</Box>
					)}

					{DataRecipe?.totalNutrients?.Sugar?.alcohol?.label && (
						<Box
							width={"120px"}
							height={"120px"}
							sx={{
								backgroundColor: "#ececec",
								borderRadius: "60px",
								paddingY: "36px",
							}}
						>
							{" "}
							<Typography fontSize={"20px"} sx={{ textAlign: "center" }}>
								{(DataRecipe?.totalNutrients?.Sugar?.alcohol?.quantity).toFixed(
									2,
								) || ""}
							</Typography>
							<Typography
								fontWeight={"bold"}
								fontSize={"13px"}
								sx={{ textAlign: "center" }}
							>
								{DataRecipe?.totalNutrients?.Sugar?.alcohol?.label || ""}
							</Typography>
						</Box>
					)}
				</Stack>
			</Stack>
			{/* Related Video  */}
			<Stack mt={5}>

			<Box
					mt={10}
					mb={6}
					sx={{
						border: "1px solid #ced1db ",
						opacity: 0.5,
					}}
				/>
				<Stack>
					<Typography
						sx={{
							color: "#232323",
							fontSize: "25px",
							fontWeight: "bold",
							marginBottom: "20px",
						}}
					>
						Related Videos
					</Typography>
				</Stack>
				<Stack flexDirection={'row'} flexWrap={'wrap'} gap={4}>
					{VideoRecipe?.slice(0, 7).map((item) => (
						<a style={{
							textDecoration:'none'
						}} href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>
							<img
								src={item.video.thumbnails[0]?.url}
								width={"250px"}
								height={"200px"}
							/>

							<Box>
								<Typography
									sx={{width:'200px' , fontSize: { lg: "15px", xs: "18px" } }}
									fontWeight={600}
									color="#000"
								>
									{item.video.title}
								</Typography>
								<Typography fontSize="14px" color="#000">
									{item.video.channelName}
								</Typography>
							</Box>
						</a>
					))}
				</Stack>
			</Stack>
		</Stack>
	);
};

export default RecipeDetails;
