import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  InputBase,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
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
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);

  const openJoinDialog = () => {
    setIsJoinDialogOpen(true);
  };

  const closeJoinDialog = () => {
    setIsJoinDialogOpen(false);
  };

  return (
    <>
      <Navbar />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px', // Increased space between buttons
            padding: '20px',
            borderRadius: '15px',
            background: 'white',
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Stack sx={[{ marginLeft: '40vw', marginTop: '20vh' }]}>
            <Stack direction={{ xs: 'row' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<VideoCallIcon />}
                sx={{
                  width: '140px',
                  height: '140px',
                  marginTop: '1vh',
                  marginLeft: '0.5vh',
                  marginRight: '0.5vh',
                }}
              >
                Start
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ScheduleIcon />}
                sx={{
                  width: '140px',
                  height: '140px',
                  marginTop: '1vh',
                  marginLeft: '0.5vh',
                  marginRight: '0.5vh',
                }}
              >
                Schedule
              </Button>
            </Stack>

            <Stack direction={{ xs: 'row' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<JoinIcon />}
                sx={{
                  width: '140px',
                  height: '140px',
                  marginTop: '1vh',
                  marginLeft: '0.5vh',
                  marginRight: '0.5vh',
                }}
                onClick={openJoinDialog} // Open the Join dialog on button click
              >
                Join
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<HistoryIcon />}
                sx={{
                  width: '140px',
                  height: '140px',
                  marginTop: '1vh',
                  marginLeft: '0.5vh',
                  marginRight: '0.5vh',
                }}
              >
                History
              </Button>
            </Stack>
          </Stack>
        </div>
      </div>

      <Dialog open={isJoinDialogOpen} onClose={closeJoinDialog}>
        <DialogTitle>Join Meeting</DialogTitle>
      
        <DialogContent>
                        {/* 
          join box */}
          <Typography>Enter Meeting ID:</Typography>
          <InputBase placeholder="Meeting ID" />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeJoinDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={closeJoinDialog} color="primary">
            Join
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </>
  );
};

export default Home;
