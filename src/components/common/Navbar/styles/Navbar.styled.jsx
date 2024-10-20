// src/components/NavbarStyles.js
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledComponents = {
  NavbarContainer: styled(AppBar)({
    backgroundColor: '#1976d2', // Blue background for the navbar
    padding: '0 20px',
  }),

  ToolbarContainer: styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  }),

  Logo: styled(Typography)({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ffffff',
    cursor: 'pointer',
  }),

  NavLinks: styled(Box)({
    display: 'flex',
    gap: '15px',
  }),

  NavButton: styled(Button)({
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  }),
};

export default StyledComponents;
