import {
  Grid,
  Container,
  keyframes,
  styled,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import imgBg1 from "../assets/BGeventmanagement.webp";
import imgBg2 from "../assets/imgBg2.png";
import LastProduct from "../components/product/LastProduct";
import TopSelling from "../components/product/TopSelling";

const Home = () => {
  return (
    <>
      <BgAmination>
        <Container
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "555px",
              animation: `${amiText} 7s linear infinite`,
            }}
          >
            <Typography
              paragraph
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontSize: "18px",
                fontWeight: 900,
              }}
            >
              Event planning and Management
            </Typography>
            <Typography
              paragraph
              sx={{
                color: "#fff",
                fontWeight: 100,
                fontFamily: "system-ui",
              }}
            >
              We do event planning management for all different types of events
              from weddings, birthdays ,coopera...
            </Typography>
            <Stack direction={"row"} sx={{ gap: "15px" }}>
              <ButtonCus sx={{ color: "#fff" }}>Buy Now</ButtonCus>
              <ButtonCus
                sx={{
                  color: "#111111",
                  backgroundColor: "#fff",
                }}
              >
                Inquire
              </ButtonCus>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "130px",
              height: "130px",
              backgroundColor: "#f51167",
              borderRadius: "50%",
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              animation: `${amiDotRed} 7s linear infinite`,
            }}
          >
            <Typography
              paragraph
              sx={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: 900,
                mb: 0,
              }}
            >
              from $50.00
            </Typography>
            <Typography
              paragraph
              sx={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: 100,
                textTransform: "uppercase",
                mb: 0,
                fontFamily: "system-ui",
              }}
            >
              Shop now
            </Typography>
          </Box>
        </Container>
      </BgAmination>
      <Grid container spacing={0}>
        <GridCus item xs={12} xl={4}>
          <PaymentsOutlinedIcon sx={{ mr: "10px", fontSize: "30px" }} />
          Fast Secure Payments
        </GridCus>
        <GridCus
          item
          xs={12}
          xl={4}
          sx={{ color: "#fff", backgroundColor: "#f51167" }}
        >
          <AutoAwesomeOutlinedIcon sx={{ mr: "10px", fontSize: "30px" }} />
          Premium Products
        </GridCus>
        <GridCus item xs={12} xl={4}>
          <SendOutlinedIcon sx={{ mr: "10px", fontSize: "30px" }} />
          Affordable Delivery
        </GridCus>
      </Grid>
      <LastProduct />
      <TopSelling />
    </>
  );
};

export default Home;
const ButtonCus = styled("button")(() => ({
  width: "165px",
  height: "45px",
  background: "transparent",
  border: "1px solid #fff",
  borderRadius: "5px",
  textTransform: "uppercase",
  fontFamily: "sans-serif",
  fontWeight: 700,
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.02)",
  },
}));
const GridCus = styled(Grid)(() => ({
  backgroundColor: "#f8f8f8",
  height: "70px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  margin: 0,
  color: "#585858",
  lineHeight: 1.6,
  fontWeight: 700,
  fontFamily: "'Josefin Sans', sans-serif",
}));
const BgAmination = styled("div")(() => ({
  height: "300px",
  width: "100%",
  position: "relative",
  backgroundImage: `url(${imgBg1}), url(${imgBg2})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  animation: `${amiBg} 7s linear infinite`,
}));
const amiBg = keyframes`
0%, 50%{
  background-position: 0px 0px, 1920px 0px; /* initially 1st image will be shown as it it as 0px 0px */
}
50.1%, 100% {
  background-position: -1920px 0px, 0px 0px; /* at 50.1% 2nd image will be shown as it it as 0px 0px */
}
`;
const amiText = keyframes`
0%{
  opacity: 0;
  transform: translateY(50%);
}
25% {
  opacity: 1;
  transform: translateY(0);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;
const amiDotRed = keyframes`
0%{
  transform: rotate(30deg);
  opacity: 0;
}
25%{
  transform: rotate(0deg);
  opacity: 1;
}
100%{
  transform: rotate(0deg);
  opacity: 1;
}
`;
