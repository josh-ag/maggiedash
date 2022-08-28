import React from "react";
import styled from "@emotion/styled";
import {
  Close,
  CreditCardOutlined,
  DashboardOutlined,
  GroupsOutlined,
  GroupWorkOutlined,
  InsertChartOutlinedRounded,
  KeyboardArrowDownOutlined,
  LogoutOutlined,
  Menu,
  NotificationsOutlined,
  PeopleAltOutlined,
  PersonOutlineOutlined,
  ReportOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Box,
  Avatar,
  Stack,
  Typography,
  Divider,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Button,
  InputBase,
  Paper,
  ListItemText,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  useMediaQuery,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";

import { blue, grey, red } from "@mui/material/colors";
import { Link as RouterLink, Navigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";

const drawerWidth = 250;
const toolbarHeight = 80;

//Min-Drawer start
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 0),
  height: toolbarHeight,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
//Min-Drawer ends

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: grey[400],
}));

const drawerItems = [
  {
    title: "Dashboard",
    path: "/",
    seg: "admin",
    icon: <DashboardOutlined fontSize="medium" />,
  },
  {
    title: "Late Notification",
    path: "/late-notification",
    seg: "admin",
    icon: <ReportOutlined fontSize="medium" />,
  },
  {
    title: "Attendance Data",
    path: "/attendance",
    seg: "admin",
    icon: <InsertChartOutlinedRounded fontSize="medium" />,
  },
  {
    title: "Visitors",
    path: "/visitors",
    seg: "admin",
    icon: <PeopleAltOutlined fontSize="medium" />,
  },

  {
    title: "Employee",
    path: "/employee",
    seg: "management",
    icon: <PersonOutlineOutlined fontSize="medium" />,
  },
  {
    title: "Internals",
    path: "/internal",
    seg: "management",
    icon: <GroupWorkOutlined fontSize="medium" />,
  },

  {
    title: "Gate",
    path: "/gate",
    seg: "settings",
    icon: <GroupsOutlined fontSize="medium" />,
  },
  {
    title: "Card",
    path: "/card",
    seg: "settings",
    icon: <CreditCardOutlined fontSize="medium" />,
  },
];

