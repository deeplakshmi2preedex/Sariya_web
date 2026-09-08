export default function ServiceCard({
  title,
  items,
  side = "right",
  tone = "purple",
  reverse = false,
}) {
  const content = (
    <div className={`flex-1 ${toneClass(tone)} px-7 py-8 md:px-10 md:py-9`}>
      <h2 className="text-[22px] font-bold tracking-tight md:text-[25px]">
        {title}
      </h2>

      <div className={`mt-7 grid gap-x-10 gap-y-2 text-[11px] leading-5 text-neutral-100 ${
        items.length > 5 ? "grid-cols-2" : "grid-cols-1"
      }`}>
        {items.map((item) => (
          <div key={item} className="flex gap-2">
            <span>•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[10px] font-semibold text-black transition hover:scale-105"
      >
        Get Started
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );

  const image = (
    <div className="wave-image min-h-[225px] flex-1 md:min-h-[300px]" />
  );

  return (
    <article
      id={title === "The High-Performance Stack" ? "services" : undefined}
      className={`flex overflow-hidden rounded-2xl ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}
    >
      {side === "left" ? image : image}
      {content}
    </article>
  );
}

function toneClass(tone) {
  if (tone === "blue") return "service-blue";
  if (tone === "green") return "service-green";
  return "service-purple";
}
