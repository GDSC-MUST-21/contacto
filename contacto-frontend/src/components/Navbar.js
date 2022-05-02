import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Box } from "@mui/material";
import logo from "../assests/logo-blue.png";

export default function Navbar() {
  return (
    <Box sx={{flexGrow: 1}}>
    <AppBar position="static" sx={{
      backgroundColor: '#FBEB93',
      color: '#000000',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <Toolbar>
        <IconButton size="small" edge="start" color="inherit" aria-label="menu" sx={{mr:2}} >
          <img src={logo} width='280rem' alt='logo' style={{
            borderRadius: '100%',
            marginTop: '1rem'
          }}
          />
        </IconButton>
        <Stack direction='row' spacing={2} sx={{
          mx: '9rem',
          fontSize: '1.7rem',
          fontFamily: 'roboto',
        }}>
          <a href="#working" style={{textDecoration: 'none', color: 'black', padding: '0.6rem'}}>About Us</a>
          <a href="#services" style={{textDecoration: 'none', color: 'black', padding: '0.6rem'}}>Categories</a>
          <a href="#footer-home" style={{textDecoration: 'none', color: 'black', padding: '0.6rem'}}>Contact Us</a>
          <a href="#" style={{textDecoration: 'none', color: 'black', padding: '0.6rem'}}>Login</a>
        </Stack>
      </Toolbar>
      </AppBar>
      </Box>
  )
}