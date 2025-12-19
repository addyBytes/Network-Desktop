import { useState } from "react";

import Title from "../components/Title";
import PlaceHolder from "../components/PlaceHolder";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import Bottomtext from "../components/Bottomtext";

export default function RegistrationScreen() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const canSubmit = email && mobile && password;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
      <div className="w-[360px] space-y-5">
        
        {/* Title */}
        <Title
          align="center"
          title="Register"
          subtitle="We have sent a 4 digit code in your email, enter it to verify your email"
        />

        {/* Email */}
        <PlaceHolder
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Mobile Number */}
        <PlaceHolder
          label="Mobile No."
          name="mobile"
          type="tel"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        {/* Password */}
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Continue Button */}
        <Button
          label="Continue"
          disabled={!canSubmit}
          onClick={() => console.log("Register submit")}
        />

        {/* Forgot Password */}
        <Bottomtext
          text="Forgot Password?"
          onClick={() => console.log("Forgot password")}
        />

      </div>
    </div>
  );
}
