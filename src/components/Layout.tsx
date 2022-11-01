import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavigateToPages from "./NavigateToPage";

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
