export default function PortfolioPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-wide">
        <span className="text-viking-red">Portfolio</span>
      </h1>

      <p className="text-ink/80 mb-10 max-w-2xl font-medium">
        not sure what else to put lol
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="crest-panel rivets p-6 crest-shadow-red transition hover:-translate-y-1">
          <h2 className="font-display font-bold text-lg text-viking-red mb-2 tracking-wide">
            Robot
          </h2>
          <p className="text-ink/80 text-sm font-medium">
            some stuff
          </p>
        </div>

        <div className="crest-panel rivets p-6 crest-shadow-silver transition hover:-translate-y-1">
          <h2 className="font-display font-bold text-lg text-steel-dark mb-2 tracking-wide">
            Engineering Notebook
          </h2>
          <p className="text-ink/80 text-sm font-medium">
            portfolio link
          </p>
        </div>

        <div className="crest-panel rivets p-6 crest-shadow-red transition hover:-translate-y-1">
          <h2 className="font-display font-bold text-lg text-viking-red mb-2 tracking-wide">
            Code / GitHub
          </h2>
          <p className="text-ink/80 text-sm font-medium">
            Code / github{" "}
            <a
              href="https://github.com/orgs/Skol-9073/dashboard"
              className="text-steel-dark hover:text-viking-red underline"
            >
            </a>
            .
          </p>
        </div>

        <div className="crest-panel rivets p-6 crest-shadow-silver transition hover:-translate-y-1">
          <h2 className="font-display font-bold text-lg text-steel-dark mb-2 tracking-wide">
            Awards
          </h2>
          <p className="text-ink/80 text-sm font-medium">
            awards
          </p>
        </div>
      </div>
    </div>
  );
}
