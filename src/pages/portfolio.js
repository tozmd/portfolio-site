import React, { Component } from 'react'

import Header from "../components/navbar";
import Grid from '@mui/material/Grid';

import ProjectCard from '../components/project-card';


const styles = {
  // general container
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // blue highlighted background
  highlightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F3F9',
  },

  // SECTIONS WITHIN CONTAINERS
  // general formatting
  generalSection: {
    flex: 1,
    maxWidth: 852,
    width: '100%',
    margin: '24px 10px',
    // flexDirection: 'column',
    justifyContent: 'space-between'
  },
  // wider formatting
  largeSection: {
    flex: 1,
    maxWidth: 1052,
    width: '100%',
    margin: '24px 10px',
    // flexDirection: 'row',
    justifyContent: 'space-between'
  },
}


class Portfolio extends Component {
  render() {
    return (

      <div>
        <Header />
        <ProjectCard />
        <div style={{ height: 80 }} />

        <Grid container style={styles.mainContainer}>
          <Grid item xs={12} style={styles.generalSection}>
          </Grid>
        </Grid>
      </div>

    )
  }
}

export default Portfolio;