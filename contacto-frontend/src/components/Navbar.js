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
          <img src={logo} width='280rem' height='270rem' alt='logo' style={{
            borderRadius: '100%',
            marginTop: '2rem'
          }}
          />
        </IconButton>
        <Stack direction='row' spacing={4} sx={{
          mx: '6rem',
          fontSize: '1.8rem',
          fontFamily: 'roboto',
        }}>
          <a href="#working" style={{textDecoration: 'none', color: 'black', padding: '0.5rem'}}>About Us</a>
          <a href="#services" style={{textDecoration: 'none', color: 'black', padding: '0.5rem'}}>Categories</a>
          <a href="#footer-home" style={{textDecoration: 'none', color: 'black', padding: '0.5rem'}}>Contact Us</a>
          <a href="/login" style={{textDecoration: 'none', color: 'black', padding: '0.5rem'}}>Login</a>
        </Stack>
      </Toolbar>
      </AppBar>
      </Box>
  )
}