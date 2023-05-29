
// Exercises
export const ExerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "23c6a205a3mshd25bca81eae26a1p1a7dbbjsnef2f0e11074b",
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const UseFetch = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};


//youtub
export const YoutubOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "a160d7f7bamshe617180946ba6b7p16eab2jsndbb948c9804a",
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
	},
};

export const UseFetchYoutub = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};



// Recipes
export const RecipeOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "23c6a205a3mshd25bca81eae26a1p1a7dbbjsnef2f0e11074b",
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
		},
};

export const UseFetchRecipe = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};
