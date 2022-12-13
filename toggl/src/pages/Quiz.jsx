import Navbar from "../components/Navbar";
import "../styles/main.css";
import Streak from "../components/Streak";
import Quiz1 from "../components/QuizComponent1";
import Quiz2 from "../components/QuizComponent2";
import Quiz3 from "../components/QuizComponent3";
import "../styles/calendar.css";
import "../styles/streak.css";
import "../styles/quiz.css";


function Quiz() {

  return (
    <>
    <div className="quizz">
    <h1>Quiz</h1>
    <Streak />
    <Quiz1 />
    <Quiz2 />
    <Quiz3 />
    <Navbar />
    </div>
    </>
  );
}

export default Quiz;
