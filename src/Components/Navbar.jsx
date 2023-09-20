import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Avatar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <div sx={{ position: 'relative', ml: { xs: 1, sm: 3 } }}>
          <div sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <SearchIcon />
          </div>
          <InputBase
            sx={{ pl: '40px', transition: '.3s', '&:hover': { width: '210px', background: 'rgba(255,255,255,0.1)' }, width: '170px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
       
        <Button color="inherit" sx={{ ml: 1 }}>Meetings</Button>
        <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" sx={{ ml: 2 }} />
        <Typography variant="subtitle1" sx={{ ml: 1 }}>Username</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
