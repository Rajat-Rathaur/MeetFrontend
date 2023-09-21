import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Avatar, ThemeProvider, createTheme, Switch } from '@mui/material';
import {
    Mic as MicIcon,
    MicOff as MicOffIcon,
    Videocam as VideocamIcon,
    VideocamOff as VideocamOffIcon,
    ScreenShare as ScreenShareIcon,
    StopScreenShare as StopScreenShareIcon,
    FiberManualRecord as ScreenRecordIcon,
    Stop as StopRecordIcon,
    Chat as ChatIcon,
    People as PeopleIcon,
    Close as CloseIcon,
    Brightness4 as DarkModeIcon
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SendIcon from '@mui/icons-material/Send';



import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';


const afterJoiningMeet = () => {
    const [isMicOn, setMicOn] = useState(true);
    const [isCamOn, setCamOn] = useState(true);
    const [isSharingScreen, setSharingScreen] = useState(false);
    const [isRecording, setRecording] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleLeaveMeeting = () => {
        // Logic for leaving the meeting
        setDialogOpen(false);
    };
    const [isChatOpen, setChatOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleChatToggle = () => {
        setChatOpen(!isChatOpen);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        // Handle file upload functionality here
    };
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };



    return (
        <ThemeProvider theme={theme}>
            <Box style={{ height: '100vh', backgroundColor: theme.palette.background.default }}>
                <div style={{ height: '100vh', backgroundColor: theme.palette.background.default }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" style={{ flexGrow: 1 }}>
                                Meeting Title
                            </Typography>
                            <IconButton color="inherit">
                                <SettingsIcon />
                            </IconButton>
                            <IconButton color="inherit" onClick={() => setDarkMode(!isDarkMode)}>
                                <DarkModeIcon />
                            </IconButton>
                            <IconButton color="inherit" onClick={handleDialogOpen}>
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <Grid container style={{ height: 'calc(100vh - 64px)' }}>
                        {/* Video and main content area */}
                        <Grid item xs={12} sx={{ background: theme.palette.background.default, position: 'relative' }}>

                            {/* Ideally this is where the video stream would appear */}
                            <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                                <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
                                <Typography variant="subtitle1" sx={{ color: theme.palette.text.primary }}>
                                    Username
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                    {/* Bottom Control Bar */}
                    <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
                        <IconButton color={theme.palette.mode === 'dark' ? 'primary' : 'inherit'} onClick={() => setMicOn(!isMicOn)}>
                            {isMicOn ? <MicIcon /> : <MicOffIcon />}
                        </IconButton>
                        <IconButton color={theme.palette.mode === 'dark' ? 'primary' : 'inherit'} onClick={() => setCamOn(!isCamOn)}>
                            {isCamOn ? <VideocamIcon /> : <VideocamOffIcon />}
                        </IconButton>
                        <IconButton color={theme.palette.mode === 'dark' ? 'primary' : 'inherit'} onClick={() => setSharingScreen(!isSharingScreen)}>
                            {isSharingScreen ? <StopScreenShareIcon /> : <ScreenShareIcon />}
                        </IconButton>
                        <IconButton color={theme.palette.mode === 'dark' ? 'primary' : 'inherit'} onClick={() => setRecording(!isRecording)}>
                            {isRecording ? <StopRecordIcon /> : <ScreenRecordIcon />}
                        </IconButton>
                        <IconButton color={theme.palette.mode === 'dark' ? 'primary' : 'inherit'} onClick={handleChatToggle}>
                            <ChatIcon />
                        </IconButton>
                        <IconButton color={theme.palette.mode === 'dark' ? 'primary' : 'inherit'}>
                            <PeopleIcon />
                        </IconButton>
                        {/* Add more controls as needed */}
                    </div>
                    <Drawer
                        anchor="right"
                        open={isChatOpen}
                        onClose={handleChatToggle}
                    >
                        <div style={{ width: 320, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <AppBar position="static">
                                <Toolbar>
                                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                                        Chat
                                    </Typography>
                                    <IconButton edge="end" color="inherit" onClick={handleChatToggle}>
                                        <CloseIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>

                            {/* Chat messages would go here */}
                            <div style={{ overflowY: 'auto', flexGrow: 1, padding: 10 }}>
                                    {messages.map((msg, index) => (
                                        <div key={index} style={{ marginBottom: 10 }}>
                                            {msg}
                                        </div>
                                    ))}
                                </div>

                            <div style={{ padding: 10, marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                                <IconButton>
                                    <EmojiEmotionsIcon />
                                </IconButton>
                                <IconButton component="label">
                                    <AttachFileIcon />
                                    <input type="file" hidden onChange={handleFileUpload} />
                                </IconButton>
                               
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    value={message}
                                    onChange={handleMessageChange}
                                    placeholder="Type your message..."
                                    onKeyPress={handleKeyPress}
                                />
                                <IconButton onClick={handleSendMessage}>
                                    <SendIcon />
                                </IconButton>
                            </div>
                        </div>
                        
                    </Drawer>
                    
                </div>
            </Box>
            <Dialog
                open={isDialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Leave Meeting"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to leave the meeting?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLeaveMeeting} color="primary" autoFocus>
                        Leave
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default afterJoiningMeet;
