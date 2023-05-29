import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import ExerciseDetails from "./pages/exercisedetails";
import Footer from "./components/Footer";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./components/RecipeDetails";

function App() {
	return (
		<BrowserRouter>
			<Box width="400px" sx={{ width: { xl: "1488px" }, m: "auto" }}>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/exercise/:id" element={<ExerciseDetails />}/>
					<Route path="/recipe" element={<Recipes/>}/>
					<Route path="/recipeDetails/:id" element={<RecipeDetails/>}/>
				</Routes>
				<Footer/>
			</Box>
		</BrowserRouter>
	);
}

export default App;
