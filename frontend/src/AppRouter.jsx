import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegistrationScreen from "./Screens/RegistrationScreen";
import VerificationScreen from "./Screens/VerificationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Landingpage from "./Screens/Landingpage"; // Import Landingpage

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Set Landingpage as the first page */}
        <Route path="/" element={<Landingpage />} />
        
        <Route path="/register" element={<RegistrationScreen />} />
        <Route path="/verify" element={<VerificationScreen />} />
        <Route path="/login" element={<LoginScreen />} />

        {/* Fallback to Landingpage or Registration */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}