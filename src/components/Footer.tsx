import {  Box, CardContent, Grid, Toolbar, Tooltip, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Info from '../assets/info.json';

const iconStyle = {
    width: '36px',
    height: 'auto',
} as const;

export function Footer() {
    return(
        <Box sx={{height: 'auto', bgcolor: '#0b1929'}}>
            <CardContent>
                <Typography variant='h4' align='center' sx={{marginTop: '40px', fontFamily: 'montserrat', color: '#e7ebef'}}>
                    Get in Touch
                </Typography>
                <Box>
                    <Toolbar sx={{height: 'auto', color: 'white'}}>
                        <CardContent sx={{margin: 'auto'}}>
                            <Tooltip title={Info['email']} enterTouchDelay={0}>
                                <EmailIcon sx={iconStyle} style={{ marginLeft: '10px', marginRight: '10px' }}/>
                            </Tooltip>
                            <Tooltip title={Info['phone']} enterTouchDelay={0}>
                                <CallIcon sx={iconStyle} style={{ marginLeft: '10px', marginRight: '10px' }}/>
                            </Tooltip>
                            <a href={Info['github']} style={{color: 'white', margin: '10px'}}><GitHubIcon sx={iconStyle}/></a>
                            <a href={Info['linkedin']} style={{color: 'white', margin: '10px'}}><LinkedInIcon sx={iconStyle}/></a>
                        </CardContent>
                    </Toolbar>
                </Box>
                <Typography align="center" sx={{ fontSize: '11pt', fontFamily: 'montserrat', color: '#e7ebef' }}>
                    I made this site using React. You can find the Source Code <a href="google.com">here</a>
                </Typography>
            </CardContent>
        </Box>

    );
}