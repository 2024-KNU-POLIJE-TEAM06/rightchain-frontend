import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './components/layouts/header/Header';
import Footer from './components/layouts/footer/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};

const App = () => {
  return <Layout />;
};

export default App;
