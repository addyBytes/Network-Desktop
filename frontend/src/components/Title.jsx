export default function Title({
  title,
  subtitle,
  align = "center",
}) {
  return (
    <div className={`text-${align}`}>
      <h1 className="font-instrument text-[42px] md:text-[56px] leading-tight ">
        {title}
      </h1>

      {subtitle && (
        <p className="font-jakarta text-gray-500 mt-3 text-[16px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
