import React from 'react';
import styled from 'styled-components/macro';
import { Header } from './home/components/Header';
import { NavBar } from '../common/components/NavBar';
import { Projects } from './home/components/Projects';

export const Home: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Header />
      <Projects />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
