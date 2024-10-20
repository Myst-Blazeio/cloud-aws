// src/components/LoginStyles.js
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';

const StyledComponents = {
  LoginContainer: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  }),

  FormBox: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '400px',
  }),

  StyledButton: styled(Button)({
    backgroundColor: '#1976d2',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#115293',
    },
  }),
};

export default StyledComponents;
