import React from 'react';
import Fade from 'react-reveal/Fade';

import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

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
    // *edit project data here*
    const galleryData = [
        {image:Pic6, orient:"horizontal"}, {image:Pic9, orient:"horizontal"},{image:Pic2, orient:"horizontal"}, 
        {image:Pic3, orient:"horizontal"}, {image:Pic4, orient:"horizontal"}, {image:Pic10, orient:"vertical"},
        {image:Pic5, orient:"horizontal"}, {image:Pic1, orient:"horizontal"},{image:Pic7,orient:"horizontal"}, 
        {image:Pic8, orient:"horizontal"}, {image:Pic11, orient:"vertical"}
    ];


    return (  
    <div>
    <Fade up>
      <Grid container>
          {galleryData.map((gallery) => (
              <Grid container xs={3} justifyContent="center" alignContent={"center"}>
                <img src={gallery.image} class={gallery.orient.localeCompare("vertical")==0 ? "vertical-photos": "horizontal-photos"}/>
              </Grid>
            ))}
        </Grid>
        
    </Fade>
    </div>
    );
}
export default Gallery;