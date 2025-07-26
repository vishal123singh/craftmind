import { notFound } from "next/navigation";
import { FiCalendar, FiClock, FiArrowLeft } from "react-icons/fi";
import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

// Mock data fetch function - replace with your actual data fetching
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const mockPosts: Record<string, BlogPost> = {
    "the-future-of-react": {
      id: "1",
      title: "The Future of React in 2024",
      content: `
        <h2>Introduction</h2>
        <p>React continues to evolve at a rapid pace, with 2024 bringing several exciting developments to the ecosystem. In this article, we'll explore the latest trends and upcoming features that are shaping the future of React development.</p>
        
        <h2>Server Components</h2>
        <p>The introduction of Server Components marks a significant shift in how we think about React architecture. By moving component rendering to the server, we can:</p>
        <ul>
          <li>Reduce bundle sizes</li>
          <li>Improve initial load performance</li>
          <li>Access server-side resources directly</li>
        </ul>
        
        <h2>React Compiler</h2>
        <p>React's new optimizing compiler automatically memoizes components and values, reducing the need for manual memoization with useMemo and useCallback.</p>
        
        <h2>Enhanced Hooks</h2>
        <p>The React team is working on several new hooks to address common pain points:</p>
        <ul>
          <li>useEvent for stable event handlers</li>
          <li>useEffectEvent for better effect dependencies</li>
          <li>use hook for easier data fetching</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>With these innovations, React is positioning itself to remain the dominant UI library for years to come. Developers should start experimenting with these features today to stay ahead of the curve.</p>
      `,
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "Development",
      image: "/blog-react.jpg",
      author: {
        name: "Alex Johnson",
        avatar: "/author-1.jpg",
        role: "Senior React Developer",
      },
    },
  };

  return mockPosts[slug] || null;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { theme } = useTheme();
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blogs"
          className={`inline-flex items-center gap-2 ${
            theme === "dark"
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <FiArrowLeft /> Back to Blogs
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                theme === "dark"
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {post.category}
            </span>
            <div
              className={`flex items-center gap-2 text-sm ${
                theme === "dark" ? "text-gray-500" : "text-gray-500"
              }`}
            >
              <FiCalendar size={14} />
              <span>{post.date}</span>
              <span>•</span>
              <FiClock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p
                className={`font-medium ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {post.author.name}
              </p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {post.author.role}
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>

        {/* Article Content */}
        <div
          className={`prose max-w-none pb-16 ${
            theme === "dark"
              ? "prose-invert prose-headings:text-white prose-a:text-blue-400 prose-strong:text-white"
              : "prose-headings:text-gray-900 prose-a:text-blue-600"
          }`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div
          className={`mt-16 pt-8 border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                About {post.author.name}
              </h3>
              <p
                className={`mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {post.author.role} with over 8 years of experience in React
                development. Passionate about creating performant web
                applications and sharing knowledge with the developer community.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className={`${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2
            className={`text-2xl font-bold mb-8 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className={`rounded-lg overflow-hidden ${
                  theme === "dark"
                    ? "bg-gray-700/50 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-100"
                } transition-colors`}
              >
                <Link href="/blogs/sample-post">
                  <div className="relative h-48">
                    <Image
                      src="/blog-react.jpg"
                      alt="Sample post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium mb-3 inline-block ${
                        theme === "dark"
                          ? "bg-gray-600 text-gray-300"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      Development
                    </span>
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      React Performance Optimization Techniques
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Learn how to make your React applications faster and more
                      efficient.
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
