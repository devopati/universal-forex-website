import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Register from "../pages/Register";
import Login from "../pages/login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Dashboard/Home/Home";
import DepositFunds from "../pages/Dashboard/Deposits/DepositFunds";
import ViewDeposits from "../pages/Dashboard/Deposits/ViewDeposits";
import ViewWithdrawals from "../pages/Dashboard/Withdrawals/ViewWithdrawals";
import WithdrawFunds from "../pages/Dashboard/Withdrawals/WithdrawFunds";
import Earnings from "../pages/Dashboard/Earnings/Earnings";
import Referrals from "../pages/Dashboard/Referrals/Referrals";
import Help from "../pages/Dashboard/Help/Help";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="depositfunds" element={<DepositFunds />} />
        <Route path="viewdeposits" element={<ViewDeposits />} />
        <Route path="withdrawFunds" element={<WithdrawFunds />} />
        <Route path="viewwithdraws" element={<ViewWithdrawals />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="referrals" element={<Referrals />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
