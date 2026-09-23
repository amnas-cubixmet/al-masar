export default function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#8A5CC7] sm:text-xs">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
