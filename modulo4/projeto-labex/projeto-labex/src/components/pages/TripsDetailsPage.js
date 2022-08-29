import CardTrip from "../../components/CardTrip/CardTrip";
import { UrlBase } from "../../contants/constants"
import { useProtectePage } from "../../hooks/useProtectePage";
import useRequestDataTrips from "../../hooks/useRequestDataTrips";
import * as S from "../../style"
import * as Rot from "../../Routers/Coordinator"
import {useNavigate} from "react-router-dom"


export function TripsDetailsPage(){
    useProtectePage()
    onbeforeunload = function() {
        localStorage.removeItem("token");
      };
    const navigate=useNavigate();

    
    const [data,isLoading]=useRequestDataTrips(`${UrlBase}darvas/trips`)

    console.log(data);
    const myTrips=data&&data.trips.map((trip)=>{
        return (
            <CardTrip key={trip.id} name={trip.name}  planet={trip.planet}  date={trip.date} description={trip.description} durationInDays={trip.durationInDays}/>
        )
    })

    return(
        <S.TPage>
            <S.MyButton onClick={()=>{Rot.goToBack(navigate)}}>Voltar</S.MyButton>
            <h1>Aplicações de viagens</h1>            
            {isLoading&&"Carregando!..."}
            {!isLoading&&data&&data.trips&&myTrips}
            {!isLoading&&data&&!data.trips&&"Ops! Algo deu errado!"}
            <S.MyButton onClick={()=>{Rot.goToBack(navigate)}}>Voltar</S.MyButton>
        </S.TPage>
        )
}