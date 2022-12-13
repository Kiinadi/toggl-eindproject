import { useState } from "react"
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "../components/ChildComponent";
import Navbar from "../components/Navbar";
import {data} from "../data";
import Streak from "../components/Streak";
import "../styles/main.css";
import "../styles/lobby.css";
import "../styles/calendar.css";
import "../styles/streak.css";
import { Link } from "react-router-dom";

// // Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

// import("https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js");


export default function Lobby() {
  const [bubble, setBubble] = useState("");
  const [img, setImg] = useState("");



  const options = {
    size: 80,
    minSize: 40,
    gutter: 18,
    provideProps: true,
    numCols: 5,
    fringeWidth: 100,
    yRadius: 400,
    xRadius: 200,
    cornerRadius: 500,
    showGuides: false,
    compact: true,
    gravitation: 5
  };

  const handleClick = (bub) => {
    setBubble(bub.name);
    setImg(bub.avatar);
  };

  const closePopup = () => {
    setBubble("");
  }

  const popupComponent = () => {
    if (bubble) {
      return(
        
        <div className="popUp">
          <h2>{bubble}'s profiel</h2>
          <img src={img} alt="user"></img>
          <button className="close" onClick={closePopup}>X</button>
          <Link to ="/Sharewall"className="optie">Share van de week</Link>
          <a className="optie" href="#">Geef compliment</a>
        </div>
  
      )
    } else {
      return null;
    }
  }

  const children = data.map((data, i) => {
    return <Child data={data} key={i} setClick={handleClick} />;
  });

  


  return (
    <>
      <Streak />
      <BubbleUI options={options} className="myBubbleUI">
        {children}
      </BubbleUI>
      {popupComponent({data})}
      <h1>Lobby</h1>
      {bubble}
      <Navbar />
    </>
  );
  
}

