import { useState } from "react";
import Title from "../components/Title";
import PlaceHolder from "../components/PlaceHolder";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function VerificationScreen() {
  const [code, setCode] = useState("");
    const navigate = useNavigate();


  // Validation: typical OTP is 4-6 digits
  const isFormValid = code.trim().length >= 4;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBF9F1]">
      <div className="w-full max-w-[348px] flex flex-col items-center">
        
        {/* Title and Subtitle as seen in Figma */}
        <Title
          align="center"
          title="Enter Code"
          subtitle="We have sent a 4digit code in your email, enter it to verify your email"
        />

        <form className="w-full mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Reusing PlaceHolder for the code input */}
          <PlaceHolder
            label="Enter Code"
            name="code"
            type="text"
            placeholder="• • • • • • • • • •"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <div className="pt-2">
            <Button
              label="Continue"
              type="submit"
              disabled={!isFormValid}
              onClick={() => navigate("/login")}
            />
          </div>

          {/* Footer Link */}
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