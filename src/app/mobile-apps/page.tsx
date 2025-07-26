"use client";
import {
  FiCode,
  FiLayers,
  FiServer,
  FiZap,
  FiGlobe,
  FiDatabase,
  FiSmartphone,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaLightbulb } from "react-icons/fa";
import { SiFlutter, SiSwift, SiKotlin, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";

export default function MobileAppDevelopmentPage() {
  const { theme } = useTheme();

  return (
    <>
      <main
        className={`min-h-screen overflow-x-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-blue-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-blue-50 text-gray-900"
        }`}
      >
        {/* Futuristic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
          <div
            className={`absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-blue-600/10" : "bg-blue-300/20"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-purple-600/10" : "bg-purple-300/20"
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
              <FiSmartphone className="text-5xl text-blue-400" />
              <div className="h-12 w-0.5 bg-white/30"></div>
              <span className="text-lg font-light tracking-widest">
                MOBILE APP DEVELOPMENT
              </span>
            </motion.div>

            <motion.h1
              className={`text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-white to-blue-400"
                  : "bg-gradient-to-r from-gray-900 to-blue-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Transformative{" "}
              <span className="text-blue-400">Mobile Experiences</span>
            </motion.h1>

            <motion.p
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } mb-12 max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              We craft high-performance mobile applications with cutting-edge
              technologies that engage users and drive business growth across
              iOS and Android platforms.
            </motion.p>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 opacity-40"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <FiSmartphone className="text-4xl text-blue-300" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-20 opacity-40"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            <SiFlutter className="text-5xl text-purple-300" />
          </motion.div>
        </section>

        {/* Tech Stack Visualization */}
        <section className="py-20 relative">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] bg-[length:300px_300px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our <span className="text-blue-400">Mobile Tech Stack</span>
              </motion.h2>
              <motion.p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Leveraging modern technologies to build fast, scalable, and
                engaging mobile applications.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <SiFlutter className="text-5xl" />,
                  name: "Flutter",
                },
                {
                  icon: <FaReact className="text-5xl" />,
                  name: "React Native",
                },
                {
                  icon: <SiSwift className="text-5xl" />,
                  name: "Swift (iOS)",
                },
                {
                  icon: <SiKotlin className="text-5xl" />,
                  name: "Kotlin (Android)",
                },
                {
                  icon: <SiFirebase className="text-5xl" />,
                  name: "Firebase",
                },
                {
                  icon: <FaAws className="text-5xl" />,
                  name: "AWS Amplify",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-blue-400/30"
                      : "bg-gradient-to-b from-gray-50 to-transparent border border-gray-200 hover:border-blue-300"
                  } transition-all`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    {tech.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-28 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-400">Mobile App</span> Services
              </h2>
              <p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } max-w-3xl mx-auto leading-relaxed`}
              >
                Comprehensive solutions tailored for iOS, Android, and
                cross-platform needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <FiSmartphone className="text-4xl" />,
                  title: "Native App Development",
                  description:
                    "High-performance apps built specifically for iOS and Android platforms",
                  features: [
                    "Swift & Objective-C for iOS",
                    "Kotlin & Java for Android",
                    "Platform-specific UI/UX",
                    "Native API integrations",
                  ],
                },
                {
                  icon: <FiLayers className="text-4xl" />,
                  title: "Cross-Platform Development",
                  description: "Single codebase for both iOS and Android",
                  features: [
                    "Flutter framework",
                    "React Native",
                    "Consistent UI across platforms",
                    "Faster development cycles",
                  ],
                },
                {
                  icon: <FiServer className="text-4xl" />,
                  title: "Backend & APIs",
                  description: "Robust backend solutions for mobile apps",
                  features: [
                    "Custom API development",
                    "Firebase integration",
                    "User authentication",
                    "Real-time database",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-blue-400/30"
                      : "bg-gradient-to-b from-gray-50 to-transparent border border-gray-200 hover:border-blue-300"
                  } transition-all group relative overflow-hidden`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-blue-400 mb-6">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p
                      className={`mb-6 leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                    <div className="space-y-3 text-sm">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-0.5">⟣</span>
                          <span
                            className={
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our <span className="text-blue-400">App Development</span>{" "}
                Process
              </motion.h2>
              <motion.p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                A structured approach that delivers quality mobile experiences
                on time and within budget.
              </motion.p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>

              {[
                {
                  title: "Concept & Strategy",
                  description:
                    "Market research, user personas, and app strategy",
                  icon: <FaLightbulb className="text-2xl" />,
                },
                {
                  title: "UI/UX Design",
                  description:
                    "Wireframing, prototyping, and user experience design",
                  icon: <FiLayers className="text-2xl" />,
                },
                {
                  title: "Development",
                  description: "Agile implementation with continuous testing",
                  icon: <FiCode className="text-2xl" />,
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Device testing, performance optimization, and bug fixing",
                  icon: <FiZap className="text-2xl" />,
                },
                {
                  title: "Deployment & Support",
                  description: "App store submission, monitoring, and updates",
                  icon: <FiGlobe className="text-2xl" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`mb-12 last:mb-0 relative ${
                    index % 2 === 0 ? "md:pr-20 md:pl-0" : "md:pl-20 md:pr-0"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div
                    className={`p-8 rounded-xl ${
                      theme === "dark"
                        ? "bg-gradient-to-b from-white/5 to-transparent border border-white/10"
                        : "bg-gradient-to-b from-gray-50 to-transparent border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-full mr-4 ${
                          theme === "dark" ? "bg-blue-900/50" : "bg-blue-100"
                        }`}
                      >
                        <div className="text-blue-400">{step.icon}</div>
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p
                      className={`pl-16 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`py-32 relative overflow-hidden ${
            theme === "dark"
              ? "bg-gradient-to-br from-blue-900/80 to-purple-900/80"
              : "bg-gradient-to-br from-blue-100 to-purple-100"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-grid-white/[0.02]"
                : "bg-grid-gray-900/[0.02]"
            }`}
          ></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Your{" "}
                <span className="text-blue-300">Mobile App</span>?
              </h2>
              <p
                className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Let's discuss how we can create an engaging mobile experience
                for your users.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div
                    className={`absolute -inset-1 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-blue-600 to-purple-500"
                        : "bg-gradient-to-r from-blue-500 to-purple-400"
                    }`}
                  ></div>
                  <Link
                    href="/contact"
                    className={`relative px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 ${
                      theme === "dark"
                        ? "bg-white text-gray-900"
                        : "bg-white text-gray-900"
                    }`}
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
                    className={`px-8 py-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-3 ${
                      theme === "dark"
                        ? "border border-white/30 text-white hover:bg-white/5"
                        : "border border-gray-300 text-gray-700 hover:bg-white/50"
                    }`}
                  >
                    View Portfolio
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
