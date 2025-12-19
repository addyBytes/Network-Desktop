import { useState } from "react";

import Title from "../components/Title";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import Bottomtext from "../components/Bottomtext";

export default function CreateNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const canSubmit =
    password &&
    confirmPassword &&
    password === confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
      <div className="w-[360px] space-y-5">
        
        {/* Title */}
        <Title
  align="center"
  title="Create New Password"
  singleLine
  subtitle="Your new password must be different from previously used passwords"
/>

        {/* New Password */}
        <PasswordInput
          label="New Password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password */}
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Reset Button */}
        <Button
          label="Reset Password"
          disabled={!canSubmit}
          onClick={() => console.log("Password reset")}
        />

        {/* Back to login */}
        <Bottomtext
          text={
            <>
              Back to{" "}
              <span className="font-semibold text-black">Login →</span>
            </>
          }
          onClick={() => console.log("Go to Login")}
        />

      </div>
    </div>
  );
}
