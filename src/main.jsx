import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Binary } from './components/binary-answer/binary.jsx'
import ErrorPage from './components/error-page/error.jsx'
import { Calibrate } from './components/calibrate/calibrate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/calibrate",
    element: <Calibrate />,
    errorElement: <ErrorPage />
  },
  {
    path: "/binary",
    element: <Binary />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
