import React from 'react';
import * as S from "../../style"
import * as Rot from "../../Routers/Coordinator"
import {useNavigate} from "react-router-dom"





export function AdminHomePage(){
    const navigate=useNavigate()
    return(
        <S.TPage>
      <h1>LabeX</h1>
      <S.MyButton onClick={()=>{Rot.goToTripsPage(navigate)}}>Minhas Viagens</S.MyButton>
      <S.MyButton onClick={()=>{Rot.goToNewTripPage(navigate)}}>Adicionar Viagens</S.MyButton>
      <S.MyButton onClick={()=>{Rot.goToLoginPage(navigate)}}>Trocar de Usuário</S.MyButton>
    </S.TPage>
        )
}