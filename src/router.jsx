import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

import PrivateRoute from './context/PrivateRoute';
import Main from './pages/main/Main';
import Search from './pages/search/Search';
import Write from './pages/write/Write';
import EachReport from './pages/report/EachReport';
import Landing from './pages/landing/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'write',
        element: (
          <PrivateRoute>
            <Write />
          </PrivateRoute>
        ),
      },
      {
        path: 'search',
        element: <Search mode="Search" />,
      },
      {
        path: 'my-reports',
        element: (
          <PrivateRoute>
            <Search mode="My Reports" />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-likes',
        element: (
          <PrivateRoute>
            <Search mode="My Likes" />
          </PrivateRoute>
        ),
      },
      {
        path: 'each-report',
        element: <EachReport />,
      },
      {
        path: 'landing',
        element: <Landing />,
      },
    ],
  },
]);

export default router;
