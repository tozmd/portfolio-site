import React, {Component} from 'react'
import Grid from "@mui/material/Grid";

import Header from "../components/navbar";
import Banner from "../assets/aboutbanner.jpg"
import SvgIcon from '@mui/material/SvgIcon';
import Fade from 'react-reveal/Fade';

import {ReactComponent as Envelope} from '../assets/icons/envelope-regular.svg';
import {ReactComponent as LinkedIn} from '../assets/icons/linkedin-in-brands.svg';
import {ReactComponent as Instagram} from '../assets/icons/Instagram.svg';
import {ReactComponent as Github} from '../assets/icons/github.svg';

const About = () => (
    <div>
    <Header/>
    <Fade up>
<Grid container justifyContent="center" alignItems="center">
            <Grid container item xs={8} direction="column" justifyContent="center" alignItems="center">
                <Grid item container justifyContent="center">
                    <img class="about-banner-img" src={Banner} alt="Banner" />
                    <Grid item xs={8}>
                        <h3 class="intro">Hello, everyone! My name is Brian Vu and I am currently enrolled at CSULB as a Computer Science major
                        with a focus on Mobile Development, more specifically Android Development. As of now, I am looking for an opporunity to 
                        expand my skillset at an internship or at an entry-level position, so any inquiries are greatly appreciated! 😊</h3>
                        <h3 class="intro">In my spare time, I enjoy hiking and enjoying nature, photography, or working out at the gym. 💪</h3>
                        <div style={{ height: 20 }} />
                        <h3 class="intro">💻Programming Languages—Java, Kotlin, Python, Javascript, HTML, CSS, Dart</h3>
                        <h3 class="intro">📚Libraries and Frameworks—Jetpack Compose, Flutter, Native, ReactJS, LibGDX</h3>
                        <h3 class="intro">🛠️Tools—Android Studio, IntellJ IDEA, GitHub, Visual Studio, Figma, Adobe Photoshop, Adobe Lightroom</h3>
                        <h3 class="intro">🔒Database Management—MySQL, Firebase, DigitalOcean IAAS</h3>

    
                        <Grid container alignItems="center">
                        <div>
                        <h2 class="intro">Thanks for reading!</h2>
                        <h3 class="intro">You can find me at the following</h3>

                        </div>
                        <Grid container item xs={12} id="social-icons">
                            <Grid item >
                                <div>                 
                                <a href="mailto:brianzvu@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon component={Envelope} inheritViewBox/>
                                </a>
                                </div>
                            </Grid>
                            <Grid item>       
                                <div>             
                                <a href="https://www.linkedin.com/in/brian-vu-9b263a1ba/" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon component={LinkedIn} inheritViewBox/>
                                </a>
                                </div>
                            </Grid>
                            <Grid item>
                                <div>                      
                                <a href="https://github.com/tozmd" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon component={Github} inheritViewBox/>
                                </a>
                                </div>
                            </Grid>
                            <Grid item>   
                                <div>                 
                                <a href="https://www.instagram.com/briandinhv/" target="_blank" rel="noopener noreferrer">
                                    <SvgIcon component={Instagram} inheritViewBox/>
                                </a>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </Grid>
    </Fade>
    </div>
    
);

export default About;