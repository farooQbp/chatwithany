import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAuth } from '../../core/routes/privateroutes';
import useStyles from './styles';
import CustomTextField from '../../components/textfields';
import { debounce } from '../../core/helpers';

const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const classes = useStyles()

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    auth.signin(data.get('email'), () => {
      navigate(from, { replace: true });
    });
  }

  const inputHandlerDebounced = (event) => {
    const { name, value } = event.target;
    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqq', name, value)
  }

  const inputHandler = (event) => {
    debounce(inputHandlerDebounced(event), 2000)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box className={classes.mainContainer} >
        <Avatar sx={{ bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                label="Email Address"
                name="email"
                type='email'
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                name="password"
                label="Password"
                isPassword
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="p">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="p">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.copyrightContainer}>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </Container>
  );
}

function Copyright(props) {
  return (
    <Typography variant="p" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default LoginPage;