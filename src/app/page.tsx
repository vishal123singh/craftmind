"use client";
import Head from "next/head";
import Link from "next/link";
import {
  FiCode,
  FiSmartphone,
  FiCpu,
  FiZap,
  FiUsers,
  FiChevronRight,
} from "react-icons/fi";
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { IoMdCube, IoMdGlobe } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/app/context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <>
      <Head>
        <title>Craftmind | Web, Mobile & AI App Development Studio</title>
        <meta
          name="description"
          content="Craftmind builds cutting-edge web applications, mobile apps, and AI solutions with modern technologies and innovative approaches."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`min-h-screen overflow-x-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-purple-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-purple-50 text-gray-900"
        }`}
      >
        {/* Futuristic Background Elements - UNCHANGED */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>

        {/* Hero Section - Only text content changed */}
        <section
          ref={targetRef}
          className="container mx-auto px-4 py-32 text-center relative z-10"
          style={{ opacity, y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="flex flex-col items-center mb-8 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* First row: Logo, separator, EST. 2025 */}
              <div className="flex items-center justify-center gap-6">
                <div className="relative">
                  <img
                    src="/craftmind_logo.png"
                    alt="Craftmind Logo"
                    width={180}
                    height={48}
                    className="object-contain"
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                <div className="h-12 w-0.5 bg-white/30" />

                <span className="text-lg font-light tracking-widest">
                  EST. 2025
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Crafting
                </motion.span>
              </span>{" "}
              <span className="inline-block">
                <motion.span
                  className="inline-block text-purple-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Digital
                </motion.span>
              </span>{" "}
              <span className="inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  Experiences
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              We create{" "}
              <span className="text-purple-300 font-medium">
                high-performance
              </span>{" "}
              web applications,{" "}
              <span className="text-purple-300 font-medium">
                intuitive mobile experiences
              </span>
              , and{" "}
              <span className="text-purple-300 font-medium">
                AI-powered solutions
              </span>{" "}
              that drive business growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <Link
                  href="/contact"
                  className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-3"
                >
                  <FaLightbulb className="inline text-lg" />
                  Start Your Project
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#services"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors font-medium flex items-center justify-center gap-3"
                >
                  <FiCode className="inline" />
                  Our Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <div className="text-sm text-white/60 flex items-center gap-2">
                <span>Trusted by innovative companies like</span>
                <div className="flex gap-4 items-center">
                  <span className="font-medium">TechCorp</span>
                  <div className="w-1 h-1 rounded-full bg-white/30"></div>
                  <span className="font-medium">WebSolutions</span>
                  <div className="w-1 h-1 rounded-full bg-white/30"></div>
                  <span className="font-medium">AI Ventures</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Tech Elements - UNCHANGED */}
          <motion.div
            className="absolute top-1/4 left-10 opacity-40"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <IoMdCube className="text-4xl text-purple-300" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-20 opacity-40"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            <IoMdGlobe className="text-5xl text-blue-300" />
          </motion.div>
        </section>

        {/* Quantum Divider - UNCHANGED */}
        <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-white/10"></div>
          </motion.div>
        </div>

        {/* Mission Statement - Only text content changed */}
        <section className="py-28 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-purple-400">Modern</span> Development{" "}
                  <span className="text-purple-400">Approach</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  At <strong className="text-purple-300">Craftmind</strong>, we
                  combine cutting-edge technologies with proven methodologies to
                  deliver scalable solutions. Our{" "}
                  <span className="text-purple-300">
                    component-based architecture
                  </span>{" "}
                  ensures maintainability, while our{" "}
                  <span className="text-purple-300">
                    performance-first mindset
                  </span>{" "}
                  guarantees exceptional user experiences.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <FiZap className="text-3xl" />,
                    title: "Rapid Development",
                    description:
                      "Quick iteration cycles that deliver tangible results faster",
                  },
                  {
                    icon: <FiCode className="text-3xl" />,
                    title: "Clean Code",
                    description:
                      "Maintainable, well-structured code following best practices",
                  },
                  {
                    icon: <FiUsers className="text-3xl" />,
                    title: "User Focused",
                    description:
                      "Designing experiences that users love and engage with",
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-b from-white/5 to-white/2 p-8 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all group relative overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="text-purple-400 mb-4 text-3xl">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Neural Network Visualization - UNCHANGED VISUALLY */}
        <section className="py-20 relative">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-[url('/neural-pattern.png')] bg-[length:300px_300px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our <span className="text-purple-400">Integrated</span> Approach
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Connecting frontend, backend, and infrastructure into cohesive
                systems that grow with your needs.
              </motion.p>
            </div>

            <div className="relative h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <FiCode className="text-5xl text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>

              {[
                {
                  position: "top-1/4 left-1/4",
                  color: "from-purple-600 to-purple-400",
                  icon: <FiCode className="text-xl" />,
                },
                {
                  position: "top-1/3 right-1/4",
                  color: "from-blue-600 to-blue-400",
                  icon: <FiSmartphone className="text-xl" />,
                },
                {
                  position: "bottom-1/4 left-1/3",
                  color: "from-green-600 to-green-400",
                  icon: <FiCpu className="text-xl" />,
                },
                {
                  position: "bottom-1/3 right-1/3",
                  color: "from-pink-600 to-pink-400",
                  icon: <FiUsers className="text-xl" />,
                },
              ].map((node, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${node.position} w-16 h-16 rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center text-white shadow-lg border border-white/10`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.1,
                  }}
                >
                  {node.icon}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Only text content changed */}
        <section id="services" className="py-28 relative">
          {/* Second row: Hero Image */}
          <div className="mt-1">
            <img
              src="/hero_image.png"
              alt="Hero"
              width={198}
              height={44}
              className="object-contain mx-auto"
            />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions tailored to your business requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <FiCode className="text-4xl" />,
                  title: "Web Development",
                  version: "v4.2",
                  description:
                    "Modern web applications built with cutting-edge technologies",
                  features: [
                    "React/Next.js applications",
                    "Node.js backends",
                    "Responsive UI/UX design",
                    "API integrations",
                  ],
                  link: "/web-development",
                },
                {
                  icon: <FiSmartphone className="text-4xl" />,
                  title: "Mobile Apps",
                  version: "3.1",
                  description:
                    "Cross-platform mobile solutions for iOS and Android",
                  features: [
                    "React Native development",
                    "Native performance",
                    "App store deployment",
                    "Offline capabilities",
                  ],
                  link: "/mobile-apps",
                },
                {
                  icon: <FiCpu className="text-4xl" />,
                  title: "AI Integration",
                  version: "LLM",
                  description:
                    "Smart solutions powered by artificial intelligence",
                  features: [
                    "Custom chatbots",
                    "Machine learning models",
                    "Process automation",
                    "Data analysis",
                  ],
                  link: "/ai-integration",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all group relative overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-purple-400 mb-6 text-4xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                      {service.title}
                      <span className="text-xs px-2 py-1 bg-purple-900/50 text-purple-300 rounded-full">
                        {service.version}
                      </span>
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 text-sm">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-purple-400 mr-3 mt-0.5">⟣</span>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <Link
                        href={service.link}
                        className="text-purple-400 text-sm flex items-center gap-2 group"
                      >
                        Explore {service.title}
                        <FiChevronRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Tech Showcase - Only text content changed */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-[length:200px_200px] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-purple-400">Innovating</span> With Modern
                Tech
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Leveraging the latest technologies to build future-proof
                solutions.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <FiCode className="text-3xl" />,
                  title: "Next.js 14",
                  description:
                    "Building ultra-fast web applications with the latest React framework",
                  bgColor: "bg-purple-600",
                  status: "Production Ready",
                },
                {
                  icon: <FiSmartphone className="text-3xl" />,
                  title: "React Native",
                  description:
                    "Creating cross-platform mobile apps with native performance",
                  bgColor: "bg-blue-600",
                  status: "Stable Release",
                },
                {
                  icon: <FiCpu className="text-3xl" />,
                  title: "AI APIs",
                  description:
                    "Integrating cutting-edge AI capabilities into your applications",
                  bgColor: "bg-green-600",
                  status: "Latest Models",
                },
                {
                  icon: <FiZap className="text-3xl" />,
                  title: "Edge Computing",
                  description:
                    "Deploying globally distributed applications for maximum performance",
                  bgColor: "bg-orange-600",
                  status: "Beta Access",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`p-4 rounded-lg ${tech.bgColor} text-white text-3xl`}
                    >
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                      <div className="mt-4">
                        <span className="text-xs px-2 py-1 bg-white/5 text-white/60 rounded-full">
                          {tech.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Only text content changed */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-blue-900/80">
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-[length:200px_200px] opacity-20"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-purple-300">Build</span>{" "}
                Together?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can bring your digital vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <Link
                    href="/contact"
                    className="relative px-8 py-4 bg-white text-gray-900 rounded-lg font-bold flex items-center justify-center gap-3"
                  >
                    <FaLightbulb className="inline text-lg" />
                    Get Started
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/5 transition-colors font-medium flex items-center justify-center gap-3"
                  >
                    See Our Work
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Floating particles - UNCHANGED */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${50 + Math.random() * 30}%`,
              }}
            />
          ))}
        </section>
      </main>
    </>
  );
}
