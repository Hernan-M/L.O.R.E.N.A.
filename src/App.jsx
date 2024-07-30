import './App.css';
import { createContext, useEffect, useState} from 'react';
import { Home } from './components/home/home';
import ErrorPage from './components/error-page/error';
import { Calibrate } from './components/calibrate/calibrate';
import { Binary } from './components/binary-answer/binary';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import useWebGazerSetup from './hooks/webgazer-hook';

export const AppContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

function App() {

  const [modalOff,  setModalOff] = useState(false)
  const [isMobile, setIsMobile] = useState( () => window.innerWidth < 600 ? true: false)

  useEffect(() =>{
    const handleResize = () => {
        window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false)
    };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };

    }, [])

  const [isCameraActive, setIsCameraActive] = useState(false);
  const { stream, error, isReady, isLoaded, onlineStatus } = useWebGazerSetup();

  return (
    <AppContext.Provider value={{stream, isMobile, error, isReady, isLoaded, setIsCameraActive , isCameraActive, onlineStatus, modalOff, setModalOff}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
