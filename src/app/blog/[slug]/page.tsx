import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "src/content/blog",
    `${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const file = fs.readFileSync(filePath, "utf-8");

  const content = file.split("---").slice(2).join("---");

  return (
    <div className="max-w-3xl mx-auto">
      <div className="crest-panel rivets p-8 crest-shadow-silver">
        <pre className="whitespace-pre-wrap text-ink/90 font-body text-sm leading-relaxed">
          {content}
        </pre>
      </div>
    </div>
  );
}
