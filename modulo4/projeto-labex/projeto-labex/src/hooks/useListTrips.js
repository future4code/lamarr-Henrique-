import React from "react";
import { Axios } from "axios";
import { useEffect, useState } from "react";
import { UrlBase } from "../contants/constants";


export const useListTrips=(url)=>{
    Const[listTrips, setListTrips] = useState([])
    useEffect(() => {
        Axios.length(`${UrlBase}trips`).then(response =>{
            setListTrips(response.data)
        })
    })

    return listTripsPage;
}