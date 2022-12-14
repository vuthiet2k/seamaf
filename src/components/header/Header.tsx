import React from "react";
import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import HeadUser from "./HeadUser";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");
  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handlerKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === "Enter" && search) {
      // handlerClickSearch();
    }
  };
  const handlerClickHome = () => {
    navigate('/');
  }
  return (
    <Box
      sx={{
        height: "44px",
        mt: "18px",
        pb: "14px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff"
      }}
    >
      <Container
        sx={{
          padding: { xs: "0 19px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          onClick={handlerClickHome}
          variant="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          RVM SeaMaf
        </Typography>
        <Box
          sx={{
            m: 0,
            p: 0,
            display: {
              xs: "none",
              md: "flex",
            },
            width: { xl: "500px"}
          }}
        >
          <InputSearch
            placeholder="Search on RVM SeaMaf ...."
            value={search}
            onChange={(e) => handlerChangeSearch(e)}
            onKeyDown={handlerKeyDown}
          />
        </Box>
        <Box>
          <HeadUser />
        </Box>
      </Container>
    </Box>
  );
};
export default React.memo(Header);
const InputSearch = styled("input")({
  width: "100%",
  height: "44px",
  fontSize: "14px",
  borderRadius: "20px",
  backgroundColor: "#ccc",
  border: "1px transparent",
  outline: "none",
  padding: "0 19px",
  color: "#000",
  fontFamily: "cursive",
});
