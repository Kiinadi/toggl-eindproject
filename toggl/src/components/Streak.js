import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Calendar from "./Calendar";

export default () => (
  <Popup
    trigger={
      <div className="flame">
        <ion-icon name="flame-outline"></ion-icon>
      </div>
    }
    modal
    nested
  >
    {(close) => (
      <>
        <div className="calendar">
          <Calendar />
        </div>
      </>
    )}
  </Popup>
);
