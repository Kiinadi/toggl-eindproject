import React from 'react';
import profile from "../img/profile-pic.jpg";
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import "../styles/personpf.css";
import Streak from '../components/Streak';

const Emotes = [
{ label: "😄", value: 355 },
{ label: "😐", value: 54 },
{ label: "😟", value: 43 },
];


// Dark mode button
// const toggle = document.querySelector(".toggle");

// toggle.addEventListener("click", () => toggle.classList.toggle("active"));

const Personpf = () => {
return (
    
<div className="container-pf container-fluid h-100">
<Streak />
    <div className="profile-main">
        <div className="row min-vh-100 d-flex flex-column">
            <div className="col-xl-12 flame-container">
                <div className="title">
                    <h3 className="pf-title">Mijn profiel</h3>
                </div>
            </div>
            <div className="col-xl-12 pf-pic">
                <img src={profile}></img>
            </div>

            {/* EMOTES */}
            <div className="container-emotes container">
                <div className="row">
                    <div className="col-md-2 "></div>
                    <div className="col-md-6 emotes-block">
                        <Select isSearchable={false} options={Emotes} />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            {/* EMOTES END */}

            <div className="col-xl-12 flex-grow-1 overflow-auto menu">
                <h3 className="pf-subtitle">Welkom, Melissa</h3>
                <div className="list-container">
                    <ul className="list-group">
                        <a href="#">
                            <li className="list-group-item">
                                <ion-icon name="happy-outline"></ion-icon>Mood status
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </li>
                        </a>
                        <a href="#">
                            <li className="list-group-item">
                                <ion-icon name="share-social-outline"></ion-icon>My shared
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </li>
                        </a>
                        <a href="#">
                            <li className="list-group-item">
                                <ion-icon name="thumbs-up-outline"></ion-icon>Gekregen
                                complimenten
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </li>
                        </a>
                        <a href="#">
                            <li className="list-group-item">
                                <ion-icon name="settings-outline"></ion-icon>Instellingen
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </li>
                        </a>
                    </ul>
                    <div className="container-toggle">
                        <div className="toggle">Dark Mode</div>
                    </div>
                </div>
            </div>
        </div>
    </div><Navbar />
</div>

);
}

export default Personpf;