import lifebar0 from "./images/lifebar0.PNG";
import lifebar1 from "./images/lifebar1.PNG";
import lifebar2 from "./images/lifebar2.PNG";
import lifebar3 from "./images/lifebar3.PNG";
import lifebar4 from "./images/lifebar4.PNG";

function LifeBar(props) {
  let imageArray = [lifebar0, lifebar1, lifebar2, lifebar3, lifebar4];
  return (
    <div className="LifeBar">
      <img
        src={imageArray[props.lifeBar]}
        alt="pixelated life bar with 4 notches"
        width="350"
        height="200"
      />
      
    </div>
    // practice commit
  );
}

export default LifeBar;
