import React from 'react';
import useStyles from './styles.js';
import { Box, Container, Grid } from '@mui/material';
import UserDetailsCard from '../../components/users/index.jsx';

const HomePage = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2} padding={1}>
      <Grid item xs={2}>
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
        <UserDetailsCard />
      </Grid>
      <Grid item xs={10}>
        ssssssssssssssssssssssssssss
      </Grid>
    </Grid>
  )
}

export default HomePage;