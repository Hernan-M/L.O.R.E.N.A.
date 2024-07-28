
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
  const [counter, setCounter] = useState(0)
  const [eyeDataX, SetEyeDataX] = useState(0)
  const [eyeDataY, SetEyeDataY] = useState(0)
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
      
      webgazer.setGazeListener( (data, clock) => {
          webgazer.showFaceOverlay(false)
          if(data){
            x = (parseInt(data.x))
            y = (parseInt(data.y))
          }
        }).begin();
      // eslint-disable-next-line no-unused-vars
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
    {!stream && onlineStatus && <Modal />}
    {!onlineStatus && <NetworkStatus/>}
    <div className='h-64 w-full '></div>
    <div className='flex flex-col lg:gap-10 gap-6 max-h-screen'>
      <div>
        <h1 className='pl-10 lg:pl-60 '>Saudações</h1>
        <div className="flex gap-4 flex-wrap align-center justify-center">
          { phrases.lineOne.map( (phrases, key) => <TextToSpeech key={key} text={phrases} />) }
        </div>
      </div>
      <div>
        <h1 className='pl-10 lg:pl-60'>Humor</h1>
        <div className="flex gap-4 flex-wrap align-center justify-center">
          { phrases.lineTwo.map( (phrases, key) => <TextToSpeech key={key} text={phrases} />) }
        </div>  
      </div>
      <div>
        <h1 className='pl-10 lg:pl-60'>Necessidades</h1>
        <div className="flex gap-4 flex-wrap align-center justify-center">    
          { phrases.lineThree.map( (phrases, key) => <TextToSpeech key={key} text={phrases} />) }
        </div>
      </div>
    </div>
    <Menu className="fixed top-0"/>
    </div>
  );
}

export default App
