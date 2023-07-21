import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

const router = createBrowserRouter([
  { path: '/', element: <SignUp />},
  { path: '/signin', element: <SignIn />}
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
