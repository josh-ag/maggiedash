import { ArrowBack } from "@mui/icons-material";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Grid item xs={10} sm={8} md={6}>
        <Paper sx={{ p: 4, mb: 2 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontSize: 27, color: grey[700] }}
          >
            Oops??
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", fontSize: 18, color: grey[700] }}
          >
            The page you requested do not exist
          </Typography>
        </Paper>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
          back
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFound;
