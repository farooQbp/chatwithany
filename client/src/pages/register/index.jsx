import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { Chat } from '@mui/icons-material';
import { useAuth } from '../../core/routes/privateroutes';
import useStyles from './styles.js';
import CustomTextField from '../../components/textfields';
import { debounce } from '../../core/helpers/index.js';
import { REGISTER_DATA } from '../../core/constants/userbaseconstants.js';
import { ALPHABETS_ONLY, EMAIL_REGEX, PASSWORD_REGEX } from '../../core/constants/regex.js';

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState(REGISTER_DATA);
  const [registerFormError, setRegisterFormError] = useState(REGISTER_DATA);
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
    const errorText = { ...registerFormError }
    const registerText = { ...registerForm }
    switch (name) {
      case 'firstName':
        errorText.firstName = !ALPHABETS_ONLY.test(value) ? 'Name cannot contain special characters' : '';
        registerText.firstName = value;
        break;
      case 'lastName':
        errorText.lastName = !ALPHABETS_ONLY.test(value) ? 'Name cannot contain special characters' : '';
        registerText.lastName = value;
        break;
      case 'email':
        errorText.email = !EMAIL_REGEX.test(value) ? 'Please enter a valid email address' : '';
        registerText.email = value;
        break;
      case 'password':
        errorText.password = !PASSWORD_REGEX.test(value) ? 'Password requirement not met' : '';
        registerText.password = value;
        break;
      case 'confirmPassword':
        errorText.confirmPassword = (registerText.password !== value || value !== '') ? 'Password do not match' : '';
        registerText.confirmPassword = value;
        break;
      default:
      // code block
    }
    setRegisterForm(registerText);
    setRegisterFormError(errorText)
  }

  const inputHandler = (event) => {
    debounce(inputHandlerDebounced(event), 2000)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box className={classes.mainContainer}>
        <Avatar sx={{ m: 1, bgcolor: 'black' }}>
          <Chat />
        </Avatar>
        <Typography component="h2" variant="h5">
          Register Now
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomTextField
                name="firstName"
                required
                fullWidth
                label="First Name"
                autoFocus
                onChange={inputHandler}
                helperText={registerFormError.firstName}
                error={registerFormError.firstName !== ''}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                onChange={inputHandler}
                helperText={registerFormError.lastName}
                error={registerFormError.lastName !== ''}
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                label="Email Address"
                name="email"
                type='email'
                onChange={inputHandler}
                helperText={registerFormError.email}
                error={registerFormError.email !== ''}
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
                helperText={registerFormError.password}
                error={registerFormError.password !== ''}
                suggestions='Password must be between 8 and 14. Password must contain one uppercase, lowercase, number and special characters eg. @ $ ! % * ? &'
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                isPassword
                helperText={registerFormError.confirmPassword}
                error={registerFormError.confirmPassword !== ''}
                onChange={inputHandler}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
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

export default RegisterPage;