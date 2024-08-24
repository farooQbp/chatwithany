import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { Visibility, VisibilityOff, Info } from '@mui/icons-material';
// import  from '@mui/icons-material/Info';

const CustomTextField = (props) => {
  const {
    isDisabled,
    name,
    error,
    fullWidth,
    onChange,
    variant,
    placeholder,
    required,
    ref,
    helperText,
    isPassword = false,
    label,
    suggestions,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <TextField
      id={name}
      name={name}
      label={label}
      error={error}
      fullWidth={fullWidth}
      disabled={isDisabled}
      onChange={onChange}
      variant={variant}
      placeholder={placeholder}
      required={required}
      margin='none'
      ref={ref}
      helperText={helperText}
      type={isPassword && !showPassword ? 'password' : 'text'}
      InputProps={isPassword ? {
        endAdornment: (
          <InputAdornment position="end">
            {suggestions ? (
              <Tooltip arrow color='white' title={suggestions}>
                <Info />
              </Tooltip>
            ) : null}
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      } : null}
    />
  )
}

export default CustomTextField;