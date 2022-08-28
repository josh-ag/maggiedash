import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Info, InfoOutlined, ReportOutlined } from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";
import { useLocation } from "react-router-dom";

export const MessageLayout = ({ message }) => {
  const location = useLocation();
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 250px)",
        height: "100%",
      }}
    >
      <Grid item>
        <Paper
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
          }}
          elevation={0}
        >
          {location.pathname === "/late-notification" ? (
            <ReportOutlined
              fontSize="large"
              sx={{ alignSelf: "center", color: blue["A100"] }}
            />
          ) : (
            <Info
              fontSize="large"
              sx={{ alignSelf: "center", color: blue["A100"] }}
            />
          )}
          <Typography
            variant="h5"
            sx={{ color: grey[600], textAlign: "center", mt: 2 }}
          >
            {message}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
