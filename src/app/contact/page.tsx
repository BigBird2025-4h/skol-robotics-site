export default function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-10 text-center crest-panel rivets p-10 crest-shadow">
      <h1 className="font-display font-bold text-2xl sm:text-3xl mb-6 text-viking-red tracking-wide">
        Contact Us
      </h1>

      <p className="text-ink/80 mb-6 font-medium">
        Reach out for sponsorships, collaboration, or questions
      </p>

      <p className="text-ink/80 mb-6 font-medium">
        Interested in joining? fill out our interest form{" "}
        <a
          href="#"
          className="text-steel-dark hover:text-viking-red underline"
        >
          here
        </a>{" "}
        .
      </p>

      <a
        href="mailto:skolrobotics9073@example.com"
        className="inline-block px-6 py-3 rounded-lg border-[3px] border-ink bg-viking-red text-parchment font-display font-bold text-sm tracking-wide crest-shadow hover:-translate-y-0.5 transition-transform"
      >
        Email Us
      </a>
    </div>
  );
}
