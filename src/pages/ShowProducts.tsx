import { Box, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import { ProductType } from "../@type/productType";
import Product from "../components/product/Product";
import API from "../useHook/api";

const ShowProducts = function () {
  const [isLoading, setLoading] = React.useState(true);
  const [products, setDataProducts] = React.useState([]);

  React.useEffect(() => {
    API()
      .get("products")
      .then(function (response) {
        setDataProducts(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      {isLoading ? (
        "loading"
      ) : (
        <Box>
          {products.length ? (
            <Grid container spacing={2}>
              {products.map((item: ProductType, index: number) => {
                return (
                  <Grid item xs={6} md={4} xl={3} key={index}>
                    <Product
                      name={item.name}
                      img="https://www.investopedia.com/thmb/95XfZrEfJovI9z0MqCN3VJfTQ4M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Investopedia_ProductDifferentiation_Final-08990b5a9e7b4d22bb916f0937aeb27f.jpg"
                      price={item.price}
                      id={item._id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            "Không có sản phẩm nào!!!"
          )}
        </Box>
      )}
    </Box>
  );
};

export default ShowProducts;
