import { useState } from "react";
import "./App.css";
import PlaceHolder from "./src/components/PlaceHolder";
import Button from "./src/components/Button";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
      <div className="w-[348px]">
        <PlaceHolder
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <Button
          label={email ? "Continue" : "Next"}
          disabled={!email}
          onClick={() => alert("Submitted")}
        />


      </div>
    </div>
    
  );
}

export default App;
