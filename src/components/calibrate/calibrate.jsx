import { useContext, useEffect, useState } from "react";
import Menu from "../../layout/menu";
import { AppContext } from "../../App";
import NetworkStatus from "../modais/networkStatus";
import Modal from "../modais/modalCamera";

export const Calibrate = () => {
  const colorStyle = ["bg-red", "bg-yellow", "bg-green"];
  const numberDots = 15;
  
  const widthScreen = window.innerWidth
  // Inicializando o estado para armazenar a cor de cada ponto
  const [dotColors, setDotColors] = useState(Array(numberDots).fill(0));
  const {stream, onlineStatus, isReady, isCameraActivate} = useContext(AppContext)

  const changeColor = (index) => {
    if(dotColors[index] < 2){
        setDotColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[index] = (newColors[index] + 1);
            return newColors;
        });
    }else{ 
        return
    }
    console.log(dotColors)
  };

  const whitebox = document.getElementById('whitebox')    
  if(whitebox && widthScreen < 600) whitebox.style.display = 'none';


  const positions = [
    "top-0 left-0",    // Top left
    "top-0 left-[21%] md:left-[24%]",
    "top-0 left-[21%] md:left-[48%]",
    "top-0 left-[21%] md:left-[72%]",    // Top center
    "top-0 right-0",   // Top right
    "left-0 top-[40%]",   // Middle left
    "left-[42%] top-[40%] md:left-[24%]", 
    "left-[42%] top-[40%] md:left-[48%]",
    "top-[40%] left-[21%] md:left-[72%]",// Center
    "right-0 top-[40%]",  // Middle right
    "bottom-20 left-0", // Bottom left
    "bottom-20 left-[21%] md:left-[24%]",
    "bottom-20 left-[21%] md:left-[48%]",
    "bottom-20 left-[21%] md:left-[72%]", // Bottom center
    "bottom-20 right-0" // Bottom right
  ];

  function deactiveCam() {
      const videoElements = document.querySelectorAll('[id=webgazerVideoContainer]');
      videoElements.forEach(element => {
      element.style.display = 'none';
      });
  }

  useEffect(() => {
     if(!isCameraActivate) deactiveCam();
  },[isCameraActivate])

  return (
    <>
    
      <div className="flex flex-wrap w-full h-screen gap-4 relative">
      {!stream && onlineStatus && isReady && <Modal />}
      {!onlineStatus && <NetworkStatus/>}
        {Array.from({ length: numberDots }).map((_, index) => (
          <div
            onClick={() => changeColor(index)}
            key={index}
            className={`w-1/6 md:w-16 h-15 aspect-square absolute rounded-full ${colorStyle[dotColors[index]]} ${positions[index]}`}
          ></div>
        ))}
      </div>
      <Menu />
    </>
  );
};
