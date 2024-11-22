// src/pages/About.js
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

const About = () => {
  return (
    <PageContainer>
      <h1>Welcome to the About Page</h1>
    </PageContainer>
  );
};

export default About;
