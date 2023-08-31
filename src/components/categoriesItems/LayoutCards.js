import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Pic1 from "../../images/pic3.jpg";
import Pic2 from "../../images/pic4.png";
import Pic3 from "../../images/pic2.png";
import Pic4 from "../../images/pic6.png";
import Pic5 from "../../images/pic7.png";

const LayoutCards = () => {
  return (
    <Box flex={2} sx={{ backgroundColor: "" }}>
      <Stack direction={"column"} spacing={5}>
        <Paper>
          <Box
            sx={{
              backgroundImage: `url(${Pic1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: 400,
            }}
          ></Box>
          <Typography p={2}>Layouts-1</Typography>
        </Paper>
        <Paper>
          <Box
            sx={{
              backgroundImage: `url(${Pic2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: 400,
            }}
          ></Box>
          <Typography p={2}>Layouts-2</Typography>
        </Paper>
        <Paper>
          <Box
            sx={{
              backgroundImage: `url(${Pic3})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: 400,
            }}
          ></Box>
          <Typography p={2}>Layouts-3</Typography>
        </Paper>
        <Paper>
          <Box
            sx={{
              backgroundImage: `url(${Pic4})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: 400,
            }}
          ></Box>
          <Typography p={2}>Layouts-4</Typography>
        </Paper>
        <Paper>
          <Box
            sx={{
              backgroundImage: `url(${Pic5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: 400,
            }}
          ></Box>
          <Typography p={2}>Layouts-5</Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default LayoutCards;
