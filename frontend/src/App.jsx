import { useState } from "react";
import "./App.css";

import PlaceHolder from "./components/PlaceHolder";
<<<<<<< Updated upstream
=======
import Button from "./components/Button";
import Title from "./components/Title";
>>>>>>> Stashed changes

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7]">
<<<<<<< Updated upstream
      <div className="w-[348px]">
=======
      <div className="w-[500px] space-y-4">

        <Title
        align="center"
  title="Test, Learn and Improve your Teaching Skills"
  subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
/>


>>>>>>> Stashed changes
        <PlaceHolder
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
      </div>
    </div>
  );
}

export default App;