export const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const login = JSON.parse(localStorage.getItem("login"));
  const location = useLocation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  //handle show/hide dialog
  const handleClose = () => {
    setDialogOpen(false);
  };
  const handleOpen = () => {
    setDialogOpen(true);
  };

  //handle user logout
  const handleLogout = () => {
    localStorage.removeItem("login");
    setTimeout(() => window.location.reload(), 500);
  };

  //handle expand drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!login) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ display: "flex", bgcolor: grey[100] }}>
      {/* DRAWER */}
      <Drawer open={open} variant="permanent" anchor="left">
        <DrawerHeader>
          <ListItem component={RouterLink} to="/">
            <ListItemIcon>
              <Avatar src={Logo} sx={{ width: 32, height: 32 }} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#596884",
                }}
              >
                MaggieDash
              </Typography>
            </ListItemText>
          </ListItem>
        </DrawerHeader>

        <Divider />

        {/* DRAW ITEMS */}

        {/* Admin Seg. */}
        <List>
          <ListItem>
            <ListItemIcon />
            <Typography
              sx={{ color: grey[400], fontWeight: "900", fontSize: 18 }}
            >
              Administrator
            </Typography>
          </ListItem>
          {drawerItems
            .filter((match) => match.seg === "admin")
            .map((item) => (
              <ListItem
                component={RouterLink}
                key={item.title}
                sx={(theme) => ({
                  borderLeft:
                    location.pathname === item.path
                      ? `6px solid ${theme.palette.primary.main}`
                      : "none",
                  ":hover": {
                    bgcolor: blue[50],
                  },
                })}
                to={item.path}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === item.path ? blue[500] : grey[500],
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <Typography
                  sx={{
                    fontSize: 16,
                    color:
                      location.pathname === item.path ? blue[500] : "#596884",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </Typography>
              </ListItem>
            ))}
        </List>

        {/* Management Seg. */}
        <List>
          <ListItem>
            <ListItemIcon />

            <Typography
              sx={{ color: grey[400], fontWeight: "900", fontSize: 18 }}
            >
              User Management
            </Typography>
          </ListItem>
          {drawerItems
            .filter((match) => match.seg === "management")
            .map((item) => (
              <ListItem
                component={RouterLink}
                key={item.title}
                sx={(theme) => ({
                  borderLeft:
                    location.pathname === item.path
                      ? `6px solid ${theme.palette.primary.main}`
                      : "none",
                })}
                to={item.path}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === item.path ? blue[500] : grey[500],
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <Typography
                  sx={{
                    fontSize: 16,
                    color:
                      location.pathname === item.path ? blue[500] : "#596884",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </Typography>
              </ListItem>
            ))}
        </List>

        {/* Setttings Seg. */}
        <List>
          <ListItem>
            <ListItemIcon />
            <Typography
              sx={{ color: grey[400], fontWeight: "900", fontSize: 18 }}
            >
              Settings
            </Typography>
          </ListItem>
          {drawerItems
            .filter((match) => match.seg === "settings")
            .map((item) => (
              <ListItem
                component={RouterLink}
                key={item.title}
                sx={(theme) => ({
                  borderLeft:
                    location.pathname === item.path
                      ? `6px solid ${theme.palette.primary.main}`
                      : "none",
                  ":hover": {},
                })}
                to={item.path}
              >
                <ListItemIcon
                  sx={{
                    color:
                      location.pathname === item.path ? blue[500] : grey[500],
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <Typography
                  sx={{
                    fontSize: 16,
                    color:
                      location.pathname === item.path ? blue[400] : "#596884",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </Typography>
              </ListItem>
            ))}
        </List>

        <List sx={{ position: "absolute", bottom: 0 }}>
          <ListItem onClick={handleLogout} button>
            <ListItemIcon sx={{ color: red[500] }}>
              <LogoutOutlined fontSize="medium" />
            </ListItemIcon>
            <Typography
              sx={{
                fontSize: 16,
                color: red[500],
                fontWeight: "500",
              }}
            >
              Logout
            </Typography>
          </ListItem>
        </List>
      </Drawer>

      <Box
        sx={(theme) => ({
          width: open ? `calc(100% - ${drawerWidth}px)` : `100%`,
          minHeight: "100vh",
          height: "100%",
        })}
      >
        {/* Appbar */}
        <AppBar
          position="fixed"
          sx={{
            width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 48px)`,
            boxShadow: "0px 1px #ccc",
          }}
          elevation={0}
        >
          <Toolbar
            sx={{
              height: toolbarHeight,
              bgcolor: grey[50],
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {open ? (
              <Button
                onClick={handleDrawerClose}
                startIcon={<Close />}
                color="warning"
              >
                close
              </Button>
            ) : (
              <IconButton onClick={handleDrawerOpen}>
                <Menu color="primary" />
              </IconButton>
            )}

            <Paper
              sx={{
                borderRadius: 8,
                display: "flex",
                width: "100%",
                justifyContent: "center",
                p: 1,
                mx: 2,
              }}
              elevation={0}
            >
              <IconButton>
                <SearchOutlined sx={{ color: grey[500] }} />
              </IconButton>

              <SearchInput
                type="search"
                name="search"
                placeholder="Search..."
                fullWidth
              />
            </Paper>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={handleOpen}>
                <NotificationsOutlined />
              </IconButton>
              <Avatar src={User} sx={{ width: 35, height: 35 }} />
              <Button
                sx={{
                  borderRadius: 10,
                  textTransform: "capitalize",
                  fontSize: 18,
                }}
                endIcon={<KeyboardArrowDownOutlined />}
              >
                Admin
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box sx={(theme) => ({ height: toolbarHeight })} />

        {/* PAGES*/}
        {children}

        <Dialog
          fullScreen={fullScreen}
          open={dialogOpen}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Messages</DialogTitle>
          <DialogContent>
            <DialogContentText>All message cleared</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ok</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};
