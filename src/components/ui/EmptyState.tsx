export default function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-[#151E2D]/50 p-8 text-center sm:p-12">
      <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-1 text-xs text-slate-400 sm:text-sm">{description}</p>
    </div>
  );
}
