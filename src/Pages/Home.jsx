import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, InputBase, IconButton, Stack } from '@mui/material';
import Navbar from '../Components/Navbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import ScheduleIcon from '@mui/icons-material/Schedule';
import JoinIcon from '@mui/icons-material/GroupAdd';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SignInIcon from '@mui/icons-material/Login';
import SignUpIcon from '@mui/icons-material/PersonAdd';
import Footer from '../Components/Footer';
const Home = () => {
  
  return (
    <>
    <Navbar/>
    <div sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <div sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px', // Increased space between buttons
          padding: '20px',
          borderRadius: '15px',
          background: 'white',
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
          
          
        }}>
            <Stack sx={[{marginLeft:'40vw',marginTop:'20vh'}]}>
              <Stack direction={{xs:'row'}}>
          <Button variant="contained" color="primary" startIcon={<VideoCallIcon />} sx={{ width: '140px', height: '140px',marginTop:'1vh',marginLeft:'0.5vh',marginRight:'0.5vh' }}>
            Start
          </Button>
          <Button variant="contained" color="primary" startIcon={<ScheduleIcon />} sx={{ width: '140px', height: '140px',marginTop:'1vh',marginLeft:'0.5vh',marginRight:'0.5vh' }}>
            Schedule
          </Button>
          </Stack>
          
          <Stack direction={{xs:'row'}}>
          
          <Button variant="contained" color="primary" startIcon={<JoinIcon />} sx={{ width: '140px', height: '140px',marginTop:'1vh',marginLeft:'0.5vh',marginRight:'0.5vh' }}>
            Join
          </Button>
          <Button variant="contained" color="primary" startIcon={<HistoryIcon />} sx={{ width: '140px', height: '140px',marginTop:'1vh',marginLeft:'0.5vh',marginRight:'0.5vh' }}>
            History
          </Button>
          </Stack>
          </Stack>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default Home;
  {/*         <Button variant="outlined" color="secondary" startIcon={<SignInIcon />} sx={{ mt: '10px' }}>
            Sign In
          </Button>
          <Button variant="outlined" color="secondary" startIcon={<SignUpIcon />} sx={{ mt: '10px' }}>
            Sign Up
          </Button> */}