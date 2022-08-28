import React from "react";
import {
  AppBar,
  List,
  ListItem,
  Toolbar,
  Stack,
  Button,
  Box,
  Typography,
  Paper,
  Divider,
  Fade,
} from "@mui/material";
import {
  AccountCircleOutlined,
  AddOutlined,
  ArrowUpward,
  CalendarMonth,
  CalendarTodayOutlined,
  FileUploadOutlined,
  GroupOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import { grey, blue, green } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
import User from "../assets/user.png";

//import N register chart/ - Tree shakeable way
import { Chart as ChartJs, registerables } from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJs.register(...registerables);

const menuItems = [
  { title: "Development", path: "#development" },
  { title: "Production", path: "#production" },
  { title: "Quality Control", path: "#quality-control" },
];

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Performance",
        data: [40, 65, 50, 65, 55, 50, 55, 65, 70, 80, 90, 85],
        borderColor: "rgba(54, 162, 235, .5)",
        backgroundColor: "rgba(54, 162, 235, .5)",
      },
      {
        label: "Attendance",
        data: [50, 70, 60, 70, 50, 65, 60, 75, 85, 90, 95, 90],
        borderColor: "rgba(255, 206, 86, .5)",
        backgroundColor: "rgba(255, 206, 86, .5)",
      },

      {
        label: "Projects",
        data: [45, 60, 65, 80, 85, 75, 65, 75, 80, 90, 80, 95],
        borderColor: "rgba(255, 99, 132, .5)",
        backgroundColor: "rgba(255, 99, 132, .5)",
      },
    ],
  };

  return (
    <Line
      options={options}
      data={data}
      style={{ width: "auto", height: "auto", maxWidth: "100%" }}
    />
  );
};

