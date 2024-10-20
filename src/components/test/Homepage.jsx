/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar/Navbar';

// Styled components using @emotion/styled
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = () => {

    const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <>
     <Navbar/>
    <Container>
      <Title>Welcome to Your App</Title>
      <Subtitle>Your gateway to amazing experiences.</Subtitle>
      <Button onClick={handleGetStarted}>Get Started</Button>
    </Container>
    </>
  );
};

export default HomePage;
