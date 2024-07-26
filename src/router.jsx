import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

import Main from './pages/main/Main';
import Report from './pages/report/Report';

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
        path: 'report',
        element: <Report />,
      },
      {
        path: 'search',
        element: <div>Search</div>,
      },
      {
        path: 'auth',
        element: <div>Auth</div>,
      },
      {
        path: 'landing',
        element: <div>Landing</div>,
      },
    ],
  },
]);

export default router;
