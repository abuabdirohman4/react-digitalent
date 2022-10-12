import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// kita ingin menerima suatu data dari component atasnya
const ColorItem = ({ objColorItem }) => {
  return (
    <>
      <Box sx={{ color: objColorItem.color }}>
        <Typography variant="body2">
          Nama Warna : {objColorItem.name}
        </Typography>
      </Box>
    </>
  );
};

export default ColorItem;
