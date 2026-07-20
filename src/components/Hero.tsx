"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

const BASE = "Skol Robotics is an FRC team from Fayette Academy dedicated to ";

const PHRASES = [
  {
    text: "designing, building, and programming competition-ready robots.",
    highlights: {
      robots: "text-viking-red",
      programming: "text-steel-dark",
    },
  },
  {
    text: "representing Fayette Academy with pride on and off the field.",
    highlights: {
      "Fayette Academy": "text-viking-red",
      field: "text-steel-dark",
    },
  },
  {
    text: "bringing STEM education to our community.",
    highlights: { STEM: "text-viking-red", community: "text-steel-dark" },
  },
  {
    text: "Gracious Professionalism, Viking spirit, and teamwork.",
    highlights: {
      "Gracious Professionalism": "text-steel-dark",
      "Viking spirit": "text-viking-red",
    },
  },
  {
    text: "turning ideas into hardware, one build season at a time.",
    highlights: { ideas: "text-viking-red", hardware: "text-steel-dark" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [glitchChar, setGlitchChar] = useState("");

  const current = PHRASES[index].text;

  const visibleText =
    BASE + current.slice(0, progress) + (isDeleting ? "" : glitchChar);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(
        () => {
          setIsWaiting(false);

          if (!isDeleting) {
            setIsDeleting(true);
          } else {
            setIsDeleting(false);
            setIndex((i) => (i + 1) % PHRASES.length);
            setProgress(0);
          }
        },
        isDeleting ? 1000 : 4000
      );

      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      timeout = setTimeout(() => {
        const next = progress + 1;

        setGlitchChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
        setProgress(next);

        if (next >= current.length) {
          setGlitchChar("");
          setIsWaiting(true);
        }
      }, 30);
    } else {
      timeout = setTimeout(() => {
        const next = progress - 1;
        setProgress(next);

        if (next <= 0) {
          setIsWaiting(true);
        }
      }, 20);
    }

    return () => clearTimeout(timeout);
  }, [progress, isDeleting, isWaiting, index]);

  function renderText(text: string) {
    let output = text;

    Object.entries(PHRASES[index].highlights).forEach(([word, color]) => {
      const regex = new RegExp(`(${word})`, "gi");
      output = output.replace(regex, `<span class="${color}">$1</span>`);
    });

    return output;
  }

  return (
    <div className="text-center mt-10">
      <div className="relative inline-block mb-6 shield-in">
        <div className="absolute inset-0 rounded-full border-[3px] border-viking-red opacity-30 scale-110 -z-10" />
        <Image
          src="/logo.webp"
          alt="Skol Robotics — viking-helmet robot mascot"
          width={150}
          height={150}
          className="rounded-full border-4 border-ink crest-shadow-red"
          priority
        />
      </div>

      <h1 className="font-display font-bold text-4xl sm:text-5xl mb-3 leading-tight tracking-wide">
        <span className="text-viking-red">SKOL</span>{" "}
        <span className="text-steel-dark">ROBOTICS</span>
      </h1>

      <p className="font-accent text-lg sm:text-xl tracking-widest text-ink/70 mb-6">
        FAYETTE ACADEMY · FRC TEAM #9073
      </p>

      <div className="rune-divider mb-6" />

      <p className="max-w-2xl mx-auto text-lg font-medium text-ink/90">
        <span
          dangerouslySetInnerHTML={{
            __html: renderText(visibleText),
          }}
        />
        <span className="cursor text-viking-red">|</span>
      </p>
    </div>
  );
}
