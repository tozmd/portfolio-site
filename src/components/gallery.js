import React from 'react';
import Fade from 'react-reveal/Fade';

import { ImageGroup, Image } from 'react-fullscreen-image'

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
import { positions } from '@mui/system';


const Gallery = () => {
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

    return (  
      <div className="container">
      <Fade up>
      <ImageGroup>
        <ul className="images">
          {images.map(i => (
            <li key={i.thumbnail}>
              <Image src={i.img}/>
            </li>
          ))}
        </ul>
      </ImageGroup>
      </Fade>
      </div>
    
    );
};
export default Gallery;