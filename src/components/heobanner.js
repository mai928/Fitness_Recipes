import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../assets/images/banner.png";
const HeroBanner = () => {
	return (
		<Box
			sx={{
				mt: { lg: "212px", xs: "70px" },
				ml: { sm: "50px" },
			}}
			position="relative"
			p="20px"
		>
			<Typography color="#FF2625" fontSize="26px" fontWeight="600">
				Fitness Club
			</Typography>

			<Typography
				fontWeight="700"
				sx={{
					fontSize: { lg: "44px", xs: "40px" },
				}}
				mb="23px"
				mt="30px"
			>
				Sweat, Smile <br />
				And Repeat
			</Typography>
			<Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
				Check out most effective personalized to you
			</Typography>
			<Stack>
				<a href="#exercises"
					style={{
						backgroundColor: "#FF2625",
						padding: "14px",
						width: "200px",
						textAlign: "center",
						fontSize: "24px",
						color: "white",
						borderRadius: "4px",
						marginTop: "45px",
						textTransform: "none",
						borderRadius: "4px",
						textDecoration:'none',
						fontFamily:'Josefin Sans'
					}}
				>
					Explore Exercises
				</a>
			</Stack>

			<Typography fontWeight='600'  fontSize='200px' 
			sx={{
				color:'#FF2625',
				opacity:'0.1',
				lineHeight:'1.7',
				display:{lg:'block'  ,xs:'none'}
			}}>
			Exercise

			</Typography>

			<img className="hero-banner-img " src={banner} />
		</Box>
	);
};

export default HeroBanner;
