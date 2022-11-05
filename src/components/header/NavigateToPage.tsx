import { Box, Button, Container, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigateToPages = () => {
  let navigate = useNavigate();

  const createData = (name: string, link: string) => {
    return { name, link };
  };

  const ListOurShop = [
    createData("Beads", "/"),
    createData("Beading Wires And Threads", "/"),
    createData("Findings", "/"),
    createData("Chains", "/"),
    createData("Packaging", "/"),
    createData("Charms and Pendants", "/"),
    createData("Bridal Accesories", "/"),
    createData("Wedding & Party Accessories", "/"),
    createData("Equipment Hire", "/"),
    createData("Handmade Accessories", "/"),
    createData("Keyholder", "/"),
    createData("Bags", "/"),
    createData("Hair Beads &Accesories", "/"),
    createData("Event Planning & Management", "/"),
    createData("test", "/"),
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#282828",
        height: "50px",
        display: {
          md: "flex",
          xs: "none",
        },
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          height: "100%",
          padding: { xs: "0 19px" },
          display: "flex",
          alignItems: "center",
          gap: {
            md: "60px",
            xs: "0px",
          },
        }}
      >
        <ButtonHover onClick={() => {
            navigate("/");
          }}>Home</ButtonHover>
        <ButtonHover
          sx={{
            position: "relative",
            ":hover div": {
              display: "flex",
              flexDirection: "column",
              zIndex: 1,
            },
          }}
        >
          Our Shop
          <BoxOutShop>
            {ListOurShop.map((item, key) => {
              return (
                <Typography
                  paragraph
                  align="left"
                  onClick={() => {
                    navigate(item.link);
                  }}
                  key={key}
                  sx={{
                    mb: "10px",
                    ":hover": { color: "red", background: "transparent" },
                  }}
                >
                  {item.name}
                </Typography>
              );
            })}
          </BoxOutShop>
        </ButtonHover>
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
              top: "-7px",
              left: "7px",
            }}
          >
            SALE
          </Box>
        </ButtonHover>
        <ButtonHover>Our Services</ButtonHover>
        <ButtonHover>Blog</ButtonHover>
        <ButtonHover
          onClick={() => {
            navigate("contact");
          }}
        >
          Contact
        </ButtonHover>
        <ButtonHover>SignIn</ButtonHover>
        <ButtonHover>SignUp</ButtonHover>
      </Container>
    </Box>
  );
};

export default NavigateToPages;
const BoxOutShop = styled("div")({
  display: "none",
  backgroundColor: "#fff",
  minWidth: "200px",
  color: "#000",
  cursor: "pointer",
  fontSize: "16px",
  fontFamily: "Josefin Sans,sans-serif",
  position: "absolute",
  top: "50px",
  left: "0px",
  alignItems: "flex-start",
  padding: "20px",
  button: {
    color: "#000",
    textDecoration: "none",
    lineHeight: 1,
  },
});

const ButtonHover = styled("button")({
  height: "100%",
  padding: "0",
  backgroundColor: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
  fontFamily: "Josefin Sans,sans-serif",
  ":hover": {
    color: "red",
  },
});
