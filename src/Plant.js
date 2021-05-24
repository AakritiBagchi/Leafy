import plant0 from "./images/Seed.png";
import plant1 from "./images/plant1.PNG";
import plant2 from "./images/plant2.PNG";
import plant3 from "./images/plant3.PNG";

import "./Plant.css";
function Plant(props) {
  let imageArray = [plant0, plant1, plant2, plant3];
  let plantStages = ["Seed", "Sprouting", "Budding", "Flowering"];
  return (
    <div className="Plant">
      <img
        src={imageArray[props.plantAge]}
        alt="pixelated plants with 4 stages"
        width="200"
        height="170"
      />
      <div> Plant Age: {plantStages[props.plantAge]}</div>
    </div>
    // practice commit
  );
}

export default Plant;
