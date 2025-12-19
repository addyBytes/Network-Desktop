// src/utils/toast.js
import toast from "react-hot-toast";

const toastConfig = {
  duration: 4000,
  position: "top-center",
  // Styling to match your application theme
  style: {
    background: "#FFFDF7", // Matches your bg-[#FFFDF7]
    color: "#12141c",      // Matches your button/text colors
    fontFamily: "'Plus Jakarta Sans', sans-serif", // Matches your font-jakarta
    borderRadius: "12px",  // Matches your rounded-xl
    border: "1px solid #e5e7eb", // Subtle gray-200 border
    fontSize: "14px",
    fontWeight: "500",
    padding: "12px 24px",
  },
  success: {
    iconTheme: {
      primary: "#12141c", // Black icon to match your brand
      secondary: "#FFFDF7",
    },
  },
};

export const showToast = {
  registration: () => 
    toast.success("Account created! Please verify your email.", toastConfig),
  
  verification: () => 
    toast.success("Email verified successfully! You can now login.", toastConfig),
  
  login: () => 
    toast.success("Welcome back! Logging you in...", toastConfig),
    
  error: (message) => 
    toast.error(message || "Something went wrong.", toastConfig),
};