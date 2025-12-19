// src/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegistrationScreen from "./Screens/RegistrationScreen";
import VerificationScreen from "./Screens/VerificationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Landingpage from "./Screens/Landingpage";
import ForgotPassword from "./Screens/ForgotPassword"; //
import CreateNewPassword from "./Screens/CreateNewPassword"; //
import { Toaster } from "react-hot-toast";

export default function AppRouter() {
  return (
    <Router>
      <Toaster /> 
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<RegistrationScreen />} />
        <Route path="/verify" element={<VerificationScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-password" element={<CreateNewPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}