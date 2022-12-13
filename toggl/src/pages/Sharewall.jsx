import React, { useState, useEffect } from 'react'
// import Share from "../components/Share"
import { collection, query, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import Masonry from 'react-masonry-css'
// import Extrainfo from '../components/Extrainfo'
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import PopUp from "../components/Pop";
import "../styles/sharewall.css";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const Sharewall = () => {
  const [fotos, setFotos] = useState([]);
  

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2
  };
/* Een manier om de data uit de database te halen*/
  useEffect(() => {
    const q = query(collection(db, "fotoShares"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setFotos("")
      const results = []
      querySnapshot.forEach((doc) => {
        results.push(doc.data())
        setFotos(results)
      }); return unsubscribe  
    })
  }, []);



  return (
    <div>
      {/* <!--HEADER--> */}
    <h4 className='sharetitle'>Sharing wall</h4>


    {/* <!--KNOP VOOR HUISDIER TOEVOEGEN--> */}
    <PopUp />

        
    {/* <!-- LINK VOOR DE VOLGENDE WEEK --> */}
    <Link className='week' to="/Quiz"> Zie het thema van de volgende week</Link>
    {/* <!-- GRID --> */}
      {/* // <Share className="Share"/> */}
      
      {/* <Comp /> */}

      <div>
 {/*Data uit database op pagina zetten. */}
{/* Masonry is een react component voor de grid layout */}
 <Masonry
  breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
        {fotos.map((foto) => (
          <div className='fotoShare' key={foto}>
            {/* <h1>{foto.titel}</h1>
            <p>{foto.inhoud}</p> */}
            <img className='fotoShare' src={foto.photoURL} alt="" />
          </div>
        ))}
        </Masonry>
      </div>
      <Navbar />
    </div >
  )
}

export default Sharewall