import lifeImg from "./images/lifebarstage0.PNG";

function LifeBar(props) {
  return (
    <div className="LifeBar">
      <h1>Lifebar page</h1>
      <img
        src={lifeImg}
        alt="pixelated life bar with 4 notches"
        width="250"
        height="100"
      />
      <div>Life Bar: {props.lifeBar}</div>
    </div>
    // practice commit
  );
}

export default LifeBar;
