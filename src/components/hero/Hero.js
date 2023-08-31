import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Herobg from "../../images/backb.png";
import Herobanner from "../../images/banner.png";
import { ElectricBolt } from "@mui/icons-material";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Herobg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "90dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          backgroundColor: "",
          width: "85%",
          mt: 15,
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Box flex={1} color={"white"}>
          <Typography mb={2} variant="h3">
            Start a new project with Chema MUI
          </Typography>
          <Typography variant="p">
            Our creatively crafted products keep you moving faster in this
            digital space.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }} mt={2}>
            <Button
              startIcon={<ElectricBolt />}
              align="center"
              variant="contained"
              sx={{ backgroundColor: "red", textTransform:"capitalize"}}
            >
              Live Preview
            </Button>
            <Button
              align="center"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                fontWeight: "Bold",
                textTransform:"capitalize",
              }}
            >
              Docs
            </Button>
          </Box>
        </Box>
        <Box
          flex={2}
          sx={{
            backgroundImage: `url(${Herobanner})`,
            height: "20rem",
            backgroundSize: "100% 100%",
          }}
        ></Box>
      </Container>
    </Box>
  );
};

export default Hero;
