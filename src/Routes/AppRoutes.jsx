import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Register from "../pages/Register";
import Login from "../pages/login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Dashboard/Home/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
