import { Box, Container, Grid, Paper, styled } from "@mui/material";
import ImgCards from "../assets/cards.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          padding: { xs: "0 19px" },
          display: "flex",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Item>
              <H3Text>ABOUT</H3Text>
              <ParaText>
                Online & physical bead shop with the best beads and beading
                supplies in Zimbabwe ✓ Over 9000 beads for jewelry making ✓
                Glass beads ✓ Beading supplies and much more!
              </ParaText>
              <img src={ImgCards} />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <H3Text>USEFUL LINKS</H3Text>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <H3Text>Blog</H3Text>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <H3Text>CONTACT</H3Text>
              <ParaText sx={{ display: "flex" }}>
                <H3TextRed>C.</H3TextRed>RVM SeaMaf
              </ParaText>
              <ParaText sx={{ display: "flex", textAlign: "left", }}>
                <H3TextRed>B.</H3TextRed>108 Chinhoyi Street, Central Business
                District, Harare Zimbabwe
              </ParaText>
              <ParaText sx={{ display: "flex" }}>
                <H3TextRed>T.</H3TextRed>+263782149840
              </ParaText>
              <ParaText sx={{ display: "flex" }}>
                <H3TextRed>E.</H3TextRed>rvmseamaf@gmail.com
              </ParaText>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
const Item = styled(Paper)({
  backgroundColor: "transparent",
  padding: "10px",
  textAlign: "justify",
});
const H3Text = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  fontFamily: "'Josefin Sans', sans-serif",
  marginBottom: "25px",
  textTransform: "uppercase",
  fontWeight: "700",
});
const H3TextRed = styled("h3")({
  color: "#f51167",
  fontFamily: "'Josefin Sans', sans-serif",
  margin: "0 15px 0 0",
  textTransform: "uppercase",
});
const ParaText = styled("p")({
  textAlign: "justify",
  color: "#8f8f8f",
  fontSize: "14px",
  letterSpacing: "-0.16px",
  fontFamily: "'Josefin Sans', sans-serif",
  lineHeight: "1.6",
});
