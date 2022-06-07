import React from 'react';
import Fade from 'react-reveal/Fade';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import Thumbnail1 from "../assets/Photos/thumbnails/pic1.jpg";
import Thumbnail2 from "../assets/Photos/thumbnails/pic2.jpg";
import Thumbnail3 from "../assets/Photos/thumbnails/pic3.jpg";
import Thumbnail4 from "../assets/Photos/thumbnails/pic4.jpg";
import Thumbnail5 from "../assets/Photos/thumbnails/pic5.jpg";
import Thumbnail6 from "../assets/Photos/thumbnails/pic6.jpg";
import Thumbnail7 from "../assets/Photos/thumbnails/pic7.jpg";
import Thumbnail8 from "../assets/Photos/thumbnails/pic8.jpg";
import Thumbnail9 from "../assets/Photos/thumbnails/pic9.jpg";
import Thumbnail10 from "../assets/Photos/thumbnails/pic10.jpg";
import Thumbnail11 from "../assets/Photos/thumbnails/pic11.jpg";

import Pic1 from "../assets/Photos/pic1.jpg";
import Pic2 from "../assets/Photos/pic2.jpg";
import Pic3 from "../assets/Photos/pic3.jpg";
import Pic4 from "../assets/Photos/pic4.jpg";
import Pic5 from "../assets/Photos/pic5.jpg";
import Pic6 from "../assets/Photos/pic6.jpg";
import Pic7 from "../assets/Photos/pic7.jpg";
import Pic8 from "../assets/Photos/pic8.jpg";
import Pic9 from "../assets/Photos/pic9.jpg";
import Pic10 from "../assets/Photos/pic10.jpg";
import Pic11 from "../assets/Photos/pic11.jpg";



const PhotoGallery = () => {
  const images = [
    {img:Pic10, thumbnail:Thumbnail10},
    {img:Pic6, thumbnail:Thumbnail6},
    {img:Pic3, thumbnail:Thumbnail3},
    {img:Pic4, thumbnail:Thumbnail4},
    {img:Pic5, thumbnail:Thumbnail5},
    {img:Pic7, thumbnail:Thumbnail7},
    {img:Pic8, thumbnail:Thumbnail8},
    {img:Pic9, thumbnail:Thumbnail9},
    {img:Pic1, thumbnail:Thumbnail1},
    {img:Pic11, thumbnail:Thumbnail11},
    {img:Pic2, thumbnail:Thumbnail2},
  ]

    const imageStyle = {
      cursor: 'pointer',
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
      maxHeight: '100%',
    }


    return (  
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Fade up>
        <Box sx={{ width: '98%', height: '100%', overflowY: 'scroll'}}>
      <Gallery>
        <ImageList variant="masonry" cols={3} gap={3}>
            <Item
              original={Pic10}
              thumbnail={Thumbnail10}
              width="1600"
              height="2841">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic10}
              />
              )}
            </Item>
            <Item
              original={Pic6}
              thumbnail={Thumbnail6}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic6}
              />
              )}
            </Item>
            <Item
              original={Pic2}
              thumbnail={Thumbnail2}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic2}
              />
              )}
            </Item>
            <Item
              original={Pic3}
              thumbnail={Thumbnail3}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic3}
              />
              )}
            </Item>
            <Item
              original={Pic4}
              thumbnail={Thumbnail4}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic4}
              />
              )}
            </Item>
            <Item
              original={Pic5}
              thumbnail={Thumbnail5}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic5}
              />
              )}
            </Item>
            <Item
              original={Pic7}
              thumbnail={Thumbnail7}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic7}
              />
              )}
            </Item>
            <Item
              original={Pic8}
              thumbnail={Thumbnail8}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic8}
              />
              )}
            </Item>
            <Item
              original={Pic9}
              thumbnail={Thumbnail9}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic9}
              />
              )}
            </Item>
            <Item
              original={Pic11}
              thumbnail={Thumbnail11}
              width="1600"
              height="2841">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic11}
              />
              )}
            </Item>
            <Item
              original={Pic1}
              thumbnail={Thumbnail1}
              width="2841"
              height="1600">
              {({ ref, open }) => (
              <img
                style={ imageStyle }
                loading="lazy"
                ref={ref}
                onClick={open}
                src={Pic1}
              />
              )}
            </Item>
            </ImageList>
        
        
      </Gallery>
    </Box>
        </Fade>

      </Grid>

    
    );
};
export default PhotoGallery;