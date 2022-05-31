import React, {Component} from 'react'
import Grid from "@mui/material/Grid";
import Header from "../components/navbar";
import Gallery from "../components/gallery";

   

class Photospage extends Component {
  render() {
    return (
        <Grid container xs={12}>
            <Header/>
            <Gallery/>
        </Grid>
    )
  }
}


export default Photospage;