import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path if necessary

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const searchOptions = ["Cats", "Dogs"]; // Dropdown options for the search bar

const styles = {
  gradientText: {
    background: "linear-gradient(to right, #ad5389, #ad5389)", // Blue to pink gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "1.5rem", // Increase font size
    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)" // 3D effect using text-shadow
  },
};

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="fixed"> {/* Changed to 'fixed' */}
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <img src={logo} alt="Petsquare Logo" style={{ width: 60, height: 60, marginRight: 8 }} />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                  ...styles.gradientText, // Apply the gradient text style
                }}
              >
                Pets Square
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#E3F2FD', borderRadius: 20, height: 40 }}>
                <Autocomplete
                  freeSolo
                  options={searchOptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search"
                      variant="outlined"
                      sx={{
                        width: 300,
                        height: '100%',
                        '& .MuiOutlinedInput-root': {
                          border: 'none',
                          borderRadius: '20px 0 0 20px',
                          paddingRight: 0,
                          '& fieldset': {
                            border: 'none',
                          },
                        },
                      }}
                    />
                  )}
                />
                <Button
                  variant="contained"
                  sx={{
                    height: '100%',
                    borderRadius: '0 20px 20px 0',
                    backgroundColor: 'blue',
                    '&:hover': {
                      backgroundColor: 'blue',
                    },
                  }}
                >
                  <SearchIcon />
                </Button>
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textDecoration: 'none',
                  flexGrow: 1,
                  ...styles.gradientText, // Apply the gradient text style
                }}
              >
                Pets Square
              </Typography>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {searchOptions.map((option) => (
                  <MenuItem key={option} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{option}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ pt: 8 }}> {/* Add padding to avoid content overlap */}
        {/* Main content goes here */}
      </Box>
    </>
  );
}

export default NavBar;

