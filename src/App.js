import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppContainer>
        <Router>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
          </Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
