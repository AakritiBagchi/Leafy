import "./styles.css";
import WateringCan from "./WateringCan";
import DataModel from "./DataModel.json";

let jazbel = "name";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <WateringCan propsLifeData={DataModel["CurrentLifeBar"]}/>
    </div>
    // practice commit
  );
}
