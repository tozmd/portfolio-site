import React, {Component} from 'react'
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';

import Header from "../components/navbar";
import Intro from "../components/intro";



class Homepage extends Component {
  render() {
    return (
        <Grid container justifyContent={"center"} alignItems="center">
            <Header/>
            <Grid item align="left" xs={12}>
              <Intro/>
            </Grid>
            <Grid item xs={12} align="center" sx={{margin: 4}}>
            </Grid>
            <Container maxWidth="lg">
            </Container>
        </Grid>
    )
  }
}


export default Homepage;