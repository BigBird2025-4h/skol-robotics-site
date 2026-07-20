export default function ResourcesPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-wide">
        <span className="text-viking-red">Resources</span>
      </h1>

      <p className="text-ink/80 max-w-2xl mb-10 font-medium">
        Tools and guides to help you build skills for FIRST Robotics
        Competition.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="crest-panel rivets p-6">
          <h2 className="font-display font-bold text-base text-ink mb-3 tracking-wide">
            CAD &amp; Design
          </h2>
          <ul className="text-viking-red space-y-2 text-sm font-medium">
            <li>• Onshape (3D Modeling)</li>
            <li>
              <a
                href="https://www.onshape.com/en/education"
                className="text-steel-dark hover:text-viking-red underline"
              >
                Onshape for Education
              </a>
            </li>
          </ul>
        </div>

        <div className="crest-panel rivets p-6">
          <h2 className="font-display font-bold text-base text-ink mb-3 tracking-wide">
            Programming
          </h2>
          <ul className="text-steel-dark space-y-2 text-sm font-medium">
            <li>• Java (WPILib)</li>
            <li>
              <a
                href="https://docs.wpilib.org/"
                className="text-steel-dark hover:text-viking-red underline"
              >
                WPILib Documentation
              </a>
            </li>
            <li>• Team GitHub</li>
            <li>
              <a
                href="https://github.com"
                className="text-steel-dark hover:text-viking-red underline"
              >
                Placeholder — link your GitHub org
              </a>
            </li>
          </ul>
        </div>

        <div className="crest-panel rivets p-6">
          <h2 className="font-display font-bold text-base text-ink mb-3 tracking-wide">
            Competition Strategy
          </h2>
          <ul className="text-viking-red space-y-2 text-sm font-medium">
            <li>• Game manual analysis</li>
            <li>• Autonomous scoring planning</li>
            <li>• Driver practice routines</li>
          </ul>
        </div>

        <div className="crest-panel rivets p-6">
          <h2 className="font-display font-bold text-base text-ink mb-3 tracking-wide">
            Learning Resources
          </h2>
          <ul className="text-steel-dark space-y-2 text-sm font-medium">
            <li>• FIRST Robotics Competition</li>
            <li>
              <a
                href="https://www.firstinspires.org/robotics/frc"
                className="text-steel-dark hover:text-viking-red underline"
              >
                FRC Official Site
              </a>
            </li>
            <li>• Chief Delphi (community forum)</li>
            <li>
              <a
                href="https://www.chiefdelphi.com/"
                className="text-steel-dark hover:text-viking-red underline"
              >
                Chief Delphi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
