import React from "react";
import { LoginOutlined } from "@mui/icons-material";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem(
      "login",
      JSON.stringify({ username: "example@gmail.com", id: "1" })
    );

    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: "600", color: grey[600], mb: 2, fontSize: 18 }}
        >
          You Must Login First!
        </Typography>
        <Button endIcon={<LoginOutlined />} onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
