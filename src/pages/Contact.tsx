import { Container, Grid, styled } from "@mui/material";
import { Box } from "@mui/system";
import HeadPoint from "../components/header/HeadPoint";

const Contact = () => {
  return (
    <Box>
      <HeadPoint point={"Contact"} />
      <Container sx={{ backgroundColor: "#fff", mt: "10px", mb: "105px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Box pt={7}>
              <TextBlack>
                108 Chinhoyi Street, Central Business District, Harare Zimbabwe
              </TextBlack>
              <TextBlack>+263782149840</TextBlack>
              <TextBlack>rvmseamaf@gmail.com</TextBlack>
              <hr
                style={{
                  borderTop: "px solid rgba(0,0,0,.1)",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              />
            </Box>
            <form>
              <IpnutContact placeholder="Your name" />
              <IpnutContact placeholder="Your e-mail" />
              <IpnutContact placeholder="+26371111111" />
              <IpnutContact placeholder="Subject" />
              <IpnutContact placeholder="Masage" />
            </form>
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
  fontFamily: "'Josefin Sans', sans-serif",
}));
const IpnutContact = styled("input")(() => ({
  height: "44px",
  width: "93.9%",
  border: "none",
  padding: "0 18px",
  background: "#f0f0f0",
  borderRadius: "40px",
  marginBottom: "17px",
  fontFamily: "'Josefin Sans', sans-serif",
  fontSize: "14px",
}));
const TextRed = styled("p")(() => ({
  fontSize: "14px",
  color: "#dc3545",
  lineHeight: 1.6,
  fontWeight: 700,
  marginBottom: "16px",
  marginTop: "4px",
  fontFamily: "'Josefin Sans', sans-serif",
}));
