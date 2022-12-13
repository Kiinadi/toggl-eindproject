import React from "react";
import {Link} from "react-router-dom";


export default function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-main-btn">
          <Link to ="/">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </Link>
        </div>
        <div className="menu-main">
          <ul>
            <li>
              <Link to ="/">
                <ion-icon name="home-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to ="/Sharewall">
                <ion-icon name="share-social-outline"></ion-icon>
              </Link>
            </li>
            <li></li>
            <li>
              <Link to ="/Quiz">
                <ion-icon name="thumbs-up-outline"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to = "/Personp">
                <ion-icon name="person-outline"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
