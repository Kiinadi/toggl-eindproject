import Food from "../img/food.png";


export default function QuizComponent3() {
  return (
    <div className="theme">
      <h2>Thema week 3</h2>
      <h3>Favoriete eten</h3>
      <button className="speel">Gesloten</button>
      <img className="fofo" src={Food} alt=""></img>
    </div>
  )
}

