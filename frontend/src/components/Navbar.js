import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <span>Campus</span>Connect
        </Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" active={isActive('/')}>
            Home
          </NavLink>
          <NavLink to="/projects" active={isActive('/projects')}>
            Projects
          </NavLink>
          <NavLink to="/events" active={isActive('/events')}>
            Events
          </NavLink>
          <NavLink to="/groups" active={isActive('/groups')}>
            Groups
          </NavLink>
          <NavLink to="/login" active={isActive('/login')}>
            Login
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;