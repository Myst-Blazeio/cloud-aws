// src/components/Navbar.js
import React from 'react';
import StyledComponents from '../styles/Navbar.styled';
import { useNavigate } from 'react-router-dom';

const { NavbarContainer, ToolbarContainer, Logo, NavLinks, NavButton } = StyledComponents;

const NavbarMain = () => {

  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  };

  return (
    <NavbarContainer position="static">
      <ToolbarContainer>
        <Logo variant="h6">Cloud App</Logo>
        <NavLinks>
          <NavButton  onClick={handleHomePage}>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Services</NavButton>
          <NavButton>Contact</NavButton>
        </NavLinks>
      </ToolbarContainer>
    </NavbarContainer>
  );
};

export default NavbarMain;
