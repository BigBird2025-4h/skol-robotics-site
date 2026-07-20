import Link from "next/link";
import { getPosts } from "../../lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h1 className="font-display font-bold text-3xl sm:text-4xl mb-8 text-steel-dark tracking-wide">
        Blog / Media
      </h1>

      <div className="grid gap-6">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div
              className={`crest-panel rivets p-6 transition hover:-translate-y-1 ${
                i % 2 === 0 ? "crest-shadow-silver" : "crest-shadow-red"
              }`}
            >
              <h2 className="font-display font-bold text-lg text-ink tracking-wide">
                {post.title}
              </h2>

              <p className="text-sm text-ink/60 mt-1 font-semibold font-accent tracking-wide">
                {new Date(post.date).toDateString()}
              </p>

              <p className="text-ink/80 mt-3 text-sm font-medium">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
