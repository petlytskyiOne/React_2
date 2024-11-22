// src/pages/Home.js
import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
`;

const Home = () => {
  return (
    <PageContainer>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
    </PageContainer>
  );
};

export default Home;
