import './App.css';
import { LoggedIn } from './state/LoggedIn';

function App() {
  return (
    <div className="App">
      <h1>Utilizando useState para mudar o estado de um componente</h1>
      <LoggedIn/>
    </div>
  );
}

export default App;
