import logo from './logo.svg';
import './App.css';
import {Etapa1} from "./componentes"
import {Etapa2} from "./componentes"
import {Etapa3} from "./componentes"
import {Final} from "./componentes"

function App() {
  
  const state = {
    etapa: 1,
  }
  function renderizaEtapa(){
    switch(state){
      case 1:
      <Etapa1/>
      break;
      case 2:
      <Etapa2/>
      break;
      case 3: 
      <Etapa3/>
      break
      case 4:
      <Final/>
    } 


    return state
  }
  return (
    <div>
      {renderizaEtapa}
      <button>Próxima etapa</button>
    </div>
  );
}

export default App;
