import { Container, keyframes, styled } from "@mui/material";
import imgBg1 from "../assets/BGeventmanagement.webp";
import imgBg2 from "../assets/imgBg2.png";

const Home = () => {
  return (
    <>
      <BgAmination />
      <Container>
        
      </Container>
    </>
  );
};

export default Home;

const BgAmination = styled("div")(() => ({
  height: "300px",
  width: "100%",
  position: "relative",
  // backgroundImage: `url(${imgBg1})`
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  animation: `${amiBg} 14s linear infinite`,
}));
const amiBg = keyframes`
0% {
  backgroundImage: url(${imgBg1});
  opacity: 1;
}
50% {
  backgroundImage: url(${imgBg1});
  opacity: 1;
}
100% {
  backgroundImage: url(${imgBg2});
  opacity: 0;
}
`;
