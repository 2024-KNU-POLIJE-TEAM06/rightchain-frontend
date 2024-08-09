import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

import Main from './pages/main/Main';
import Search from './pages/search/Search';
import Write from './pages/write/Write';

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
        element: <Write />,
      },
      {
        path: 'search',
        element: <Search mode="Search" />,
      },
      {
        path: 'my-report',
        element: <Search mode="My Reports" />,
      },
      {
        path: 'my-like',
        element: <Search mode="My Likes" />,
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
