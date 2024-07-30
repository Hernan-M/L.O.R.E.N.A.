import { useState, useEffect } from 'react';

const useWebGazerSetup = () => {
  const [stream, setStream] = useState(true);
  const [error, setError] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const webgazer = window.webgazer;
  const [onlineStatus, SetOnlineStatus] = useState(navigator.onLine);

  const getUserMedia = async () => {
    try {
      setStream(await navigator.mediaDevices.getUserMedia({ video: true }));
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    webgazer.setGazeListener().clearData();
    if (!isLoaded) webgazer.setGazeListener().begin();
    setIsLoaded(true);

    let width = window.innerWidth/ 2
    let height = window.innerHeight/ 2
    

    let x, y;

    function handleClick(e) {
      if (e.type === "contextmenu" && x > 0 && y > 0) {
        e.preventDefault();
        console.log(x, y);
        document.elementFromPoint(x, y)?.click();
      }
    }

    SetOnlineStatus(navigator.onLine);
    if (onlineStatus) {
      document.elementFromPoint(width, height).click();
      document.body.addEventListener('contextmenu', handleClick);
      webgazer.setGazeListener((data, clock) => {
        webgazer.showFaceOverlay(false);
        if (data) {
          setIsReady(true);
          x = parseInt(data.x);
          y = parseInt(data.y);
        }
      });
      if (!stream) getUserMedia();

      return () => {
        document.body.removeEventListener('contextmenu', handleClick);
      };
    } else {
      console.log('fica online maldito');
    }
  }, []);

  return { stream, error, isReady, isLoaded, onlineStatus };
};

export default useWebGazerSetup;
