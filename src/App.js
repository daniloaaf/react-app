import Header from './components/Header';
import './App.css';

function App() {
  const dados = {
    nome: "Danilo",
    empresa: "Fiap",
    site:"https://www.avanade.com/pt-br",
    classname:"App-link",
  };
  return (
    //JSX - JavaScript Extensible
    <div className="App">

      <Header title="Bem Vindo! Bom almoço!" options={dados}/>
    </div>

  );
}

export default App;
