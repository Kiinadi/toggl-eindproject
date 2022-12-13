import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

function PopUpCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="app">
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} selectRange={true} />
        </div>
      </div>
      <div className="container-fluid streak-container">
        <div className="row">
          <div className="col item-1">
            <ion-icon name="flame-outline"></ion-icon>
          </div>
          <div className="col item-2">12 dagen</div>
          <div className="col item-3">
            Best<br></br>Streak
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpCalendar;
