import "./styles.css";
import WateringCan from "./WateringCan";
import DataModel from "./DataModel.json";
import { useState } from "react";

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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <WateringCan propsLifeData={bar} currentPlantAge={currentPlantAge} />
      <button onClick={() => grow()}>watering</button>
      {showPropagate && <button onClick={() => reset()}>propagate</button>}
    </div>
    // practice commit
  );
}
