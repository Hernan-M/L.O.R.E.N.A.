import { useContext, useEffect, useState } from "react"
import { phrases } from "../../data/phrases"
import Menu from "../../layout/menu"
import TextToSpeech from "../cards/speech"
import Modal from "../modais/modalCamera"
import NetworkStatus from "../modais/networkStatus"
import { AppContext } from "../../App"
import { Button } from "@nextui-org/react"

export const Home = () => {

 const {stream, onlineStatus, isReady, isMobile, modalOff, setModalOff} = useContext(AppContext)

 function deactiveCam() {
    if(isMobile) {
      const videoElements = document.querySelectorAll('[id=webgazerVideoContainer]');
      videoElements.forEach(element => {
      element.style.display = 'none';
      });
    }
    setModalOff(true)
  }

  useEffect(() => {
    if (isMobile && modalOff) deactiveCam();
  },[])

  return (
    <div className='h-screen'>
      {!modalOff &&
        <div className="z-10 bg-black/[0.5] gap-4 absolute place-content-center h-screen w-full top-0 left-0 flex items-center flex-col text-center">
            <h1 className="text-2xl">Camera está sendo utilizada</h1>
            <Button className="w-20" onClick={deactiveCam}>Ok</Button>
        </div>
      } 
      {!stream && onlineStatus && isReady && <Modal />}
      {!onlineStatus && <NetworkStatus/>}
       {!isMobile && 
            <div id="whitebox" className='h-[180px] md:h-[80px] w-full md:gap-[30%] flex justify-beetween'>
                <div className="w-full flex flex-col items-center text-center px-4">
                    <img src="imgs/left-click.png" className="max-h-[140px]" alt="" />
                    <h1>Ultilize o clique esquerdo do mouse para calibrar, seguindo o ponteiro.</h1>
                </div>
                <div className="w-full flex flex-col items-center text-center px-4">
                <img src="imgs/right-click.png" className="max-h-[140px]" alt="" />
                    <h1>Ultilize o clique direito do mouse para selecionar as opções com os olhos.</h1>
                </div>
            </div>
        }
      <div className='flex flex-col lg:gap-6 gap-4 h-screen w-full justify-center items-center'>
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
      <Menu />
    </div>
  )
}