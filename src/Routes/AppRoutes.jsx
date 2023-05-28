import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
