"use client";
import { FiUsers, FiAward, FiGlobe, FiHeart, FiCode } from "react-icons/fi";
import { FaReact, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <>
      <main
        className={`min-h-screen overflow-x-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-indigo-900 text-white"
            : "bg-gradient-to-b from-gray-50 to-indigo-50 text-gray-900"
        }`}
      >
        {/* Futuristic Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/[0.03]"></div>
          <div
            className={`absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-indigo-600/10" : "bg-indigo-300/20"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full filter blur-3xl ${
              theme === "dark" ? "bg-pink-600/10" : "bg-pink-300/20"
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
              <span className="text-lg font-light tracking-widest">
                OUR STORY
              </span>
            </motion.div>

            <motion.h1
              className={`text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-white to-indigo-400"
                  : "bg-gradient-to-r from-gray-900 to-indigo-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Building The{" "}
              <span className="text-indigo-400">Digital Future</span>
            </motion.h1>

            <motion.p
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } mb-12 max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              We're a team of passionate software developers dedicated to
              creating innovative digital solutions that transform businesses
              and empower users.
            </motion.p>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 opacity-40"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <FiGlobe className="text-4xl text-indigo-300" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-20 opacity-40"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          >
            <FiCode className="text-5xl text-pink-300" />
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
              {/* <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div
                  className={`rounded-2xl overflow-hidden border ${
                    theme === "dark" ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  <Image
                    src="/team-working.jpg"
                    alt="Our team working together"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div> */}

              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Who <span className="text-indigo-400">We Are</span>
                </h2>
                <div className="space-y-6">
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Founded in 2018, we started as a small team of developers
                    with a shared vision to create technology that makes a
                    difference. Today, we've grown into a full-service digital
                    agency serving clients worldwide.
                  </p>
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Our approach combines technical excellence with creative
                    problem-solving. We don't just build software - we craft
                    solutions that drive real business results and create
                    meaningful user experiences.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    {[
                      { value: "50+", label: "Projects Completed" },
                      { value: "15+", label: "Team Members" },
                      { value: "100%", label: "Client Satisfaction" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className={`px-6 py-4 rounded-lg ${
                          theme === "dark"
                            ? "bg-white/5 border border-white/10"
                            : "bg-white border border-gray-200"
                        }`}
                      >
                        <div className="text-2xl font-bold text-indigo-400">
                          {stat.value}
                        </div>
                        <div className="text-sm opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Our <span className="text-indigo-400">Core Values</span>
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
                The principles that guide everything we do
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <FaLightbulb className="text-4xl" />,
                  title: "Innovation",
                  description:
                    "We embrace new technologies and creative approaches to solve complex problems.",
                },
                {
                  icon: <FiHeart className="text-4xl" />,
                  title: "Passion",
                  description:
                    "Our team genuinely cares about delivering exceptional results for our clients.",
                },
                {
                  icon: <FiAward className="text-4xl" />,
                  title: "Excellence",
                  description:
                    "We take pride in our work and strive for perfection in every project.",
                },
                {
                  icon: <FiUsers className="text-4xl" />,
                  title: "Collaboration",
                  description:
                    "We believe the best solutions come from teamwork and open communication.",
                },
                {
                  icon: <FiGlobe className="text-4xl" />,
                  title: "Impact",
                  description:
                    "We measure success by the positive change we create for our clients and their users.",
                },
                {
                  icon: <FiCode className="text-4xl" />,
                  title: "Integrity",
                  description:
                    "We're transparent, honest, and committed to doing what's right.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-indigo-400/30"
                      : "bg-gradient-to-b from-gray-50 to-transparent border border-gray-200 hover:border-indigo-300"
                  } transition-all group relative overflow-hidden`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-indigo-400 mb-6">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">
                      {value.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-28 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Meet The <span className="text-indigo-400">Team</span>
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
                The brilliant minds behind our success
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Vishal Singh",
                  role: "Software Developer",
                  image: "/team-member-1.jpg",
                },
                {
                  name: "Aftab Alam",
                  role: "Lead Developer",
                  image: "/team-member-2.jpg",
                },
                {
                  name: "Rahul",
                  role: "Full Stack Developer",
                  image: "/team-member-3.jpg",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div
                    className={`rounded-xl overflow-hidden mb-4 border ${
                      theme === "dark" ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`py-32 relative overflow-hidden ${
            theme === "dark"
              ? "bg-gradient-to-br from-indigo-900/80 to-pink-900/80"
              : "bg-gradient-to-br from-indigo-100 to-pink-100"
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
                Want to Join <span className="text-indigo-300">Our Team</span>?
              </h2>
              <p
                className={`text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                We're always looking for talented individuals to join our
                growing team.
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
                        ? "bg-gradient-to-r from-indigo-600 to-pink-500"
                        : "bg-gradient-to-r from-indigo-500 to-pink-400"
                    }`}
                  ></div>
                  <Link
                    href="/careers"
                    className={`relative px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 ${
                      theme === "dark"
                        ? "bg-white text-gray-900"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <FiUsers className="inline text-lg" />
                    View Openings
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className={`px-8 py-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-3 ${
                      theme === "dark"
                        ? "border border-white/30 text-white hover:bg-white/5"
                        : "border border-gray-300 text-gray-700 hover:bg-white/50"
                    }`}
                  >
                    Contact Us
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
