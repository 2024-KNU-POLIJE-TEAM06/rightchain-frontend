import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

import Main from './pages/main/Main';
import Report from './pages/report/Report';
import Search from './pages/search/Search';
import Howtouse from './pages/howtouse/Howtouse';
import Landing from './pages/landing/Landing';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Landing />
      },
      {
        path: 'main',
        element: <Main />,
      },
      {
        path: 'report',
        element: <Report />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'auth',
        element: <div>Auth</div>,
      },
      {
        path: 'howtouse',
        element: <Howtouse />,
      }, 
    ],
  },
]);

export default router;
