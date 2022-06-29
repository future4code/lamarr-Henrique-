import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
     <div>
        <div className='MainContainer'>
           <Post
            nomeUsuario={'Paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </div>

        <div className='MainContainer'>
           <Post
            nomeUsuario={'Jorge'}
            fotoUsuario={'https://picsum.photos/50/51'}
            fotoPost={'https://picsum.photos/200/151'}
          />
        </div>

        <div className='MainContainer'>
           <Post
            nomeUsuario={'Beto'}
            fotoUsuario={'https://picsum.photos/50/52'}
            fotoPost={'https://picsum.photos/200/153'}
          />
        </div>
     </div>
)

}


export default App;
