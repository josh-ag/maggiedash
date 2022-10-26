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
        position: "bottom",
      },
      title: {
        // display: true,
        // text: "work reports",
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
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        // display: true,
        // text: "work reports",
      },
    },
  };
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
      options={options}
      style={{
        width: "auto",
        height: "auto",
        maxWidth: "100%",
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
                  color:
                    location.hash === item.path
                      ? theme.palette.primary.main
                      : "#596884",
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
            size="small"
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
              textTransform: "capitalize",
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
                  variant="subtitle1"
                  sx={{ color: grey[600], fontWeight: 600 }}
                  noWrap
                >
                  Employee Attendance
                </Typography>
                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ p: 4, position: "relative" }}
                >
                  <Typography variant="h5" sx={{ color: grey[600] }} noWrap>
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
                  variant="subtitle1"
                  sx={{ color: grey[600], fontWeight: 600 }}
                  noWrap
                >
                  Employee Of The Month
                </Typography>
                <Stack
                  spacing={4}
                  direction="row"
                  sx={{ p: 4, position: "relative" }}
                >
                  <Typography variant="h5" sx={{ color: grey[600] }}>
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

          <Fade in={true} timeout={{ appear: 500, enter: 600, exit: 400 }}>
            <Paper
              sx={{
                p: 4,
                ml: 2,
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
              elevation={0}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: grey[600], fontWeight: 600 }}
                noWrap
              >
                Internal Attendance
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: grey[600], my: 1, textAlign: "justify" }}
              >
                Congratulation{" "}
                <Typography
                  variant="subtitle1"
                  sx={{ display: "inline", color: grey[700], fontWeight: 600 }}
                >
                  Jane Doe
                </Typography>
                ! You have been choosen as the best employee of the month. Keep
                up the good work and don't relent.
              </Typography>
              <Stack
                direction={"row"}
                spacing={4}
                sx={{
                  alignItems: "center",
                  alignSelf: "center",
                  py: 1,
                }}
              >
                <Box
                  component={"img"}
                  src={User}
                  sx={{ width: 200, height: 200 }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: grey[700],
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    Jane Doe
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: grey[500], textAlign: "center" }}
                  >
                    Frontend Engineer
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: grey[700], textAlign: "center" }}
                  >
                    Development Team
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-around", mt: 1 }}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: grey[600],
                      mb: 1,
                    }}
                  >
                    Performance
                  </Typography>
                  <Typography variant="body2" sx={{ color: green[400] }}>
                    + 91% <ArrowUpward fontSize="small" />
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: grey[600],
                      mb: 1,
                    }}
                  >
                    Attendance
                  </Typography>
                  <Typography variant="body2" sx={{ color: green[400] }}>
                    + 98% <ArrowUpward fontSize="small" />
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: grey[600],
                      mb: 1,
                    }}
                  >
                    Projects
                  </Typography>
                  <Typography variant="body2" sx={{ color: green[400] }}>
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
                variant="subtitle1"
                sx={{ color: grey[600], fontWeight: 600 }}
              >
                Schedule
              </Typography>

              <Button
                variant="contained"
                startIcon={<AddOutlined />}
                sx={{ borderRadius: 10, textTransform: "capitalize" }}
                size="small"
                disableElevation
              >
                <Typography noWrap>set schedule</Typography>
              </Button>
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{
                color: grey[600],
                mt: 4,
              }}
            >
              1st Aug 2022
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                mt: 6,
              }}
            >
              <Stack
                direction={"row"}
                spacing={4}
                sx={{
                  mb: 4,
                  alignSelf: "center",
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ color: grey[600] }}>
                    9:00
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: grey[600] }}>
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
                    variant="body1"
                    sx={{
                      color: grey[500],
                    }}
                  >
                    Development
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: grey[600],
                    }}
                  >
                    Meet with vendor
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction={"row"}
                spacing={4}
                sx={{
                  mb: 4,
                  alignSelf: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: grey[600],

                      textAlign: "center",
                    }}
                  >
                    2:00
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: grey[600],
                      textAlign: "center",
                    }}
                  >
                    P.M
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: blue[400], width: 5 }}
                />

                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: grey[500],
                    }}
                  >
                    Engineering
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: grey[600],
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
                  alignSelf: "center",
                  textTransform: "capitalize",
                  mt: 2,
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
                variant="subtitle1"
                sx={{
                  color: grey[600],
                  fontWeight: 600,
                }}
                noWrap
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
              sx={{ textTransform: "capitalize" }}
            >
              this month
            </Button>
          </Stack>
          <Box sx={{ mt: 2 }}>
            <LineChart />
          </Box>
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
            variant="subtitle1"
            sx={{
              color: grey[600],
              fontWeight: 600,
            }}
            noWrap
          >
            Employees
          </Typography>
          <Box sx={{ mt: 2 }}>
            <DoughnutChart />
          </Box>
        </Paper>
      </Stack>
    </>
  );
};

export default DashboardPage;
