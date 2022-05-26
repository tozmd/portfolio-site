import React, {Component} from 'react'
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert'

import Header from "../components/navbar";
import Intro from "../components/intro";



class Homepage extends Component {
  render() {
    return (
        <Grid container>
            <Header/>
            <Intro/>
            <Grid item xs={12} align="center" sx={{margin: 4}}>
            </Grid>
            <Container maxWidth="lg">
            </Container>
        </Grid>
    )
  }
}


export default Homepage;