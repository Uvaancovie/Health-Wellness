import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <img src="D:/REFORMER PILATES -2/my-website/images/logo.png" alt="Reformer Pilates Logo" />
      </LogoContainer>
      <Title>Reformer Pilates</Title>
      <Menu right>
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/about" className="menu-item">About</Link>
        <Link to="/pricing" className="menu-item">Pricing</Link>
        <Link to="/classes" className="menu-item">Classes</Link>
        <Link to="/contact" className="menu-item">Contact</Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;

// Styled Components for Navbar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: white;
  height: 60px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Josefin Sans', sans-serif;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  img {
    height: 40px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    display: none; /* Hide the title on mobile */
  }
`;
