import React from 'react';
import * as S from "../../style"



export default function CardTrip({name,planet,date,description,durationInDays}) {
 return (
   <S.Trip>
      <h1>{name||"Indefinido"}</h1>
      <S.InfoTrip>
        <p>Destino: {planet||"Indefinido"}</p>
        <p>Data: {date||"Indefinido"}</p>
        <p>Descrição: {description||"Indefinido"}</p>
        <p>Duração: {durationInDays||"Indefinido"}</p>
      </S.InfoTrip>
   </S.Trip>
 );
}