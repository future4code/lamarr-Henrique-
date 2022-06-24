import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
   return(
    <div>
        <div className='CardPequeno-container'>
            <h4>Email: </h4> 
            <p>{props.email}</p>
        </div>
        
        <div className='CardPequeno-container'>
            <h4>Endereço: </h4>
            <p>{props.endereco}</p>
        </div>
          
    </div>

    
   )

}


export default CardPequeno