import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import navLogo from '../assests/logo-blue.png';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

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
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <img src={navLogo} width='120px' alt='logo' />
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit" onClick={routeChange} sx={{mx:5}}><Typography variant='h6'>Home</Typography></Button>
                    <Button color="inherit" sx={{ mr: 5 }}><Typography variant='h6'>Login</Typography></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
