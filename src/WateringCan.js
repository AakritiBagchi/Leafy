import LifeBar from "./LifeBar";
import Plant from "./Plant";
import Propagate from "./Propagate";
import WateringCanImg from "./images/WateringCan.png";

function WateringCan(props) {
  let jazbel = 1;
  return (
    <div className="WateringCan">
      <div className="WateringCanCss">
        <h1>WateringCan page</h1>
        <img src={WateringCanImg} alt="Watering Can" width="100" height="100" />
      </div>

      <div className="LifeBarCss">
        <LifeBar lifeBar={props.propsLifeData} />
      </div>

      <div className="PlantAgeCss">
        <Plant plantAge={props.currentPlantAge} />
      </div>

      <div className="PropagateCss">
        <Propagate />
      </div>
    </div>
  );
}

export default WateringCan;
