import React from "react";

const SignUp = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        h-[44px]
        flex items-center justify-center gap-3
        rounded-lg
        bg-[#12141c]
        text-white
        text-sm
        font-medium
        transition
        hover:bg-[#0e1017]
      "
    >
      {/* Mail Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="3" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>

      <span>Sign up with Mail</span>
    </button>
  );
};

export default SignUp;
