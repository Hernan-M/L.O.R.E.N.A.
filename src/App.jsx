
import './App.css'
import { useEffect, useState } from 'react'
import { phrases } from './data/phrases';
import TextToSpeech from './components/speech'
import Menu from './layout/menu';
import Modal from './components/modais/modalCamera'
import NetworkStatus from './components/modais/networkStatus';

function App() {
  const [stream, setStream] = useState(true);
  const [error, setError] = useState(null);
  const [isReady, setIsReady] = useState(null)
  const webgazer = window.webgazer;
  const [onlineStatus, SetOnlineStatus] = useState(navigator.onLine)

   const getUserMedia = async () =>  {
    try {
      setStream(await navigator.mediaDevices.getUserMedia({video: true}));
    } catch (e) {
      setError(e);
    }
  }

 

  useEffect(() => {

    let x, y;

    function handleClick (e) {
      // var cursorX = e.pageX;
      // var cursorY = e.pageY;
      // console.log(parseInt(eyeDataY), eyeDataY, eyeDataX, 'quiiiiiiiiiiii')
      if(e.type == "contextmenu" && x > 0 && y > 0){
        e.preventDefault()
        console.log(x,y)
        document.elementFromPoint(x, y)?.click()
      }
      // console.log(`click event triggered, X:${cursorX}, Y: ${cursorY}`);
      
    }

    SetOnlineStatus(navigator.onLine)
    if(onlineStatus){
      webgazer.setGazeListener().clearData();
      document.body.addEventListener('contextmenu', handleClick);
      const isReady = webgazer.setGazeListener( (data, clock) => {
          webgazer.showFaceOverlay(false)
          if(data){
            x = (parseInt(data.x))
            y = (parseInt(data.y))
          }
      }).begin();
      setIsReady(isReady)
      if (!stream) getUserMedia();

      return () => {
        document.body.removeEventListener('contextmenu', handleClick);      
      };
    }    
    else{
      console.log('fica oline maldito')
    }
  }, [])

  // const onChange = (event) => {
  //   setText(event.target.value);
  // };


  return (
    <div className='h-screen'>
    {!stream && onlineStatus && isReady &&<Modal />}
    {!onlineStatus && <NetworkStatus/>}
    <div className='h-64 w-full '></div>
    <div className='flex flex-col lg:gap-10 gap-6 max-h-screen w-full justify-center items-center'>
      <div className='flex flex-col w-full max-w-[1200px]'>
        <h1 className='pl-6'>Saudações</h1>
        <div className="flex w-full gap-2 flex-wrap align-center justify-center">
          { phrases.lineOne.map( (phrases, key) => <TextToSpeech key={key} text={phrases} />) }
        </div>
      </div>
      <div className='flex flex-col w-full max-w-[1200px]'>
        <h1 className='pl-6'>Humor</h1>
        <div className="flex w-full gap-2 flex-wrap align-center justify-center">
          { phrases.lineTwo.map( (phrases, key) => <TextToSpeech key={key} text={phrases} />) }
        </div>  
      </div>
      <div className='flex flex-col w-full max-w-[1200px]'>
        <h1 className='pl-6'>Necessidades</h1>
        <div className="flex w-full gap-2 flex-wrap align-center justify-center">    
          { phrases.lineThree.map( (phrases, key) => <TextToSpeech key={key} text={phrases} />) }
        </div>
      </div>
    </div>
    <Menu/>
    </div>
  );
}

export default App
