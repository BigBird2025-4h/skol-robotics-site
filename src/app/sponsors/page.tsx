export default function SponsorsPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-wide">
        <span className="text-steel-dark">Sponsors</span>
      </h1>

      <p className="text-ink/80 max-w-2xl mb-10 font-medium">
        Skol Robotics is proudly supported by our sponsors. 
      </p>

      {/* Sponsor Grid — placeholder tiles */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="crest-panel rivets p-6 flex items-center justify-center text-ink/50 font-semibold hover:-translate-y-1 transition crest-shadow-silver">
          Sponsor Logo
        </div>
        <div className="crest-panel rivets p-6 flex items-center justify-center text-ink/50 font-semibold hover:-translate-y-1 transition crest-shadow-red">
          Sponsor Logo
        </div>
        <div className="crest-panel rivets p-6 flex items-center justify-center text-ink/50 font-semibold hover:-translate-y-1 transition crest-shadow-silver">
          Sponsor Logo
        </div>
      </div>

      {/* Sponsorship Levels — example tiers, adjust amounts/perks as needed */}
      <div className="mb-16">
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-2 tracking-wide">
          <span className="text-viking-red">Sponsorship</span>
          <span className="text-steel-dark"> Levels</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="crest-panel rivets p-6">
            <h3 className="font-display font-bold text-lg text-ink mb-2 tracking-wide">
              Shield Bearer
            </h3>
            <p className="text-steel-dark font-bold mb-4 font-accent tracking-wide">
              $100+
            </p>
            <ul className="space-y-2 text-ink/80 list-disc list-inside font-medium text-sm">
              <li>Name listed on our website</li>
              <li>Thank-you on our social media</li>
            </ul>
          </div>

          <div className="crest-panel rivets p-6">
            <h3 className="font-display font-bold text-lg text-ink mb-2 tracking-wide">
              Warrior
            </h3>
            <p className="text-steel-dark font-bold mb-4 font-accent tracking-wide">
              $500+
            </p>
            <ul className="space-y-2 text-ink/80 list-disc list-inside font-medium text-sm">
              <li>Everything in Shield Bearer</li>
              <li>Small logo displayed on our website</li>
              <li>Recognition on team promotional materials</li>
            </ul>
          </div>

          <div className="crest-panel rivets p-6">
            <h3 className="font-display font-bold text-lg text-ink mb-2 tracking-wide">
              pillager
            </h3>
            <p className="text-steel-dark font-bold mb-4 font-accent tracking-wide">
              $1,000+
            </p>
            <ul className="space-y-2 text-ink/80 list-disc list-inside font-medium text-sm">
              <li>Everything in Warrior</li>
              <li>Large logo on our website</li>
              <li>Logo featured on our team banner</li>
            </ul>
          </div>

          <div
            className="crest-panel rivets p-6 crest-shadow-red bg-viking-red/5"
            style={{ borderColor: "var(--color-viking-red)" }}
          >
            <h3 className="font-display font-bold text-lg text-ink mb-2 tracking-wide">
              Berserker
            </h3>
            <p className="text-viking-red font-bold mb-4 font-accent tracking-wide">
              $2,500+
            </p>
            <ul className="space-y-2 text-ink/80 list-disc list-inside font-medium text-sm">
              <li>Everything in Chieftain</li>
              <li>Premier logo placement on our website</li>
              <li>Featured on the robot</li>
              <li>Special recognition as a major team sponsor</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-ink/70 mb-4 font-medium">
          Interested in supporting our team?
        </p>

        <a
          href="mailto:skolrobotics9073@example.com"
          className="inline-block px-6 py-3 rounded-lg border-[3px] border-ink bg-viking-red text-parchment font-display font-bold text-sm tracking-wide crest-shadow hover:-translate-y-0.5 transition-transform"
        >
          Become a Sponsor
        </a>
        <p className="text-ink/50 text-xs mt-3 font-medium">
          (Placeholder email — swap in your team&apos;s real contact address)
        </p>
      </div>
    </div>
  );
}
