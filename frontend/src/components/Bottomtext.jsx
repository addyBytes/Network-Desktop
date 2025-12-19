export default function Bottomtext({ text, onClick }) {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="text-sm text-gray-500 hover:text-black transition"
      >
        {text}
      </button>
    </div>
  );
}
