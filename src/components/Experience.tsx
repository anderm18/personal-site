import { Avatar, Box, Button, Card, CardContent, Grow, Typography } from "@mui/material";
import Info from '../assets/info.json';
import iconOne from '../assets/icon1.svg';
import iconTwo from '../assets/icon2.jpeg';
import iconThree from '../assets/icon3.jpg';
import { useEffect, useRef, useState } from "react";

const Title = {
    fontSize: '22pt',
    textAlign: {xs: 'center', md: 'left'},
    fontFamily: 'garamond',
    fontWeight: 'bold',
    marginTop: {xs: '10px', md: '0px'},
    marginLeft: {xs: 'auto', md:'20px'},
    marginRight: {xs: 'auto', md: '0'}
} as const;

const Position = {
    textAlign: {xs: 'center', md: 'right'},
    fontFamily: 'garamond',
    marginLeft: 'auto',
    marginTop: '6px'
} as const;

const ExperienceCard = {
    marginTop: '15px',
    marginLeft: {xs: '30px', sm: '70px'},
    marginRight: {xs: '30px', sm: '70px'},
    bgcolor: '#1a2027'
} as const;

export default function Experience() {

    const [inViewport, setInViewport] = useState(false);
    const tarRef = useRef(null);

    useEffect(() => {
        const watcher: IntersectionObserver = new IntersectionObserver(([entryPoint]) => {
            if (entryPoint.isIntersecting) {
                setInViewport(true);
                watcher.unobserve(entryPoint.target);

            }
        },
        { 
            threshold: 0
        });

        const curRef = tarRef.current;

        if (curRef) {
            watcher.observe(curRef);
        }

        return () => {
            if(curRef) {
                watcher.unobserve(curRef);
            }
        };
    }, []);
    

    const icons: string[] = [iconOne, iconTwo, iconThree];

    return(
        <Box sx={{height: 'auto', bgcolor: '#0b1929'}}>
            <CardContent>
                <Typography variant='h4' align='center' sx={{fontWeight: 'bold', margin: '40px', fontFamily: 'garamond', color: '#e7ebef'}}>
                    Experience
                </Typography>
                
                    <Box ref={tarRef} sx={{marginTop: '50px'}}>
                        {Info['experienceGallery'].map((value, index) =>{
                            return (
                                <Grow in={inViewport} style={{transitionDelay: `calc(${index+1} * 700ms)`}} timeout={200}>
                                <Card sx={ExperienceCard}>
                                    <CardContent sx={{display: {xs: 'inline', md: 'flex'}, marginTop: '5px'}}>
                                        <Avatar src={icons[index]} sx={{margin: {xs: ' 0 auto', md: '0'}}}/>
                                        <Typography variant="h4" color="#e7ebef" sx={Title}>
                                            {value.company}
                                        </Typography>
                                        <Typography variant="h5" color="#87919b" sx={Position}>
                                            {value.position}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                </Grow>
                            );
                        })}
                    </Box>

                <Box textAlign='center' sx={{width: 'auto', marginTop: '25px', marginBottom: '70px'}}>
                    <Button sx={{marginLeft: '3px'}} href="https://www.linkedin.com/in/anderm18/" variant="contained">see more on LinkedIn</Button>
                </Box>
            </CardContent>
        </Box>
    );
}