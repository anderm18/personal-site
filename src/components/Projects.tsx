import { Avatar, Box, Button, Card, CardActionArea, CardContent, Fade, Typography, Grid } from "@mui/material";
import piconOne from '../assets/project1.png';
import piconTwo from '../assets/project2.png';
import piconThree from '../assets/project3.png';
import Info from '../assets/info.json';
import { useEffect, useRef, useState } from "react";

export default function Projects() {

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

    const icons: string[] = [piconOne, piconTwo, piconThree]
    return(
        <Box sx={{height: 'auto', bgcolor: '#e7ebef'}}>
        <CardContent>
            <Typography variant='h4' align='center' sx={{fontWeight: 'bold', margin: '40px', fontFamily: 'garamond', color: 'black'}}>
                Projects
            </Typography>
            <Box sx={{margin: '20px'}}>
                <Grid ref={tarRef} container spacing={2}>
                    {Info['projectGallery'].map((value, index) => {
                        return(
                            <Fade in={inViewport} style={{transitionDelay: `calc(${index+1} * 800ms)`}} timeout={1000}>
                                <Grid size={{xs: 12, md: 4}}>
                                    <Card sx={{height: '100%'}}>
                                        <CardActionArea href={value.link} sx={{paddingBottom: '10px', height: '100%'}}>
                                            <CardContent sx={{height: '100%'}}>
                                                <Avatar src={icons[index]} sx={{margin: '0 auto', height: '60px', width: '60px'}}/>
                                                <Typography variant="h5" align="center" sx={{fontWeight: 'bold', fontFamily: 'garamond', marginTop: '10px'}}>
                                                    {value.project}
                                                </Typography>
                                                <Typography align="center" sx={{fontFamily: 'garamond'}}>
                                                    {value.title}
                                                </Typography>
                                                <Typography align="center" variant="h4" sx={{fontSize: '13pt', fontFamily: 'garamond', margin: '10px'}}>
                                                    {value.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Fade>
                        );
                    })}
                </Grid>
            </Box>
            <Box textAlign='center' sx={{width: 'auto', marginTop: '25px', marginBottom: '60px'}}>
                <Button sx={{marginLeft: '3px'}} href="https://www.github.com/anderm18/" variant="contained">see more on github</Button>
            </Box>
        </CardContent>
        </Box>

    );
}