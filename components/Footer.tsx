import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy-950 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 text-[12px] text-paper/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono uppercase tracking-widest">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
