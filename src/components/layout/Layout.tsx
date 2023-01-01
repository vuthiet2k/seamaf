import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../header/Header";
import NavigateToPages from "../header/NavigateToPage";

const Layout = () => {
  return (
    <>
      <Header />
      <NavigateToPages />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
