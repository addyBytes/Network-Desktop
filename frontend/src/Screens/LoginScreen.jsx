import { useState } from "react";
import PlaceHolder from "../components/PlaceHolder";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBF9F1] px-4">
      <div className="w-full max-w-[348px] flex flex-col items-center">
        
        {/* Header matches Figma styling */}
        <h1 className="text-[40px] font-serif text-[#12141c] mb-2">Login</h1>
        <p className="text-[#6b7280] text-center text-sm leading-relaxed mb-10">
          Login to see what is out there waiting for you on the network and help you.
        </p>

        <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
          <PlaceHolder
            label="Email"
            name="email"
            type="email"
            placeholder="Placeholder text..."
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
              onClick={() => console.log("Login clicked")}
            />
          </div>

          <div className="text-center mt-6">
            <button 
              type="button"
              className="text-sm text-gray-400 hover:text-gray-600 font-medium"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}