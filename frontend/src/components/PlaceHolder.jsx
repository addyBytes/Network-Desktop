export default function PlaceHolder({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="w-full space-y-0.5"> {/* Changed from space-y-1 to space-y-0.5 for a smaller gap */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
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
          text-lg
          placeholder-gray-400
          shadow-sm
        "
      />
    </div>
  );
}