import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import navLogo from '../assests/logo-blue.png';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

export default function CategoryNav() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`
        navigate(path)
    }
    return (
        <Box sx={{ flexGrow: 1, height: '10rem' }}>
            <AppBar position="static" sx={{ backgroundColor: '#00303F', height: '5.8rem' }}>
                <Toolbar>
                    <img src={navLogo} width='90px' alt='logo' />
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="inherit" onClick={routeChange} sx={{mx:5}} startIcon={<HomeIcon/>}><Typography variant='body1'>Home</Typography></Button>
                    <Button color="inherit" sx={{ mr: 5 }} variant='outlined' startIcon={<AccountCircleIcon/>}><Typography variant='body1'>Profile</Typography></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
