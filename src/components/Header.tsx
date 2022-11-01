import React from "react";
import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import HeadUser from "./HeadUser";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handlerKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === "Enter" && search) {
      // handlerClickSearch();
    }
  };
  return (
    <Box
      sx={{
        height: "44px",
        mt: "18px",
        mb: "14px",
        display: "flex",
        alignItems: "center",
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
          // onClick={}
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
        <InputSearch
          placeholder="Search on RVM SeaMaf ...."
          value={search}
          onChange={(e) => handlerChangeSearch(e)}
          onKeyDown={handlerKeyDown}
        />
        <Box>
          <HeadUser />
        </Box>
      </Container>
    </Box>
  );
};

const InputSearch = styled("input")({
  maxWidth: "500px",
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

export default React.memo(Header);
