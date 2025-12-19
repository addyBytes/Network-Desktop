export default function Button({
  label,
  disabled = false,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        py-3
        px-6
        h-[50px]
        text-sm
        font-medium
        transition-all
        duration-20
        flex
        items-center
        justify-start
        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-900 active:scale-[0.98]"
        }
      `}
    >
      {label}
    </button>
  );
}