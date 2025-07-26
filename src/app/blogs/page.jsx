"use client";
import { FiCalendar, FiClock, FiTag, FiSearch } from "react-icons/fi";
import { FaReact, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const { theme } = useTheme();

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "The Future of React in 2024",
      excerpt:
        "Exploring the latest trends and upcoming features in React ecosystem",
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "Development",
      image: "/blog-react.jpg",
    },
    {
      id: 2,
      title: "Optimizing Mobile App Performance",
      excerpt:
        "Best practices to ensure your mobile apps run smoothly on all devices",
      date: "April 28, 2024",
      readTime: "10 min read",
      category: "Mobile",
      image: "/blog-mobile.jpg",
    },
    {
      id: 3,
      title: "AI Integration Strategies for Businesses",
      excerpt:
        "How to effectively implement AI solutions in your existing workflows",
      date: "April 10, 2024",
      readTime: "12 min read",
      category: "AI",
      image: "/blog-ai.jpg",
    },
    {
      id: 4,
      title: "Building Scalable Backend Architectures",
      excerpt:
        "Design patterns for creating robust and scalable backend systems",
      date: "March 22, 2024",
      readTime: "15 min read",
      category: "Backend",
      image: "/blog-backend.jpg",
    },
    {
      id: 5,
      title: "UX Design Principles for 2024",
      excerpt:
        "Emerging design trends and timeless principles for exceptional user experiences",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Design",
      image: "/blog-ux.jpg",
    },
    {
      id: 6,
      title: "The Power of Serverless Computing",
      excerpt:
        "How serverless architecture can transform your application infrastructure",
      date: "February 18, 2024",
      readTime: "11 min read",
      category: "Cloud",
      image: "/blog-serverless.jpg",
    },
  ];

  const categories = [
    "All",
    "Development",
    "Mobile",
    "AI",
    "Backend",
    "Design",
    "Cloud",
  ];

  return (
    <>
      <main
        className={`min-h-screen overflow-x-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-amber-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-amber-50 text-gray-900"
        }`}
      >
        {/* Futuristic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
          <div
            className={`absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-amber-600/10" : "bg-amber-300/20"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-rose-600/10" : "bg-rose-300/20"
            }`}
          ></div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="flex justify-center items-center mb-8 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <FaLightbulb className="text-5xl text-amber-400" />
              <div className="h-12 w-0.5 bg-white/30"></div>
              <span className="text-lg font-light tracking-widest">
                KNOWLEDGE SHARING
              </span>
            </motion.div>

            <motion.h1
              className={`text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-white to-amber-400"
                  : "bg-gradient-to-r from-gray-900 to-amber-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Insights & <span className="text-amber-400">Articles</span>
            </motion.h1>

            <motion.p
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } mb-12 max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Explore our collection of technical articles, tutorials, and
              industry insights.
            </motion.p>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 opacity-40"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <FiSearch className="text-4xl text-amber-300" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-20 opacity-40"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            <FiTag className="text-5xl text-rose-300" />
          </motion.div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className={`relative rounded-full p-1 ${
                  theme === "dark"
                    ? "bg-white/5 border border-white/10"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                <div className="absolute left-6 top-1/2 -translate-y-1/2">
                  <FiSearch
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className={`w-full py-4 pl-16 pr-6 bg-transparent focus:outline-none ${
                    theme === "dark"
                      ? "placeholder-gray-500"
                      : "placeholder-gray-400"
                  }`}
                />
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                      theme === "dark"
                        ? "bg-white/5 border border-white/10 hover:bg-amber-500/20 hover:border-amber-400/30"
                        : "bg-white border border-gray-200 hover:bg-amber-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  className={`rounded-xl overflow-hidden ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-amber-400/30"
                      : "bg-gradient-to-b from-gray-50 to-transparent border border-gray-200 hover:border-amber-300"
                  } transition-all group`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${blog.id}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            theme === "dark"
                              ? "bg-amber-500/20 text-amber-300"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm mb-4">
                        <div
                          className={`flex items-center gap-1 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <FiCalendar size={14} />
                          <span>{blog.date}</span>
                        </div>
                        <div
                          className={`flex items-center gap-1 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <FiClock size={14} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-amber-400 transition-colors">
                        {blog.title}
                      </h3>
                      <p
                        className={`${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {blog.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div
                className={`flex gap-2 ${
                  theme === "dark"
                    ? "bg-white/5 border border-white/10"
                    : "bg-white border border-gray-200"
                } rounded-lg p-1`}
              >
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-10 h-10 rounded-md flex items-center justify-center ${
                      page === 1
                        ? theme === "dark"
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-amber-100 text-amber-800"
                        : theme === "dark"
                        ? "hover:bg-white/5"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-28 relative overflow-hidden">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-[url('/circuit-pattern.png')] opacity-10"
                : "bg-[url('/grid-pattern.png')] opacity-5"
            }`}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`max-w-4xl mx-auto rounded-2xl p-12 text-center ${
                theme === "dark"
                  ? "bg-gradient-to-br from-amber-900/30 to-rose-900/30 border border-white/10"
                  : "bg-gradient-to-br from-amber-100 to-rose-100 border border-gray-200"
              }`}
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Stay Updated With Our{" "}
                <span className="text-amber-400">Latest Articles</span>
              </motion.h2>
              <motion.p
                className={`text-lg mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Subscribe to our newsletter to receive new posts directly in
                your inbox.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`flex-1 px-5 py-3 rounded-lg focus:outline-none ${
                    theme === "dark"
                      ? "bg-white/5 border border-white/10 placeholder-gray-500"
                      : "bg-white border border-gray-300 placeholder-gray-400"
                  }`}
                />
                <button
                  className={`px-6 py-3 rounded-lg font-medium ${
                    theme === "dark"
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "bg-amber-500 hover:bg-amber-600 text-white"
                  } transition-colors`}
                >
                  Subscribe
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
