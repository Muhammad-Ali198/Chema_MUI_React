import { Container,Stack} from "@mui/material";
import React from "react";
import LayoutCards from "../categoriesItems/LayoutCards";
import RightAside from "../categoriesItems/RightAside";

const Categories = () => {
  return (
    <Container>
      <Stack direction={"row"} spacing={4}>
        <LayoutCards />
        <RightAside  />
      </Stack>
    </Container>
  );
};

export default Categories;
