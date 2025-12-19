import Title from "../components/Title";
import SignUp from "../components/SignUp";
import Gmail from "../components/Gmail";
import Bottomtext from "../components/Bottomtext";

export default function Landingpage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
      <div className="w-[500px] text-center space-y-6">
        
        {/* Title */}
        <Title
          align="center"
          title="Test, Learn and Improve your Teaching Skills"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum."
        />

        {/* Sign up with Mail */}
        <SignUp
          label="Sign up with Mail"
          onClick={() => console.log("Sign up with mail")}
        />

        {/* Continue with Gmail */}
        <Gmail
          label="Continue with Gmail"
          onClick={() => console.log("Continue with Gmail")}
        />

        {/* Login text */}
        <Bottomtext
          text={
            <>
              Already have an account?{" "}
              <span className="font-medium text-black">Log in →</span>
            </>
          }
          onClick={() => console.log("Go to login")}
        />

      </div>
    </div>
  );
}