const DoughnutChart = () => {
  const labels = [
    "Frontend Engineer",
    "Backend Engineer",
    "Project Manager",
    "3D Artist",
    "Quality Control",
    "UI/UX Designer",
  ];

  const data = {
    datasets: [
      {
        label: "Employees",
        data: [30, 24, 8, 20, 16, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
    labels,
  };

  return (
    <Doughnut
      data={data}
      style={{
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        marginTop: 16,
      }}
    />
  );
};

const DashboardPage = () => {
  const location = useLocation();
  return (
    <>
      <AppBar elevation={0} position="static">
        <Toolbar
          sx={{
            bgcolor: grey[50],
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <List sx={{ display: "flex" }} open={true}>
            {menuItems.map((item) => (
              <ListItem
                component={Link}
                to={`${item.path}`}
                key={item.title}
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  fontSize: 16,
                  fontWeight: "500",
                  width: "auto",
                  borderBottom:
                    location.hash === item.path
                      ? `6px solid ${theme.palette.primary.main}`
                      : "none",
                })}
              >
                {item.title}
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 4,
          pt: 2,
        }}
      >
        <Typography variant="h5" sx={{ color: grey[600] }}>
          OverView
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<CalendarTodayOutlined />}
            endIcon={<KeyboardArrowDownOutlined />}
          >
            {new Date(Date.now()).toLocaleString("en-us")}
          </Button>
          <Button
            variant="contained"
            startIcon={<FileUploadOutlined />}
            sx={{
              bgcolor: green[400],
              ":hover": {
                bgcolor: green[600],
              },
            }}
            disableElevation
          >
            export as csv
          </Button>
        </Stack>
      </Box>

      <Stack direction="row" spacing={1} sx={{ px: 2, pb: 2, mt: 2 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            flex: 8,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <Stack direction="column" spacing={1} sx={{ flex: 1 }}>
            <Fade in={true}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  borderLeft: `8px solid ${green[500]}`,
                }}
                elevation={0}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: grey[500],
                    // fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  Employee Attendance
                </Typography>
                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ p: 4, position: "relative" }}
                >
                  <Typography variant="h4" sx={{ color: grey[600] }}>
                    98
                  </Typography>
                  <GroupOutlined
                    fontSize="large"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 5,
                      color: grey[500],
                    }}
                  />
                </Stack>
              </Paper>
            </Fade>
            <Fade in={true} timeout={500}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  borderLeft: `8px solid ${blue[500]}`,
                }}
                elevation={0}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: grey[500],
                    fontSize: 18,
                  }}
                >
                  Employee Of The Month
                </Typography>
                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ p: 4, position: "relative" }}
                >
                  <Typography variant="h4" sx={{ color: grey[600] }}>
                    94
                  </Typography>
                  <AccountCircleOutlined
                    fontSize="large"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 5,
                      color: grey[500],
                    }}
                  />
                </Stack>
              </Paper>
            </Fade>
          </Stack>

          <Fade in={true} timeout={600}>
            <Paper sx={{ p: 4, ml: 2, flex: 1 }} elevation={0}>
              <Typography variant="h5" sx={{ color: grey[500], fontSize: 18 }}>
                Internal Attendance
              </Typography>
              <Typography variant="body1" sx={{ color: grey[600], my: 2 }}>
                congratulation Jane Doe! You have been choosen as the best
                employee of the month. Keep up the good work and don't relent.
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                sx={{ alignItems: "center" }}
              >
                <Box
                  component={"img"}
                  src={User}
                  sx={{ width: 200, height: 250 }}
                />
                <Box>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    Jane Doe
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: grey[500], textAlign: "center", fontSize: 18 }}
                  >
                    Frontend Engineer
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: grey[600], textAlign: "center", fontSize: 14 }}
                  >
                    Development Team
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", mt: 2 }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                      mb: 1,
                    }}
                  >
                    Performance
                  </Typography>
                  <Typography variant="body1" sx={{ color: green[400] }}>
                    + 91% <ArrowUpward fontSize="small" />
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                      mb: 1,
                    }}
                  >
                    Attendance
                  </Typography>
                  <Typography variant="body1" sx={{ color: green[400] }}>
                    + 98% <ArrowUpward fontSize="small" />
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                      mb: 1,
                    }}
                  >
                    Projects
                  </Typography>
                  <Typography variant="body1" sx={{ color: green[400] }}>
                    + 89 <ArrowUpward fontSize="small" />
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Fade>
        </Stack>

        <Fade in={true} timeout={700}>
          <Paper sx={{ flex: 4, bgcolor: blue[50], ml: 2, p: 2 }} elevation={0}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="h5"
                sx={{
                  color: grey[500],
                  fontSize: 18,
                }}
              >
                Schedule
              </Typography>

              <Button
                variant="contained"
                startIcon={<AddOutlined />}
                sx={{ borderRadius: 10 }}
                size="small"
                disableElevation
              >
                add schedule
              </Button>
            </Stack>
            <Typography
              sx={{
                color: grey[500],
                fontWeight: "900",
                fontSize: 18,
                my: 4,
              }}
            >
              1st Aug 2022
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                mt: 6,
              }}
            >
              <Stack
                direction={"row"}
                spacing={4}
                sx={{
                  mb: 4,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    9:00
                  </Typography>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    A.M
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: blue[400], width: 5 }}
                />

                <Box>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                    }}
                  >
                    Development
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: grey[600],
                      fontWeight: "900",
                      fontSize: 14,
                    }}
                  >
                    Meet with vendor
                  </Typography>
                </Box>
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <Box>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    11:00
                  </Typography>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    A.M
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: green[400], width: 5 }}
                />

                <Box>
                  <Typography
                    sx={{
                      color: grey[500],
                      fontWeight: "900",
                      fontSize: 18,
                    }}
                  >
                    Development
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: grey[600],
                      fontWeight: "900",
                      fontSize: 14,
                    }}
                  >
                    System Testing
                  </Typography>
                </Box>
              </Stack>

              <Button
                variant="contained"
                sx={{
                  bgcolor: green[400],
                  alignSelf: "flex-start",
                  mt: 4,
                  ":hover": { bgcolor: green[600] },
                }}
                disableElevation
              >
                view all schedule
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Stack>

      <Stack direction="row" spacing={1} sx={{ px: 2, pb: 2 }}>
        <Paper
          sx={{
            p: 4,
            flex: 8,
          }}
          elevation={0}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Stack direction={"row"} sx={{ alignItems: "center" }}>
              <Typography
                sx={{
                  color: grey[500],
                  fontWeight: "900",
                  fontSize: 18,
                }}
              >
                Work Reports
              </Typography>
              <KeyboardArrowDownOutlined
                fontSize="small"
                sx={{ color: grey[500] }}
              />
            </Stack>
            <Button
              startIcon={<CalendarMonth />}
              variant="outlined"
              endIcon={<KeyboardArrowDownOutlined />}
              size="small"
            >
              this month
            </Button>
          </Stack>
          <LineChart />
        </Paper>

        <Paper
          sx={{
            p: 4,
            flex: 4,
            ml: 1,
          }}
          elevation={0}
        >
          <Typography
            sx={{
              color: grey[500],
              fontWeight: "900",
              fontSize: 18,
            }}
          >
            Employee Roles
          </Typography>

          <DoughnutChart />
        </Paper>
      </Stack>
    </>
  );
};

export default DashboardPage;
