import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState, type JSX } from "react";
import Typewriter from 'typewriter-effect';
import Info from '../assets/info.json';


function About(): JSX.Element {

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


    const CodeWriter = ({ text }: any) => {
        return (
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriterSource) => {
              typewriterSource
                .pauseFor(500)
                .changeDelay(20)
                .typeString(text)
                .start();
              
                
            }}
          />
        );
    };

 // 6134eb
    return(
        <Box sx={{height: 'auto', bgcolor: '#e7ebef', paddingTop: '20px', paddingBottom: '20px'}}>
            <CardContent>
                <Typography variant='h4' align='center'  sx={{fontWeight: 'bold', fontFamily: 'garamond', color: 'black'}}>
                    About Me
                </Typography>
                <Box sx={{display: {lg: 'flex', xs: 'inline'}, margin: '50px', marginTop: '20px', marginBottom: '20px'}}>
                    <Box sx={{borderRadius: '20px', borderWidth: '3px', bgcolor: '#f2f2f2', borderColor: 'black', borderStyle: 'solid', flex: '1', margin: '20px'}}>
                        <Typography align="center" variant="h5" sx={{fontFamily: 'garamond', fontSize: {xs: '13pt', md: '14pt'}, margin: '20px'}}>
                            {Info["about-info"]}
                        </Typography>
                    </Box>
                    <Card sx={{borderColor: '#1a2027', borderStyle: 'solid', borderWidth: '3px', flex: '1', marginLeft: {lg:'50px', xs: '0px'}, width: {md: 'auto', xs: 'auto'}, bgcolor: '#1a2027', height: '200px', margin: 'auto'}}>
                        <Box sx={{display: 'flex', marginBotton: '10px'}}>
                            <Box sx={{marginLeft: '10px', marginTop: '10px', marginRight: '5px', borderRadius: '50px', height: '12px', width: '12px', bgcolor: 'red'}}/>
                            <Box sx={{marginTop: '10px', borderRadius: '50px', height: '12px', width: '12px', bgcolor: 'yellow'}}/>
                            <Box sx={{marginLeft: '5px', marginTop: '10px', borderRadius: '50px', height: '12px', width: '12px', bgcolor: 'green'}}/>
                        </Box>
                        <Typography ref={tarRef} color='cyan' sx={{margin: '10px', marginLeft: '20px', marginTop: '12px'}}>
                            <code hidden={!inViewport}>
                                <CodeWriter text={"print(\"Hello\")"}/>
                                <CodeWriter text={'std::cout << "Hello" << std::endl;'}/>
                                <CodeWriter text={'printf("Hello\\n");'}/>
                                <CodeWriter text={'System.out.println("Hello");'}/>
                                <CodeWriter text={'console.log("Hello");'}/>
                                <CodeWriter text={'System.Console.WriteLine("Hello");'}/>
                            </code>
                        </Typography>
                    </Card>
                </Box>
            </CardContent>
        </Box>
    );
};

export default About;