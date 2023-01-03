import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/header/Header";
import NavbarAdmin from "../../components/NavBarAdmin";
import { notifyError, notifySuccess } from "../../components/toast";
import API from "../../useHook/api";

const AddProduct = function () {
  const [file, setFile] = React.useState();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const handleChangFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    // setFile(e.target.files[0]);
  };
  const handleChangName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const handleChangDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setDescription(e.target.value);
  };
  const handleChangPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setPrice(e.target.value);
  };
  const handleCreating = function () {
    const formPost = {
      name: name,
      description: description,
      price: price,
      // image: file,
    };
    API()
      .postJson("products", formPost)
      .then(function (response) {
        console.log(response);
        notifySuccess("Đã thêm mới sản phẩm!");
      })
      .catch(function (error) {
        console.log(error);
        notifyError("Thêm mới sản phẩm thất bại!");
      });
  };
  return (
    <>
      <Header></Header>
      <Container sx={{ mt: "80px" }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={4}>
            <NavbarAdmin></NavbarAdmin>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Thêm mới sản phẩm
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Tên sản phẩm"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  onChange={handleChangName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Mô tả sản phẩm"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={handleChangDescription}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Giá sản phẩm"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                  onChange={handleChangPrice}
                />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={handleCreating}>Thêm mới</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddProduct;
