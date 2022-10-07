// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h3" sx={{ mt: 2, mb: 3 }} component={"h3"}>
        Call a Friend
      </Typography>
      <Box sx={{ borderBottom: 1, lineHeight: 0 }}>
        <Typography
          component={"span"}
          variant=""
          sx={{ bgcolor: "#F0F8FF", px: 1, py: 0 }}
        >
          Your friendly contact app
        </Typography>
      </Box>
    </>
  );
};

export default Header;
