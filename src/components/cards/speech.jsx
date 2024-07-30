/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

const TextToSpeech = ({text, binaryButton}) => {
  const [sizeButton, setSizeButton] = useState(null)
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    setUtterance(u);
    setVoice(voices[0]);
    setSizeButton(binaryButton)

    return () => {
      synth.cancel();
    };
  }, [text, binaryButton]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voice;
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };


  const handleVoiceChange = (event) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => "Daniel" === event.target.value));
  };

  const handlePitchChange = (event) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  if(!binaryButton){
    return (
      <Button className=" text-white text-lg max-w-full lg:w-[24%] lg:h-24 w-[45%] h-16 transition ease-in-out delay-150 bg-tiles hover:scale-110 hover:bg-tiles " onClick={handlePlay}>
        {text}
      </Button>
    );
  }else{
    return (
      <Button className=" text-white h-1/3 text-lg lg:h-screen transition ease-in-out delay-150 bg-tiles hover:scale-110 hover:bg-tiles " onClick={handlePlay}>
        {text}
      </Button>
    );
  }
};

export default TextToSpeech;