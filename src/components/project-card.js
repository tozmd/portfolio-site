import React from 'react';
import Fade from 'react-reveal/Fade';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';

import LockittBanner from "../assets/thumbnails/lockitt.png";
import SnakeBanner from "../assets/thumbnails/snake.png";

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      top: '50%',
      left: '50%',
      borderRadius: 10,
      position: 'relative',
      transform: 'translate(-50%, -50%)',
      backgroundSize: '200%',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      transition: '0.6s',
      backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
      '&:hover': {
        backgroundPosition: 'right'
      }
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'black',
        backgroundColor: 'white'
     }
  });


const ProjectCard = () => {
    const classes = useStyles();

    // *edit project data here*
    const projectData = [
        {name: "LockItt", description: "An image steganography app to hide messages", year:"2021",image: LockittBanner, link: "https://github.com/tozmd/LockItt"},
        {name: "Snake", description: "A classic recreation of the Snake game", year:"2020", image: SnakeBanner, link: "https://github.com/tozmd/Snake-game"},

    ];
    
    return (  
    <Grid container justifyContent="space-evenly" alignItems="center">
      <Grid container spacing={12} xs={12} direction="column"
        justifyContent="space-evenly" alignItems="center">
        {projectData.map((project) => (
        <Grid item xs={6}>
            <Card elevation={0} style={{borderRadius: 25, minWidth: '33vw'}}>
            <CardActionArea href={project.link}>
                <Grid item xs={12}>
                    
                    <Grid item>
                        <Button class="year-tag" variant="contained" disabled style={{height: 50, width: 110, backgroundColor:"#ffffff", borderRadius: 30, 
                            fontFamily: "Lato", fontWeight: 600, color:"#000000", margin: "1.2rem 0 0 1rem", position:"absolute"}}>
                                <bold>{project.year}</bold>
                        </Button>
                    </Grid> 

                    <CardMedia
                        component="img"
                        image={project.image}
                        style={{borderRadius: 15, objectFit: 'cover', minHeight: '25vh'}}/>
                </Grid>

                <CardContent elevation={0} align="left" style={{backgroundColor: "inherit"}}>
                    <Grid item xs={12}>
                        <Grid item sx={{ display: 'contents'}}>
                            <h1 class="card">{project.name}</h1>

                        </Grid>
                        <Grid item xs={12}>
                            <h2 class="card">{project.description}</h2>
                        </Grid>
                    </Grid>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            ))}
        <Grid item xs={2}> </Grid>
        </Grid>
    </Grid>
    
    );
}
export default ProjectCard;

