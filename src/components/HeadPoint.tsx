import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ReactNode } from "react";
type PointType = { point: string };
const HeadPoint = (props: PointType) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f7f7",
        height: "50px",
        padding: "20px 0 10px",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            color: "#414141",
            fontSize: "24px",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {props.point}
        </Typography>
        <Typography
          paragraph
          sx={{
            fontSize: "14px",
            color: "#414141",
            fontWeight: 700,
          }}
        >
          Home / {props.point}
        </Typography>
      </Container>
    </Box>
  );
};

export default HeadPoint;
