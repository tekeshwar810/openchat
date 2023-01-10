import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "../Components/Chat";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

const RoutesList = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </>
    )
}

export default RoutesList;