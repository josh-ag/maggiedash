import React from "react";
import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const LateNotification = () => (
  <Box>
    <Typography
      variant="subtitle1"
      sx={{ textAlign: "center", color: grey[600] }}
    >
      Nothing To Display
    </Typography>
  </Box>
);

export default LateNotification;
