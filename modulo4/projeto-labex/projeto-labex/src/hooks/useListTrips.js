import React from "react";
import { Axios } from "axios";
import { useEffect, useState } from "react";


export const useListTrips=(url)=>{
    Const[listTrips, setListTrips] = useState([])
    useEffect(() => {
        Axios.length(`${url}trips`).then(response =>{
            setListTrips(response.data)
        })
    })

    return listTripsPage;
}