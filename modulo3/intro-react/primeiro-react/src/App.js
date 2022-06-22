import perfil from './img/perfil.jpg';
import './App.css';

function App() {
  function mensagem(){
    alert("Boa noite!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Olá! Eu sou Henrique!
        </h1>
        <img src={perfil} className="App-perfil" alt="perfil" />

        <p>
          Este é o meu primeiro site React.
        </p>
        
        <button className="cliqueAqui" onClick={mensagem}>Clique aqui</button>
      </header>
    </div>
  );
}

export default App;
