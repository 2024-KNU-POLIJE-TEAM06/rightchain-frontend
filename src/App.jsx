import React from 'react';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  // Menentukan rute di mana Header dan Footer tidak ditampilkan
  const hideHeaderFooterRoutes = ['/', '/Howtouse'];

  // Cek apakah rute saat ini termasuk dalam daftar rute yang tidak menampilkan Header dan Footer
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <Wrapper>
        <Outlet />
      </Wrapper>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return <Layout />;
};

export default App;
