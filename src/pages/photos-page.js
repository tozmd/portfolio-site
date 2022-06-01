import React, {Component} from 'react'
import Grid from "@mui/material/Grid";
import Header from "../components/navbar";
import Gallery from "../components/gallery";

   

class Photospage extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Gallery/>
        </div>
    )
  }
}


export default Photospage;