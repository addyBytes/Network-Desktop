export default function Title({ title, subtitle, align = "center", singleLine = false }) {
  return (
    <div className={`text-${align}`}>
      <h1
        className={`
          font-instrument
          text-[36px]
          leading-tight
          ${singleLine ? "whitespace-nowrap" : ""}
        `}
      >
        {title}
      </h1>

      {subtitle && (
        <p className="font-jakarta text-gray-500 mt-3 text-[14px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}