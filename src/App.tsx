import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
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
