import logo from './logo.svg';
import './App.css';
import { OperacionesBasicas } from './mis_componentes/calculadora';
import {Home} from './mis_componentes/componenteHome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA MUNDO
        </p>
        <div>
          <OperacionesBasicas num1={10} num2={5} />
        </div>
        <div>
          <Home />
        </div>
      </header>
    </div>
  );
}
export default App;
