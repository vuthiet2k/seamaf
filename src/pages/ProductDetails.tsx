import { Box, Container, Grid } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductType } from "../@type/productType";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import API from "../useHook/api";

const ProductDetails = function () {
  const id = useParams().id;

  const [product, setProduct] = React.useState<ProductType>();
  React.useEffect(() => {
    API()
      .get(`products/${id}`)
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <Box
        sx={{
          background: "#efefef",
          height: "100vh",
          paddingY: "50px",
        }}
      >
        <Container
          sx={{ backgroundColor: "#fff", borderRadius: "10px", height: "100%" }}
        >
          <Box sx={{ height: "60px", display: "flex", alignItems: "center" }}>
            <Link to="/shop">
              <KeyboardBackspaceIcon sx={{ fontSize: "36px", color: "#333" }} />
            </Link>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              Products image
            </Grid>
            <Grid item xs={12} md={8}>
              {product?.name ? `${product.name}` : "###"}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
