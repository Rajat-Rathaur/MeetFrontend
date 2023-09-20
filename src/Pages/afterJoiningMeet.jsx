import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid, Avatar } from '@mui/material';
import {
    MicOff as MicOffIcon,
    VideocamOff as VideocamOffIcon,
    Chat as ChatIcon,
    People as PeopleIcon,
    Close as CloseIcon,
    ScreenShare as ScreenShareIcon,
    FiberManualRecord as ScreenRecordIcon
} from '@mui/icons-material';

const afterJoiningMeet = () => {
    return (
        <div style={{ height: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Meeting Title
                    </Typography>
                    <IconButton color="inherit">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Grid container style={{ height: 'calc(100vh - 64px)' }}>
                {/* Video and main content area */}
                <Grid item xs={12} style={{ background: 'white', position: 'relative' }}>
                    {/* Ideally this is where the video stream would appear */}
                    <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                        <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
                        <Typography variant="subtitle1" style={{ color: 'black' }}>
                            Username
                        </Typography>
                    </div>
                </Grid>
            </Grid>

            {/* Bottom Control Bar */}
            <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
                <IconButton color="inherit">
                    <MicOffIcon />
                </IconButton>
                <IconButton color="inherit">
                    <VideocamOffIcon />
                </IconButton>
                <IconButton color="inherit">
                    <ScreenShareIcon />
                </IconButton>
                <IconButton color="inherit">
                    <ScreenRecordIcon />
                </IconButton>
                <IconButton color="inherit">
                    <ChatIcon />
                </IconButton>
                <IconButton color="inherit">
                    <PeopleIcon />
                </IconButton>
                {/* Add more controls as needed */}
            </div>
        </div>
    );
}

export default afterJoiningMeet;
