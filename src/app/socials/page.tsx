const platforms = [
  { name: "Instagram", handle: "@skolrobotics9073", href: "#" },
  { name: "X / Twitter", handle: "@skolrobotics9073", href: "#" },
  { name: "YouTube", handle: "Skol Robotics 9073", href: "#" },
  { name: "TikTok", handle: "@skolrobotics9073", href: "#" },
];

export default function SocialsPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-wide">
        <span className="text-viking-red">Socials</span>
      </h1>

      <p className="text-ink/80 max-w-2xl mb-10 font-medium">
        Follow along with build season, competition days, and team life.
        <span className="text-ink/50">
          {" "}
          (Placeholder handles below — swap in your real accounts.)
        </span>
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {platforms.map((p, i) => (
          <a key={p.name} href={p.href}>
            <div
              className={`crest-panel rivets p-6 transition hover:-translate-y-1 ${
                i % 2 === 0 ? "crest-shadow-red" : "crest-shadow-silver"
              }`}
            >
              <h2 className="font-display font-bold text-lg text-ink mb-1 tracking-wide">
                {p.name}
              </h2>
              <p className="text-steel-dark text-sm font-medium">
                {p.handle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
