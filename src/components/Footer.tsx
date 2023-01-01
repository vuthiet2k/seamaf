import {
  Box,
  Container,
  Grid,
  List,
  Paper,
  styled,
  Typography,
  Link,
  ListItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ImgCards from "../assets/cards.png";

const Footer = () => {
  function createShares(name: string, icon: any, link: string) {
    return { name, icon, link };
  }
  const shares = [
    createShares(
      "instagram",
      <InstagramIcon style={{ fontSize: "30px" }} />,
      "https://www.instagram.com/rvmseamaf_trading/"
    ),
    createShares(
      "pinterest",
      <PinterestIcon style={{ fontSize: "30px" }} />,
      "https://www.pinterest.com/rvmseamaf/_created/"
    ),
    createShares(
      "facebook",
      <FacebookIcon style={{ fontSize: "30px" }} />,
      "https://www.facebook.com/rvmseamaf"
    ),
    createShares(
      "twitter",
      <TwitterIcon style={{ fontSize: "30px" }} />,
      "https://twitter.com/RvmSeamaf"
    ),
    createShares(
      "youtube",
      <YouTubeIcon style={{ fontSize: "30px" }} />,
      "https://www.youtube.com/channel/UCeax4jI_DJkAGzx0q5V6R2w"
    ),
    createShares(
      "linkedin",
      <LinkedInIcon style={{ fontSize: "30px" }} />,
      "https://www.linkedin.com/company/rvm-seamaf/"
    ),
  ];
  function createLinks(name: string, link: string) {
    return { name, link };
  }
  const links = [
    createLinks("About Us", "/"),
    createLinks("Track Orders", "/"),
    createLinks("Shipping", "/"),
    createLinks("Contact", "/"),
    createLinks("My Orders", "/"),
    createLinks("Support", "/"),
    createLinks("Terms of Use", "/"),
    createLinks("Privacy Policy", "/"),
    createLinks("Our Services", "/"),
    createLinks("Blog", "/"),
  ];
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#282828",
          display: "flex",
          alignItems: "center",
          pt: "15px"
        }}
      >
        <Container
          sx={{
            padding: { xs: "0 10px" },
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={6} md={3}>
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
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <H3Text>USEFUL LINKS</H3Text>
                <List dense={true} style={{ columnCount: "2" }}>
                  {links.map((link, key) => (
                    <ListItem
                      key={key}
                      sx={{
                        position: "relative",
                        "&:hover": {
                          "&:hover div": {
                            backgroundColor: "#f51167",
                          },
                          "&:hover a": {
                            color: "#fff",
                          },
                        },
                      }}
                    >
                      <Dot
                        sx={{
                          position: "absolute",
                          left: 0,
                        }}
                      />
                      <Link
                        href={link.link}
                        underline="none"
                        sx={{
                          color: "#8f8f8f",
                          fontSize: "14px",
                          letterSpacing: "-0.16px",
                          fontFamily: "'Josefin Sans', sans-serif",
                          lineHeight: "1.6",
                        }}
                      >
                        {link.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <H3Text>Blog</H3Text>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Item>
                <H3Text>CONTACT</H3Text>
                <ParaText sx={{ display: "flex" }}>
                  <H3TextRed>C.</H3TextRed>RVM SeaMaf
                </ParaText>
                <ParaText sx={{ display: "flex", textAlign: "left" }}>
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
      <Box
        sx={{
          backgroundColor: "#282828",
          display: "flex",
          alignItems: "center",
          borderTop: "2px solid #3b3535",
        }}
      >
        <Container
          sx={{
            padding: { xs: "0 19px" },
          }}
        >
          <Box sx={{ display: "block" }}>
            <List dense={true} style={{ display: "flex", alignItems: "start" }}>
              {shares.map((share, key) => (
                <Link
                  href={share.link}
                  key={key}
                  underline="none"
                  fontSize={30}
                  mx={1}
                  color={"#9f9fa0"}
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  {share.icon}
                  <Typography
                    mx={1}
                    component={"span"}
                    sx={{
                      display: { xs: "none", sm: "none", md: "contents" },
                      textTransform: "uppercase",
                      fontWeight: "900",
                      fontSize: "14px",
                    }}
                  >
                    {share.name}
                  </Typography>
                </Link>
              ))}
            </List>
          </Box>
          <ParaText
            sx={{
              color: "#fff",
              display: {
                md: "flex",
                xs: "inline-table",
              },
              justifyContent: "center",
              mt: "48px",
              mb: "16px",
            }}
          >
            Copyright ©{getYear()} All rights reserved | Developed By &nbsp;
            <Link
              href="https://github.com/vuthiet2k/seamaf"
              color={"#ccc"}
              underline="none"
              target="_blank"
            >
              Thiet HV
            </Link>
          </ParaText>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
const Item = styled("div")({
  backgroundColor: "transparent",
  padding: "10px",
  textAlign: "justify",
});
const Dot = styled("div")({
  borderRadius: "50%",
  backgroundColor: "transparent",
  height: "5px",
  width: "5px",
  border: "1px solid #f51167",
});
const H3Text = styled("span")({
  color: "#fff",
  fontSize: "18px",
  fontFamily: "'Josefin Sans', sans-serif",
  marginBottom: "25px",
  textTransform: "uppercase",
  fontWeight: "700",
});
const H3TextRed = styled("span")({
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
