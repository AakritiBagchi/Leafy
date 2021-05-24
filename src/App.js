import "./styles.css";
import WateringCan from "./WateringCan";
import WateringCanImg from "./images/WateringCan.png";
import SeedImg from "./images/Seed.png";
import { useState } from "react";
import theSun from "./images/thesun.png";

export default function App() {
  const [bar, setBar] = useState(0);
  const [currentPlantAge, setPlantDay] = useState(0);
  const [showPropagate, setShowPropagate] = useState(false);
  function grow() {
    if (bar === 4) {
      let newPlantAge = currentPlantAge + 1;
      setPlantDay(newPlantAge);
      if (newPlantAge === 3) {
        setShowPropagate(true);
      }
      setBar(0);
    } else {
      setBar(bar + 1);
    }
  }
  function reset() {
    setBar(0);
    setPlantDay(0);
    setShowPropagate(false);
  }

  return (
    <div className="App">
      <div className="LeafyTitle">
        <img
          src={theSun}
          alt="pixelated image of a sun"
          width="200"
          height="200"
        />
        <h1>Leafy</h1>
      </div>
      <WateringCan propsLifeData={bar} currentPlantAge={currentPlantAge} />
      {!showPropagate && (
        <img
          src={WateringCanImg}
          onClick={() => grow()}
          alt="pixelated watering can"
          width="100"
          height="100"
        />
      )}
      {showPropagate && (
        <img
          src={SeedImg}
          onClick={() => reset()}
          alt="pixelated image of seed"
          width="100"
          height="100"
        />
      )}
    </div>
    // practice commit
  );
}
