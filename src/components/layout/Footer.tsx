"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B111C] py-6 sm:py-8 text-slate-400">
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <span className="text-sm font-bold tracking-tight text-white sm:text-base">
              AL MASAR YELLOW
            </span>
            <span className="mx-2 hidden text-slate-600 sm:inline">·</span>
            <p className="mt-0.5 text-xs text-slate-400 sm:mt-0 sm:inline">
              Electrical materials supply across Saudi Arabia
            </p>
          </div>

          <div className="text-xs text-slate-500">
            © {currentYear} AL MASAR YELLOW. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
