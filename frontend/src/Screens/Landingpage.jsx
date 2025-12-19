import Title from "../components/Title";
import SignUp from "../components/SignUp";
import Gmail from "../components/Gmail";
import Bottomtext from "../components/Bottomtext";
import { useNavigate } from "react-router-dom"; 

export default function Landingpage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
      {/* Reduced width from 500px to 380px and added items-center */}
      <div className="w-full max-w-[500px] text-center space-y-6 flex flex-col items-center px-4">
        
        <Title
          align="center"
          title="Test, Learn and Improve your Teaching Skills"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />

        {/* This wrapper ensures the buttons respect the new container width */}
        <div className="w-full space-y-4">
          <SignUp
            label="Sign up with Mail"
            onClick={() => navigate("/register")}
          />

          <Gmail
            label="Continue with Gmail"
            onClick={() => navigate("/register")}
          />
        </div>

        <Bottomtext
          text={
            <>
              Already have an account?{" "}
              <span className="font-medium text-black">Log in →</span>
            </>
          }
          onClick={() => navigate("/login")}
        />

      </div>
    </div>
  );
}