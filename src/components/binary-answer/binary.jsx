import { useContext, useEffect } from "react"
import Menu from "../../layout/menu"
import TextToSpeech from "../cards/speech"
import Modal from "../modais/modalCamera"
import NetworkStatus from "../modais/networkStatus"
import { AppContext } from "../../App"


export const Binary = () => {

  const {stream, onlineStatus, isReady, isMobile} = useContext(AppContext)

  function deactiveCam() {
    if(isMobile) {
      const videoElements = document.querySelectorAll('[id=webgazerVideoContainer]');
      videoElements.forEach(element => {
      element.style.display = 'none';
      });
    }
  }

  useEffect(() => {
    if (isMobile) deactiveCam();
  },[isReady])

  

  return (
    <div className='h-screen'>
      {!stream && onlineStatus && isReady && <Modal />}
      {!onlineStatus && <NetworkStatus/>}
      <div className='flex flex-col gap-4 md:gap-10 flex-wrap justify-center h-screen w-full'>
          <TextToSpeech text="Sim" binaryButton={true}/>
          <TextToSpeech text="Não" binaryButton={true}/>
      </div>
      <Menu />
    </div>
  )
}
