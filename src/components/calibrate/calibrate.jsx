import { useEffect, useState } from "react";
import Menu from "../../layout/menu";

export const Calibrate = () => {
  const colorStyle = ["bg-red-400", "bg-yellow-400", "bg-green-600"];
  const numberDots = 9;
  
  // Inicializando o estado para armazenar a cor de cada ponto
  const [dotColors, setDotColors] = useState(Array(numberDots).fill(0));

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

  const positions = [
    "top-0 left-0",    // Top left
    "top-0 left-[42%] md:left-[48%]",    // Top center
    "top-0 right-0",   // Top right
    "left-0 top-[40%] ",   // Middle left
    "left-[42%] top-[40%] md:left-[48%]", // Center
    "right-0 top-[40%]",  // Middle right
    "bottom-20 left-0", // Bottom left
    "bottom-20 left-[42%] md:left-[48%]", // Bottom center
    "bottom-20 right-0" // Bottom right
  ];

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-wrap w-full h-screen gap-4 relative">
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
