import { Box, Container, styled, Typography } from "@mui/material";

const NavigateToPages = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        height: "50px",
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
        <ButtonHover>Home</ButtonHover>
        <ButtonHover>Our Shop</ButtonHover>
        <ButtonHover sx={{ position: "relative" }}>
          On Sale
          <Box
            sx={{
              height: "16px",
              width: "42px",
              color: "#fff",
              fontSize: "10px",
              fontWeight: "900",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              borderRadius: "15px",
              position: "absolute",
              top: "-25px",
            }}
          >
            SALE
          </Box>
        </ButtonHover>
        <ButtonHover>Our Services</ButtonHover>
        <ButtonHover>Blog</ButtonHover>
        <ButtonHover>Contact</ButtonHover>
        <ButtonHover>SignIn</ButtonHover>
        <ButtonHover>SignUp</ButtonHover>
      </Container>
    </Box>
  );
};

export default NavigateToPages;

const ButtonHover = styled("button")({
  padding: "0",
  backgroundColor: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  color: "#fff",
  cursor: "pointer",
  whiteSpace: "nowrap",
  fontSize: "16px",
  fontFamily: "Josefin Sans,sans-serif",
  ":hover": {
    color: "red",
  },
});
