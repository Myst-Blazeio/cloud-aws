// src/components/LoginPage.js
import React from 'react';
import { Typography, TextField } from '@mui/material';
import StyledComponents from '../styles/Login.styled';

const { LoginContainer, FormBox, StyledButton } = StyledComponents;

const LoginPage = () => {
  return (
    <LoginContainer>
      <FormBox>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField 
          label="Email" 
          type="email" 
          variant="outlined" 
          fullWidth 
          required 
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          required 
        />
        <StyledButton variant="contained" fullWidth>
          Login
        </StyledButton>
      </FormBox>
    </LoginContainer>
  );
};

export default LoginPage;
