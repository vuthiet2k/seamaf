import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../header/Header";
import NavbarUser from "../NavBarUser";

const Shop = () => {
  return (
    <Box sx={{ backgroundColor: "#efefef" }}>
      <Header></Header>
      <Box sx={{ p: "24px", display: "flex", minHeight: "100vh" }}>
        <NavbarUser></NavbarUser>
        <Outlet></Outlet>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Shop;
