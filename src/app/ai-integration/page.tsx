"use client";
import {
  FiCode,
  FiLayers,
  FiServer,
  FiZap,
  FiGlobe,
  FiDatabase,
  FiCpu,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaAws, FaLightbulb } from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiGooglecloud,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";

export default function AIIntegrationPage() {
  const { theme } = useTheme();

  return (
    <>
      <main
        className={`min-h-screen overflow-x-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-emerald-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-emerald-50 text-gray-900"
        }`}
      >
        {/* Futuristic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
          <div
            className={`absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-emerald-600/10" : "bg-emerald-300/20"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-teal-600/10" : "bg-teal-300/20"
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
              <FiCpu className="text-5xl text-emerald-400" />
              <div className="h-12 w-0.5 bg-white/30"></div>
              <span className="text-lg font-light tracking-widest">
                AI INTEGRATION SERVICES
              </span>
            </motion.div>

            <motion.h1
              className={`text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-white to-emerald-400"
                  : "bg-gradient-to-r from-gray-900 to-emerald-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Intelligent <span className="text-emerald-400">AI Solutions</span>
            </motion.h1>

            <motion.p
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } mb-12 max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              We integrate cutting-edge artificial intelligence into your
              business to automate processes, enhance decision-making, and
              create intelligent user experiences.
            </motion.p>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 opacity-40"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <FiCpu className="text-4xl text-emerald-300" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-20 opacity-40"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            <SiTensorflow className="text-5xl text-teal-300" />
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
                Our <span className="text-emerald-400">AI Technology</span>{" "}
                Stack
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
                Leveraging modern AI frameworks and cloud platforms to build
                intelligent solutions tailored to your business needs.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <SiTensorflow className="text-5xl" />,
                  name: "TensorFlow",
                },
                { icon: <SiPytorch className="text-5xl" />, name: "PyTorch" },
                {
                  icon: <SiOpenai className="text-5xl" />,
                  name: "OpenAI API",
                },
                {
                  icon: <SiGooglecloud className="text-5xl" />,
                  name: "Vertex AI",
                },
                {
                  icon: <FaAws className="text-5xl" />,
                  name: "AWS AI Services",
                },
                {
                  icon: <FiDatabase className="text-5xl" />,
                  name: "LLM Integration",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-emerald-400/30"
                      : "bg-gradient-to-b from-gray-50 to-transparent border border-gray-200 hover:border-emerald-300"
                  } transition-all`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-emerald-400 mb-4 flex justify-center">
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
                <span className="text-emerald-400">AI Integration</span>{" "}
                Services
              </h2>
              <p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                } max-w-3xl mx-auto leading-relaxed`}
              >
                Comprehensive AI solutions to transform your business
                operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <FiCpu className="text-4xl" />,
                  title: "Custom AI Solutions",
                  description:
                    "Tailored AI models designed for your specific business challenges",
                  features: [
                    "Machine learning models",
                    "Computer vision systems",
                    "Predictive analytics",
                    "Anomaly detection",
                  ],
                },
                {
                  icon: <FiLayers className="text-4xl" />,
                  title: "LLM Integration",
                  description: "Harness the power of large language models",
                  features: [
                    "Chatbot development",
                    "Document analysis",
                    "Content generation",
                    "Knowledge management",
                  ],
                },
                {
                  icon: <FiServer className="text-4xl" />,
                  title: "AI API Integration",
                  description: "Connect your apps with leading AI services",
                  features: [
                    "OpenAI API integration",
                    "Google Vertex AI",
                    "AWS AI services",
                    "Custom API development",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-emerald-400/30"
                      : "bg-gradient-to-b from-gray-50 to-transparent border border-gray-200 hover:border-emerald-300"
                  } transition-all group relative overflow-hidden`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-emerald-400 mb-6">{service.icon}</div>
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
                          <span className="text-emerald-400 mr-3 mt-0.5">
                            ⟣
                          </span>
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
                Our <span className="text-emerald-400">AI Integration</span>{" "}
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
                A structured approach to implementing AI that delivers
                measurable results.
              </motion.p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>

              {[
                {
                  title: "Needs Assessment",
                  description:
                    "Identify AI opportunities and business objectives",
                  icon: <FaLightbulb className="text-2xl" />,
                },
                {
                  title: "Data Strategy",
                  description:
                    "Evaluate data quality and prepare for AI implementation",
                  icon: <FiDatabase className="text-2xl" />,
                },
                {
                  title: "Model Development",
                  description:
                    "Build, train, and validate AI models for your use case",
                  icon: <FiCode className="text-2xl" />,
                },
                {
                  title: "Integration",
                  description:
                    "Deploy AI into your existing systems and workflows",
                  icon: <FiServer className="text-2xl" />,
                },
                {
                  title: "Optimization",
                  description:
                    "Continuous monitoring and improvement of AI performance",
                  icon: <FiZap className="text-2xl" />,
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
                          theme === "dark"
                            ? "bg-emerald-900/50"
                            : "bg-emerald-100"
                        }`}
                      >
                        <div className="text-emerald-400">{step.icon}</div>
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
              ? "bg-gradient-to-br from-emerald-900/80 to-teal-900/80"
              : "bg-gradient-to-br from-emerald-100 to-teal-100"
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
                Ready to Transform Your Business with{" "}
                <span className="text-emerald-300">AI</span>?
              </h2>
              <p
                className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Let's discuss how we can integrate intelligent solutions to
                automate processes and enhance decision-making.
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
                        ? "bg-gradient-to-r from-emerald-600 to-teal-500"
                        : "bg-gradient-to-r from-emerald-500 to-teal-400"
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
                    View Case Studies
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
