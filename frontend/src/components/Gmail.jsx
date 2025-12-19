import GoogleIcon from "./GoogleIcon";

export default function Gmail({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full h-[44px] flex items-center justify-center gap-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition"
    >
      <GoogleIcon size={18} />
      {label}
    </button>
  );
}
