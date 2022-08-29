import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../Routers/Coordinator";
import * as S from "../../style"
import * as Rot from "../../Routers/Coordinator"


export function HomePage(){

const navigate = useNavigate()

    return(
        <S.TPage>
            <h1>LabeX</h1>
            <S.MyButton onClick={()=>{Rot.goToListTripsPage(navigate)}}>Ver Viagens</S.MyButton>
            <S.MyButton onClick={()=>{Rot.goToLoginPage(navigate)}}>Área de Admin</S.MyButton>
        </S.TPage>
        )
}