import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/history", label: "Team History" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Resources" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/socials", label: "Socials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-ink bg-parchment/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-6 p-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.webp"
            alt="Skol Robotics viking-helmet robot mascot"
            width={44}
            height={44}
            className="rounded-full border-2 border-ink"
            priority
          />
          <span className="font-display font-semibold text-lg sm:text-xl leading-none tracking-wide">
            <span className="text-viking-red">SKOL</span>{" "}
            <span className="text-steel-dark">ROBOTICS</span>
          </span>
        </Link>

        <div className="flex flex-wrap gap-x-1 gap-y-1 text-sm font-accent tracking-wide justify-end">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-md border-2 border-transparent hover:border-ink hover:bg-viking-red/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
