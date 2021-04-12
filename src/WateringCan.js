import LifeBar from "./LifeBar";
import Plant from "./Plant";
import Propagate from "./Propagate";

function WateringCan(){
  return (
    <div className="WateringCan">
      <h1>WateringCan page</h1>
      <LifeBar/>
      <Plant/>
      <Propagate/>
    </div>
    // practice commit
  );
}

export default WateringCan;