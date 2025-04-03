import { Box, CardContent, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Typewriter from 'typewriter-effect';
import Info from '../assets/info.json';
import Me from '../assets/me.png';

const me_style = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '20px',
  marginTop: {xs: '30px', md:'5px'},
  width: 'min(50vw, 300px)',
  height: 'min(50vw, 300px)'
} as const;

const name_style = {
  color: 'white', 
  fontSize: {xs: 'min(13vw, 50pt)', md:'min(13vmax, 50pt)'}, 
  fontFamily: "garamond"
} as const;

const inner_style = {
  color: 'white', 
  fontSize: 'min(6vw, 20pt)', 
  fontFamily: "garamond", 
  fontStyle: 'italic'
} as const

const title_style = {
  color: 'white', 
  fontSize: 'min(6vw, 20pt)', 
  fontFamily: "garamond"
} as const


function HeaderDisplay(): JSX.Element {
  return (
    <>
      <Toolbar variant="dense" sx={{paddingTop: '10px'}}>
        <Box sx={{justifyContent: 'center', display: 'flex', marginTop: '7px'}}>
          <a href="https://github.com/anderm18" style={{backgroundColor: 'white', borderRadius: '20px', height: '41px'}}>
            <GitHubIcon sx={{color: 'black', fontSize: '30pt'}}/>
          </a>
          <a href="https://www.linkedin.com/in/anderm18/"style={{backgroundColor: 'white', borderRadius: '20px', height: '40px', marginLeft:'13px'}}>
            <TiSocialLinkedinCircular style={{color: 'black', fontSize: '30pt', borderRadius: '50%'}}/>
          </a>
        </Box>
      </Toolbar>
      <CardContent sx={{overflow: 'hidden'}}>
        <Box component="img" src={Me} sx={me_style}/>
        <Typography align='center' variant="h1" sx={name_style}>Michael</Typography>
        <Typography align='center' variant="h1" sx={name_style}>Anderson</Typography>
        <Typography align='center' variant="body1" sx={inner_style}>Software Engineer</Typography>
        <Typography align='center' variant="body1" sx={title_style}>What I'm up to right now:</Typography>
        <Typography align='center' sx={{color: 'white', marginTop: '10px', marginBottom: '80px', fontSize: 'min(5vw, 20pt)', fontFamily: "garamond"}}>
          <Typewriter onInit={(typewriter)=>{
            typewriter.pauseFor(1000).typeString(Info.header).start();
          }}/>
        </Typography>
      </CardContent>
    </>
  );
}

export default HeaderDisplay;
