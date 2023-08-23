import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router";

function NavBar() {

    const NavBarTexts = [{page:"/home", text: "Dash Board"}, {page:"/user", text: "User Profile"},{page:"/edit", text: "Edit User Profile"}]
    const location = useLocation();
    

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userid')
        localStorage.removeItem('user')
        localStorage.removeItem('sortedDate')
        navigate('/login', { replace: true })
    }
    
    const handleDashBoard = () => {
        navigate('/home', { replace: true })
    }

    const handleUserProfile = () => {
        navigate('/user', { replace: true })
    }
    
    const textToShow = NavBarTexts.find(el => el.page === location.pathname)?.text
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={0} justifyContent="space-between" alignItems="center">
                        
                        {textToShow}
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </Grid>
                    <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right',}} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={handleDashBoard}> 
                            Dashboard
                        </MenuItem>
                        <MenuItem onClick={handleUserProfile}>
                            User Profile
                        </MenuItem>
                        <MenuItem onClick={handleLogout}> 
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavBar;