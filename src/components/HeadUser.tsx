import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import { Stack, styled } from "@mui/system";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const HeadUser = () => {
  const [age, setAge] = React.useState("U.S Dollar");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Stack direction="row" spacing={1}>
      <FormControl sx={{ width: "145px", fontSize: "14px" }}>
        <Select
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"U.S Dollar"}>U.S Dollar</MenuItem>
          <MenuItem value={"RTGS Dollar"}>RTGS Dollar</MenuItem>
          <MenuItem value={"SA Rand"}>SA Rand</MenuItem>
          <MenuItem value={"British Pound"}>British Pound</MenuItem>
        </Select>
      </FormControl>
      <ButtonWC>
        <FavoriteBorderOutlinedIcon sx={{ mb: "10px" }} />
        <Typography
          variant="h4"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          Wishlist
        </Typography>
      </ButtonWC>
      <ButtonWC sx={{ position: "relative" }}>
        <ShoppingCartOutlinedIcon sx={{ mb: "10px" }} />
        <Box
          sx={{
            color: "#fff",
            backgroundColor: "red",
            height: "15px",
            width: "15px",
            borderRadius: "50%",
            position: "absolute",
            top: "-2px",
            left: "20px",
          }}
        >
          0
        </Box>
        <Typography
          variant="h4"
          sx={{
            whiteSpace: "nowrap",
          }}
        >
          Shopping Cart
        </Typography>
      </ButtonWC>
    </Stack>
  );
};

export default HeadUser;

const ButtonWC = styled("button")({
  backgroundColor: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  cursor: "pointer",
});
