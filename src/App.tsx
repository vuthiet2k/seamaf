import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import AddProduct from "./pages/admin/AddProduct";
import Shop from "./components/layout/Shop";
import ShowProducts from "./pages/ShowProducts";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/log-in" element={<LogIn />}></Route>
          </Route>
          <Route path="/admin" element={<AddProduct />}></Route>
          <Route element={<Shop />}>
            <Route path="/shop" element={<ShowProducts />}></Route>
          </Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Josefin Sans", "sans-serif"].join(","),
      textTransform: "none",
      fontSize: 16,
    },
  },
});
export default App;
