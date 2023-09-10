import './App.css';
import Copyrights from './Components/Copyrights/Copyrights';
import Game from './Game/Game';

function App() {
  return (
    <div className="App">
      <h1>Gaming Website</h1>
      <p>Welcome to our games website!</p>

      <Game />

      <Copyrights />

    </div>
  );
}

export default App;
