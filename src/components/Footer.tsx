import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-ink bg-steel-dark text-parchment relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-30 mix-blend-overlay" />
      <div className="max-w-6xl mx-auto px-6 py-8 text-center relative">
        <p className="text-sm font-semibold tracking-wide">
          © {new Date().getFullYear()} Skol Robotics | Fayette Academy | FRC
          Team #9073
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-accent tracking-wide">
          <Link href="/blog" className="hover:text-viking-red transition-colors">
            Blog
          </Link>
          <Link href="/portfolio" className="hover:text-viking-red transition-colors">
            Portfolio
          </Link>
          <Link href="/socials" className="hover:text-viking-red transition-colors">
            Socials
          </Link>
          <Link href="/contact" className="hover:text-viking-red transition-colors">
            Contact
          </Link>
        </div>

        <p className="mt-4 text-xs text-parchment/60">
          Built with Next.js + Vercel
        </p>
      </div>
    </footer>
  );
}
