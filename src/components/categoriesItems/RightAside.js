import { Box, Button, Typography, } from "@mui/material";
import React from "react";

const RightAside = () => {
  return (
    <Box flex={1} sx={{ backgroundColor: "", display:{xs:"none", md:"block"} }} p={3} overflow={"visible"}> 
      <Box position={"sticky"} top={100}> 
        <Typography sx={{ fontWeight: "Bold", color: "#0592F1" }}>
          AWARD-WINNING DESIGN COLLECTION
        </Typography>
        <Typography variant="h3" mb={3} mt={1}>
          Best-in-class designs to get you started.
        </Typography>
        <Typography mb={2} sx={{ fontWeight: "Light" }}>
          Crama has a powerful layout system which allows you to configure,
          customize and also create you own layout.
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button align="center" variant="contained">
            Buy Now
          </Button>
          <Button
            align="center"
            variant="contained"
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#1565C0",
              fontWeight: "Bold",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RightAside;
