import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import navLogo from '../assests/logo-blue.png';
import { useNavigate } from 'react-router-dom';

export default function CategoryNav() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`
        navigate(path)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#00303F' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={navLogo} width='120px' alt='logo' />
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit" onClick={routeChange}>Home</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
