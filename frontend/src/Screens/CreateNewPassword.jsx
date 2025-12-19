// src/Screens/CreateNewPassword.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Title from "../components/Title";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import Bottomtext from "../components/Bottomtext";

export default function CreateNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const canSubmit =
    password &&
    confirmPassword &&
    password === confirmPassword;

  const handleReset = () => {
    console.log("Password reset success");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
      <div className="w-[360px] space-y-5">
        
        <Title
          align="center"
          title="Create New Password"
          singleLine
          subtitle="Your new password must be different from previously used passwords"
        />

        <PasswordInput
          label="New Password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          label="Reset Password"
          disabled={!canSubmit}
          onClick={handleReset}
        />

        <Bottomtext
          text={
            <>
              Back to{" "}
              <span className="font-semibold text-black">Login →</span>
            </>
          }
          onClick={() => navigate("/login")}
        />

      </div>
    </div>
  );
}