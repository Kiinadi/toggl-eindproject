import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Share from './pages/Sharewall';
import Quiz from './pages/Quiz';
import Personp from './pages/Personpf';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={ 
          <Lobby />
          }/>
          <Route path="/Sharewall" element = {
            <Share />
          }/>
          <Route path="/" element = {
            <Lobby />
          }/>
          <Route path="/Personp" element = {
            <Personp />
          }/>
          <Route path="/Quiz" element = {
            <Quiz />
          }/>
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
