import { useState } from "react";

/* Eye Icons */
const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12" />
    <path d="M9.88 9.88A3 3 0 0114.12 14.12" />
    <path d="M1 1l22 22" />
  </svg>
);

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
  name,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full space-y-1">
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      {/* Input Wrapper */}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
            w-full
            bg-white
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            pr-12
            text-lg
            text-gray-900
            placeholder-gray-400
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-black/10
          "
        />

        {/* Show / Hide Button */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            hover:text-gray-600
          "
        >
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
    </div>
  );
}
