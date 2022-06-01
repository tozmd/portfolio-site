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


const Gallery = () => {
  const images = [
    Pic10,Pic6,Pic3,Pic4,Pic5,Pic1,
    Pic7,Pic8,Pic9,Pic1,Pic11
  ]

  const thumbnail = [
    Thumbnail1,Thumbnail2,Thumbnail3,Thumbnail4,Thumbnail5,Thumbnail6,
    Thumbnail7,Thumbnail8,Thumbnail9,Thumbnail10,Thumbnail11
  ]

    return (  
    <Fade up>
          <div className="container">
      <ImageGroup>
        <ul className="images">
          {thumbnail.map(t => (images.map(i => (
            <li key={t}>
              <Image src={i}/>
            </li>
          ))))}
        </ul>
      </ImageGroup>
      </div>
    </Fade>
    
    );
};
export default Gallery;