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
  Snackbar,
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

import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'


const Home = () => {
  const [roomCode, setRoomCode] = useState("")
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);
  const [isCopyDialogOpen, setIsCopyDialogOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState('');
  const navigate = useNavigate();
  const handleSubmit=(ev)=> {
    ev.preventDefault();
    navigate(`/room/${roomCode}`)
  }

  const openJoinDialog = () => {
    setIsJoinDialogOpen(true);
  };

  const closeJoinDialog = () => {
    setIsJoinDialogOpen(false);
  };

  const openCopyDialog = () => {
    setIsCopyDialogOpen(true);
  };

  const closeCopyDialog = () => {
    setIsCopyDialogOpen(false);
  };

  const copyLinkToClipboard = () => {
    const linkToCopy = 'https://example.com'; 
    navigator.clipboard.writeText(linkToCopy).then(() => {
      setCopiedLink(linkToCopy);
      setIsSnackbarOpen(true);
    });
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
            gap: '20px', 
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
                onClick={openCopyDialog}
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
                onClick={openJoinDialog}
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
          <Typography>Enter Meeting ID:</Typography>
          <InputBase value={roomCode} onChange={(e)=>setRoomCode(e.target.value)} placeholder="Meeting ID" />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeJoinDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Join
          </Button>
        </DialogActions>
      </Dialog>

  
      <Dialog open={isCopyDialogOpen} onClose={closeCopyDialog}>
        <DialogTitle>Copy Link to Clipboard</DialogTitle>
        <DialogContent>
          <Button variant="contained" color="primary" onClick={copyLinkToClipboard}>
            Copy to Clipboard
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCopyDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
        message={`Link copied: ${copiedLink}`}
      />
        

      <Footer />
    </>
  );
};

export default Home;
