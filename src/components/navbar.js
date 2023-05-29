import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";

const NavBar = () => {
	const tabs = ["Home", "Healthy Recipe"];
	const [selected, setSelected] = useState(tabs[0]);

	return (
		<Stack
			direction="row"
			justifyContent="space-around"
			sx={{
				gap: { sm: "123px", xs: "40px" },
				mt: { sm: "32px", xs: "20px" },
				justifyContent: "none",
			}}
			px="20px"
		>
			<Link to="/">
				<img
					style={{ width: "48px", height: "48px", margin: "0 20px" }}
					src={Logo}
				/>
			</Link>

			<Stack
				direction="row"
				alignItems="flex-end"
				fontFamily="Alegreya"
				gap="40px"
				fontSize="24px"
			>
				<Link
					to={"/"}
					style={{
						borderBottom: selected === "Home" ? "3px solid #FF2625" : "",
						textDecoration: "none",
						color: "#3A1212",
					}}
				>
					Home
				</Link>
				<Link
					to={"/recipe"}
					style={{
						borderBottom:
							selected === "Health Recipe" ? "3px solid #FF2625" : "",
						textDecoration: "none",
						color: "#3A1212",
					}}
				>
					Health Recipe
				</Link>
			</Stack>
		</Stack>
	);
};

export default NavBar;
