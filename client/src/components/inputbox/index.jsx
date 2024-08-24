import React, { useState } from 'react';
import { IconButton, Input, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CustomInputBox = (props) => {
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
    isPassword,
    label,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Input
      id={name}
      name={name}
      error={error}
      fullWidth={fullWidth}
      disabled={isDisabled}
      onChange={onChange}
      variant={variant}
      placeholder={placeholder}
      required={required}
      margin='auto'
      ref={ref}
      label={label}
      size='small'
      helperText={helperText}
      type={isPassword && !showPassword ? 'password' : 'text'}
      endAdornment={
        isPassword && (<InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>)
      }
    />
  )
}

export default CustomInputBox;