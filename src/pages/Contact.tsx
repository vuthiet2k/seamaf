import { Container, Grid, styled } from "@mui/material";
import { Box } from "@mui/system";
import HeadPoint from "../components/HeadPoint";

const Contact = () => {
  return (
    <Box>
      <HeadPoint point={"Contact"} />
      <Container sx={{ backgroundColor: "#fff", mt: "10px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box>
              <TextBlack>
                108 Chinhoyi Street, Central Business District, Harare Zimbabwe
              </TextBlack>
              <TextBlack>+263782149840</TextBlack>
              <TextBlack>rvmseamaf@gmail.com</TextBlack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;

const TextBlack = styled("p")(() => ({
  fontSize: "14px",
  color: "#585858",
  lineHeight: 1.6,
  fontWeight: 700,
  marginBottom: "16px",
}));
