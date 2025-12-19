// src/Screens/ForgotPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/toast";

import Title from "../components/Title";
import PlaceHolder from "../components/PlaceHolder";
import Button from "../components/Button";
import Bottomtext from "../components/Bottomtext";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const canSubmit = email.trim() !== "";

  const handleSendLink = () => {
    console.log("Send reset link to:", email);
    // Navigate to create password screen after "sending" the link
    navigate("/create-password");
    showToast.email();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
      <div className="w-[360px] space-y-5">
        
        <Title
          align="center"
          title="Forgot Password"
          subtitle="Enter your registered email address and we’ll send you a reset link"
        />

        <PlaceHolder
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          label="Send Reset Link"
          disabled={!canSubmit}
          onClick={handleSendLink}
        />

        <Bottomtext
          text={
            <>
              Remembered your password?{" "}
              <span className="font-semibold text-black">Login →</span>
            </>
          }
          onClick={() => navigate("/login")}
        />

      </div>
    </div>
  );
}