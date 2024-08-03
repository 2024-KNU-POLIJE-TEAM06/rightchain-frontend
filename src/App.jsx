import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { AuthProvider } from './context/AuthContext';

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  jsutify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <AuthProvider>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </AuthProvider>
  );
};

const App = () => {
  return <Layout />;
};

export default App;
