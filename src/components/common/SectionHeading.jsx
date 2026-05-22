export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment =
    align === 'center'
      ? 'mx-auto items-center text-center'
      : 'items-start text-left';

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="gold-label">{eyebrow}</span> : null}
      <div className="space-y-3">
        <h2 className="font-display text-4xl font-medium italic leading-tight text-mocha sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-sm leading-7 text-stonewash sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
