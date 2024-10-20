// src/components/Navbar.js
import React from 'react';
import StyledComponents from '../styles/Navbar.styled';

const { NavbarContainer, ToolbarContainer, Logo, NavLinks, NavButton } = StyledComponents;

const NavbarMain = () => {
  return (
    <NavbarContainer position="static">
      <ToolbarContainer>
        <Logo variant="h6">Cloud App</Logo>
        <NavLinks>
          <NavButton>Home</NavButton>
          <NavButton>About</NavButton>
          <NavButton>Services</NavButton>
          <NavButton>Contact</NavButton>
        </NavLinks>
      </ToolbarContainer>
    </NavbarContainer>
  );
};

export default NavbarMain;
