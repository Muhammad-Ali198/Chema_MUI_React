import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LeftCard from "../../images/Documentation.svg";
import MidCard from "../../images/GitHub.svg";
import RightCard from "../../images/Slack.svg";
import ShadowB from "../../images/shadow.svg"
import "../../styles/Cards.css";

const Cardsection = () => {
  return (
    <Container>
      <Typography
        mt={5}
        align="center"
        sx={{ fontWeight: "Bold", color: "#0592F1" }}
      >
        CHEMA MUI
      </Typography>
      <Typography
        my={1}
        align="center"
        sx={{ fontWeight: "Bold", color: "black" }}
        variant="h4"
      >
        Crema MUI is a great kick-starter
      </Typography>
      <Box my={5}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={3}
        >
          <Grid
            item
            xs={12}
            md={3}
            // bgcolor={"red"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${ShadowB})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                width: "100%",
                height: 200,
              }}
            >
              <Box
                component={"div"}
                className="left-card"
                sx={{
                  backgroundImage: `url(${LeftCard})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  width: "100%",
                  height: 200,
                }}
              ></Box>
            </Box>
            <Typography align="center" sx={{ fontWeight: "Bold" }}>
              Documents
            </Typography>
            <Typography
              mb={3}
              align="center"
              sx={{ fontWeight: "Light", fontSize: "0.8rem" }}
            >
              Available our detailed document and top call support here.
            </Typography>
            <Button align="center" variant="contained">
              Check Documents
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            // bgcolor={"coral"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${ShadowB})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                width: "100%",
                height: 200,
              }}
            >
              <Box
                component={"div"}
                className="mid-card"
                sx={{
                  backgroundImage: `url(${MidCard})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  width: "100%",
                  height: 200,
                }}
              ></Box>
            </Box>
            <Typography align="center" sx={{ fontWeight: "Bold" }}>
              GitHub
            </Typography>
            <Typography
              mb={3}
              align="center"
              sx={{ fontWeight: "Light", fontSize: "0.8rem" }}
            >
              Get latest feature, make pull request or bug fixes.
            </Typography>
            <Button align="center" variant="contained">
              Join on GitHub
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            // bgcolor={"orange"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${ShadowB})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                width: "100%",
                height: 200,
              }}
            >
              <Box
                component={"div"}
                className="right-card"
                sx={{
                  backgroundImage: `url(${RightCard})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  width: "100%",
                  height: 200,
                }}
              ></Box>
            </Box>
            <Typography align="center" sx={{ fontWeight: "Bold" }}>
              Slack
            </Typography>
            <Typography
              mb={3}
              align="center"
              sx={{ fontWeight: "Light", fontSize: "0.8rem" }}
            >
              Share your idea and insights, for inspiration collaboration and
              great result.
            </Typography>
            <Button align="center" variant="contained">
              Join Our Community
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cardsection;
