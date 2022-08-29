import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { CreateTripPage } from "../components/pages/CreateTripPage";
import { TripsDetailsPage } from "../components/pages/TripsDetailsPage";
import { AdminHomePage } from "../components/pages/AdminHomePage";
import {LoginPage } from "../components/pages/LoginPage";
import { HomePage } from "../components/pages/HomePage";





const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin" element={<AdminHomePage/>}/>
                <Route path="/admin/newtrip" element={<CreateTripPage/>}/>
                <Route path="/admin/trips" element={<TripsDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
 export default Rotas;