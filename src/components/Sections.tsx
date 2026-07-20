"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Portfolio",
    color: "red",
    href: "/portfolio",
    description: "View our robots and engineering work",
  },
  {
    title: "Blog / Media",
    color: "silver",
    href: "/blog",
    description: "Read updates, build logs, and competition recaps",
  },
  {
    title: "Sponsors",
    color: "red",
    href: "/sponsors",
    description: "Meet the organizations supporting us",
  },
  {
    title: "Resources",
    color: "silver",
    href: "/resources",
    description: "Tools, guides, and FRC resources",
  },
];

export default function Sections({
  latestPost,
}: {
  latestPost?: { slug: string; title: string };
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-20">
      {sections.map((sec, i) => (
        <motion.div
          key={sec.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link href={sec.href}>
            <div
              className={`crest-panel rivets p-8 cursor-pointer transition-transform duration-200 hover:-translate-y-1 ${
                sec.color === "red" ? "crest-shadow-red" : "crest-shadow-silver"
              }`}
            >
              <h2
                className={`font-display font-bold text-xl mb-3 tracking-wide ${
                  sec.color === "red" ? "text-viking-red" : "text-steel-dark"
                }`}
              >
                {sec.title}
              </h2>

              {sec.title === "Blog / Media" && latestPost ? (
                <p className="text-ink/80 text-sm capitalize font-medium">
                  Latest: {latestPost.title}
                </p>
              ) : (
                <p className="text-ink/80 text-sm font-medium">
                  {sec.description}
                </p>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
