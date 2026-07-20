"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-parchment">
      {/* GRAIN */}
      <div className="absolute inset-0 grain-overlay" />

      {/* FAINT CORNER ACCENTS */}
      <div className="absolute -top-16 -left-16 w-[380px] h-[380px] rounded-full border-[3px] border-steel-dark opacity-[0.06]" />
      <div className="absolute -bottom-16 -right-16 w-[380px] h-[380px] rounded-full border-[3px] border-viking-red opacity-[0.06]" />

      {/* SOFT VIGNETTE */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(26,26,26,0.07) 100%)",
        }}
      />
    </div>
  );
}
