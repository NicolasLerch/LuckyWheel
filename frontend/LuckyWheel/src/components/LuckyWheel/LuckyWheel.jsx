// import React from 'react'
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import PrizeWindow from "../PrizeWindow/PrizeWindow";
import './LuckyWheel.css'

const data = [
  {
    option: "Yerbera",
    style: { backgroundColor: "green", textColor: "black" },
    gender: "fem",
    img:"yerbera.jpg"
  },
  {
    option: "Segui Participando",
    style: { backgroundColor: "white", textColor: "black", fontSize: "18"},
  },
  {
    option: "Set Matero",
    style: { backgroundColor: "red", textColor: "black" },
    gender: "masc",
    img:"set-matero-6.webp"
  },
  {
    option: "Yerbera",
    style: { backgroundColor: "green", textColor: "black" },
    gender: "fem",
    img:"yerbera.jpg"
  },
  {
    option: "Segui Participando",
    style: { backgroundColor: "white", textColor: "black", fontSize: "18"},
  },
  {
    option: "Set Matero",
    style: { backgroundColor: "red", textColor: "black" },
    gender: "masc",
    img:"set-matero-6.webp"
  },
  {
    option: "Yerbera",
    style: { backgroundColor: "green", textColor: "black"  },
    gender: "fem",
    img:"yerbera.jpg"
  },
  {
    option: "Segui Participando",
    style: { backgroundColor: "white", textColor: "black", fontSize: "18"},
  },
  {
    option: "Set Matero",
    style: { backgroundColor: "red", textColor: "black" },
    gender: "masc",
    img:"set-matero-6.webp"
  },
];

function LuckyWheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [spinCount, setSpinCount] = useState(0);
  const [showResult, setShowResult] = useState(false)

  const handleSpinClick = () => {
    if (spinCount === 2) {
        setMustSpin(false);
        alert("Solo puedes jugar 2 veces");
      }
    else {
        setShowResult(false)
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    }
  };

  const handleStop = () => {
    setSpinCount(spinCount + 1);
    setMustSpin(false);
    setShowResult(true);
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        onStopSpinning={handleStop}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        spinDuration={0.3}
        outerBorderWidth={3}
        innerRadius={10}
        radiusLineWidth={0}
        fontSize={20}
        textDistance={58}
      />
      <button className={"spin-button"} onClick={handleSpinClick}>
        GIRA!
      </button>

      <PrizeWindow data={data[prizeNumber]} showResult={showResult} setShowResult={setShowResult} />
    </>
  );
}

export default LuckyWheel;