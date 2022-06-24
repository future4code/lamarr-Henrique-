import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import perfil from './img/perfil.jpeg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil} 
          nome="Henrique" 
          descricao="Oi, eu sou o Henrique. Sou supervisor técnico de um provedor de internet, sou responsável pela equipe que atua na instalação e manutenção de toda a cidade."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          email='henrique@labenu.com.br'
          endereco='Ilhabela-SP'
        />

      
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={perfil}
          nome="Provedor de internet" 
          descricao="supervisor técnico." 
        />
        
        <CardGrande 
          imagem={perfil}
          nome="Provedor de internet" 
          descricao="Técnico de fibra optica." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
