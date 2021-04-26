import LifeBar from "./LifeBar";
import Plant from "./Plant";
import Propagate from "./Propagate";

function WateringCan(props) {
  let jazbel = 1;
  return (
    <div className="WateringCan">
      <h1>WateringCan page</h1>
      <LifeBar PropsLifeData={props.propsLifeData}/>
      <Plant />
      <Propagate />
    </div>
  );
}

export default WateringCan;
