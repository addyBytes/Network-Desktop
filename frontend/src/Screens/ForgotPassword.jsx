import { useState } from "react";

import Title from "../components/Title";
import PlaceHolder from "../components/PlaceHolder";
import Button from "../components/Button";
import Bottomtext from "../components/Bottomtext";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const canSubmit = email;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
      <div className="w-[360px] space-y-5">
        
        {/* Title */}
        <Title
          align="center"
          title="Forgot Password"
          subtitle="Enter your registered email address and we’ll send you a reset link"
        />

        {/* Email input */}
        <PlaceHolder
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Submit button */}
        <Button
          label="Send Reset Link"
          disabled={!canSubmit}
          onClick={() => console.log("Send reset link")}
        />

        {/* Back to login */}
        <Bottomtext
          text={
            <>
              Remembered your password?{" "}
              <span className="font-semibold text-black">Login →</span>
            </>
          }
          onClick={() => console.log("Go to Login")}
        />

      </div>
    </div>
  );
}
