import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Share from "./Share";


export default () => (
  <Popup
    trigger={
      <div className="deel">
      <button className="sharebutton">Deel je huisdieren
        </button>
      </div>
    }
    modal
    nested
    >
    {(close) => (
      <>
        <div className="Share">
          <Share />
        </div>
      </>
    )}
    </Popup>
);
