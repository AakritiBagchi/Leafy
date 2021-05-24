import LifeBar from "./LifeBar";
import Plant from "./Plant";
import Propagate from "./Propagate";
import WateringCanImg from "./images/WateringCan.png";

function WateringCan(props) {
  let jazbel = 1;
  return (
    <div className="WateringCan">
      <div className="WateringCanCss">
        <h1>Click the watering can to see your plant grow!</h1>
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
