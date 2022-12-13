import Music from "../img/music.png";


export default function QuizComponent1() {
  return (
    <div className="theme">
      <h2>Thema week 1</h2>
      <h3>Favoriete muziek</h3>
      <button className="speel">Voltooid</button>
      <img className="fofo" src={Music} alt=""></img>
    </div>
  )
}

