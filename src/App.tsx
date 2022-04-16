import './App.css';
import Greet from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>The oscar goes to Leonardo DiCaprio</Heading>
      </Oscar>
      <Greet name='Vishwas' isLoggedIn={true} />
    </div>
  );
}

export default App;
