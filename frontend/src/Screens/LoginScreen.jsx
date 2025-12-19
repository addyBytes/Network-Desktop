// src/Screens/LoginScreen.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toast";

import Title from "../components/Title";
import PlaceHolder from "../components/PlaceHolder";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import "../App.css";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    showToast.login();
    console.log("User logged in!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBF9F1] px-4">
      <div className="w-full max-w-[348px] flex flex-col items-center">
        
        <Title
          title="Login"
          subtitle="Login to see what is out there waiting for you on the network and help you."
          align="center"
        />

        <form className="w-full space-y-5 mt-10" onSubmit={(e) => e.preventDefault()}>
          <PlaceHolder
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="• • • • • • • • • • • •"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="pt-2">
            <Button
              label="Next"
              type="submit"
              disabled={!isFormValid}
              onClick={handleLogin}
            />
          </div>

          <div className="text-center mt-6">
            <button 
              type="button"
              className="text-sm text-gray-400 hover:text-gray-600 font-medium"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}