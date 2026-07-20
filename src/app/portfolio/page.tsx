export default function PortfolioPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-wide">
        <span className="text-viking-red">Portfolio</span>
      </h1>

      <p className="text-ink/80 mb-10 max-w-2xl font-medium">
        Our robotics builds, engineering documentation, and software systems
        developed for FIRST Robotics Competition.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="crest-panel rivets p-6 crest-shadow-red transition hover:-translate-y-1">
          <h2 className="font-display font-bold text-lg text-viking-red mb-2 tracking-wide">
            Robot Reveal
          </h2>
          <p className="text-ink/80 text-sm font-medium">
            Placeholder — add photos, specs, and a walkthrough of this
            season&apos;s robot here.
          </p>
        </div>

        <div className="crest-panel rivets p-6 crest-shadow-silver transition hover:-translate-y-1">
          <h2 className="font-display font-bold text-lg text-steel-dark mb-2 tracking-wide">
            Engineering Notebook
          </h2>
          <p className="text-ink/80 text-sm font-medium">
            Placeholder — link your team&apos;s engineering notebook or CAD
            portfolio here.
          </p>
        </div>

        <div className="crest-panel rivets p-6 crest-shadow-red transition hover:-translate-y-1">
          <h2 className="font-display font-bold text-lg text-viking-red mb-2 tracking-wide">
            Code / GitHub
          </h2>
          <p className="text-ink/80 text-sm font-medium">
            Placeholder —{" "}
            <a
              href="https://github.com"
              className="text-steel-dark hover:text-viking-red underline"
            >
              link your team&apos;s GitHub organization here
            </a>
            .
          </p>
        </div>

        <div className="crest-panel rivets p-6 crest-shadow-silver transition hover:-translate-y-1">
          <h2 className="font-display font-bold text-lg text-steel-dark mb-2 tracking-wide">
            Awards
          </h2>
          <p className="text-ink/80 text-sm font-medium">
            Placeholder — list competition awards and recognitions here as
            you earn them.
          </p>
        </div>
      </div>
    </div>
  );
}
