import React from "react";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import TypeAnimation from 'react-type-animation';
import Fade from 'react-reveal/Fade';

import {ReactComponent as Envelope} from '../assets/icons/envelope-regular.svg';
import {ReactComponent as LinkedIn} from '../assets/icons/linkedin-in-brands.svg';
import {ReactComponent as Instagram} from '../assets/icons/Instagram.svg';
import {ReactComponent as Github} from '../assets/icons/github.svg';

import PfPicture from "../assets/pfp.jpg";

const styles = {
    heroContainer: {
        height: '100vh',
        width: `100vw`,
    }
};
const Intro = () => {
    return (
        <Grid
            container
            alignItems="center"
            style={styles.heroContainer} 
            top>
            <Container maxWidth="xl">
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={7}>

                    <Fade bottom>
                        <div>
                            <TypeAnimation cursor={true} sequence={[
                                    'Hello.', 4000, 'Xin chào.', 4000 ,'Hola.', 4000, 'Bonjour.', 4000, 'Ciao.', 4000, 'Olá.', 4000]}
                                    wrapper="anim"
                                    repeat={Infinity}/>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div>
                            <h1 class="intro">My name is <strong>Brian Vu</strong> and I am an aspiring <strong>Android Developer</strong> with a passion for design.</h1>
                        </div>                            
                    </Fade>
                        
                    <Grid container alignItems="center">
                        <Fade bottom>
                        <div>
                        <h2 class="intro"> Find me at</h2>
                        </div>
                        </Fade>
                        <Grid container item xs={12} id="social-icons">
                            <Grid item >
                            <Fade bottom>
                                <div>                 
                                <a href="mailto:brianzvu@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon component={Envelope} inheritViewBox/>
                                </a>
                                </div>
                            </Fade>
                            </Grid>
                            <Grid item>       
                            <Fade bottom>
                                <div>             
                                <a href="https://www.linkedin.com/in/brian-vu-9b263a1ba/" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon component={LinkedIn} inheritViewBox/>
                                </a>
                                </div>
                            </Fade>
                            </Grid>
                            <Grid item>
                            <Fade bottom>
                                <div>                      
                                <a href="https://github.com/tozmd" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon component={Github} inheritViewBox/>
                                </a>
                                </div>
                            </Fade>
                            </Grid>
                            <Grid item>   
                            <Fade bottom>
                                <div>                 
                                <a href="https://www.instagram.com/briandinhv/" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon component={Instagram} inheritViewBox/>
                                </a>
                                </div>
                            </Fade>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs ={5} align="right">
                        <Fade right>
                            <div>
                                <img class="intro-img" src={PfPicture} alt="Personal Portrait" />
                            </div>                            
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
};
export default Intro;