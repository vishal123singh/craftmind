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
  FiStar,
} from "react-icons/fi";
import { FaLightbulb, FaRocket } from "react-icons/fa";
import { IoMdCube, IoMdGlobe } from "react-icons/io";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/app/context/ThemeContext";

// Helper function to get theme-based colors
const getThemeColors = (theme) => ({
  text: {
    primary: theme === "dark" ? "text-white" : "text-gray-900",
    secondary: theme === "dark" ? "text-gray-300" : "text-gray-600",
    accent: theme === "dark" ? "text-purple-300" : "text-purple-600",
  },
  bg: {
    primary: theme === "dark" ? "bg-gray-900" : "bg-gray-50",
    secondary: theme === "dark" ? "bg-gray-800" : "bg-white",
    accent: theme === "dark" ? "bg-purple-900" : "bg-purple-50",
  },
  border: {
    primary: theme === "dark" ? "border-white/10" : "border-gray-200",
    accent: theme === "dark" ? "border-purple-500/30" : "border-purple-400/30",
  },
  gradient: {
    from: theme === "dark" ? "from-purple-900" : "from-purple-50",
    to: theme === "dark" ? "to-blue-900" : "to-blue-50",
  },
});

// Floating shape components
const FloatingShapes = ({ theme }) => {
  const colors = getThemeColors(theme);

  const shapes = [
    {
      icon: (
        <IoMdCube
          className={theme === "dark" ? "text-purple-300" : "text-purple-500"}
        />
      ),
      size: "text-4xl",
      delay: 0,
    },
    {
      icon: (
        <IoMdGlobe
          className={theme === "dark" ? "text-blue-300" : "text-blue-500"}
        />
      ),
      size: "text-5xl",
      delay: 1,
    },
    {
      icon: (
        <FiCpu
          className={theme === "dark" ? "text-green-300" : "text-green-500"}
        />
      ),
      size: "text-3xl",
      delay: 2,
    },
    {
      icon: (
        <FiZap
          className={theme === "dark" ? "text-pink-300" : "text-pink-500"}
        />
      ),
      size: "text-4xl",
      delay: 0.5,
    },
  ];

  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute opacity-40 ${
            i % 2 === 0 ? "top-1/4" : "bottom-1/4"
          } ${i % 3 === 0 ? "left-10" : i % 3 === 1 ? "right-20" : "left-1/3"}`}
          animate={{
            y: [0, i % 2 === 0 ? 20 : -20, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          <div className={shape.size}>{shape.icon}</div>
        </motion.div>
      ))}
    </>
  );
};

// Animated gradient text component
const GradientText = ({ text, from, to, size = "text-6xl", theme }) => {
  const defaultFrom = theme === "dark" ? "from-white" : "from-gray-900";
  const defaultTo = theme === "dark" ? "to-purple-300" : "to-purple-600";

  const words = text.split(" ");

  return (
    <h1 className={`${size} font-bold mb-6`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.15 }}
        >
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${
              i % 2 === 0 ? from || defaultFrom : to || defaultTo
            }`}
          >
            {word}
          </span>
        </motion.span>
      ))}
    </h1>
  );
};

// Interactive card component
const InteractiveCard = ({
  icon,
  title,
  description,
  features,
  link,
  version,
  delay = 0,
  theme,
}) => {
  const colors = getThemeColors(theme);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border ${
        colors.border.primary
      } ${
        theme === "dark"
          ? "bg-gradient-to-b from-white/5 to-transparent"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-500/10 to-blue-500/10"
            : "bg-gradient-to-br from-purple-100/50 to-blue-100/50"
        }`}
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 p-8">
        <motion.div
          className={`${
            theme === "dark" ? "text-purple-400" : "text-purple-600"
          } mb-6`}
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
        >
          {icon}
        </motion.div>

        <div className="flex items-center gap-3 mb-4">
          <h3 className={`text-xl font-semibold ${colors.text.primary}`}>
            {title}
          </h3>
          <span
            className={`text-xs px-2 py-1 ${
              theme === "dark"
                ? "bg-purple-900/50 text-purple-300"
                : "bg-purple-100 text-purple-700"
            } rounded-full`}
          >
            {version}
          </span>
        </div>

        <p className={`${colors.text.secondary} mb-6 leading-relaxed`}>
          {description}
        </p>

        <div className="space-y-3 text-sm mb-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start"
              whileHover={{ x: 5 }}
            >
              <span
                className={`${
                  theme === "dark" ? "text-purple-400" : "text-purple-600"
                } mr-3 mt-0.5`}
              >
                ⟣
              </span>
              <span className={colors.text.secondary}>{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`pt-6 border-t ${
            theme === "dark" ? "border-white/5" : "border-gray-100"
          }`}
          animate={{
            opacity: isHovered ? 1 : 0.8,
          }}
        >
          <Link
            href={link}
            className={`${
              theme === "dark" ? "text-purple-400" : "text-purple-600"
            } text-sm flex items-center gap-2 group`}
          >
            <span>Explore {title}</span>
            <motion.span
              animate={{
                x: isHovered ? 5 : 0,
              }}
            >
              <FiChevronRight />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animated background component
const AnimatedBackground = ({ theme }) => {
  const colors = getThemeColors(theme);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "bg-grid-white/[0.03]" : "bg-grid-gray-900/[0.02]"
        }`}
      ></div>

      {/* Animated gradient blobs */}
      <motion.div
        className={`absolute top-0 left-1/4 w-96 h-96 ${
          theme === "dark" ? "bg-purple-600/10" : "bg-purple-300/20"
        } rounded-full filter blur-3xl`}
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className={`absolute bottom-0 right-1/4 w-64 h-64 ${
          theme === "dark" ? "bg-indigo-600/10" : "bg-indigo-300/20"
        } rounded-full filter blur-3xl`}
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      ></motion.div>

      <motion.div
        className={`absolute top-1/3 right-1/3 w-80 h-80 ${
          theme === "dark" ? "bg-blue-600/10" : "bg-blue-300/20"
        } rounded-full filter blur-3xl`}
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -15, 15, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      ></motion.div>
    </div>
  );
};

export default function Home() {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const targetRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Wait until after mount to initialize scroll effects
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? targetRef : null,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  if (!isMounted) {
    return null;
  }

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
            ? "bg-gradient-to-b from-gray-900 to-purple-900"
            : "bg-gradient-to-b from-gray-50 to-purple-50"
        }`}
      >
        <AnimatedBackground theme={theme} />
        <FloatingShapes theme={theme} />

        {/* Hero Section */}
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
              <div className="flex items-center justify-center gap-6">
                <div className="relative">
                  <motion.img
                    src={
                      theme === "dark"
                        ? "/craftmind_logo.png"
                        : "/craftmind_logo.png"
                    }
                    alt="Craftmind Logo"
                    width={180}
                    height={48}
                    className="object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>

            <GradientText
              text="Crafting Digital Experiences"
              from={
                theme === "dark"
                  ? "from-white to-purple-300"
                  : "from-gray-900 to-purple-600"
              }
              to={
                theme === "dark"
                  ? "from-purple-300 to-blue-300"
                  : "from-purple-600 to-blue-600"
              }
              size="text-6xl md:text-7xl"
              theme={theme}
            />

            <motion.p
              className={`text-xl ${colors.text.secondary} mb-12 max-w-3xl mx-auto leading-relaxed`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              We create{" "}
              <span className={`${colors.text.accent} font-medium`}>
                high-performance
              </span>{" "}
              web applications,{" "}
              <span className={`${colors.text.accent} font-medium`}>
                intuitive mobile experiences
              </span>
              , and{" "}
              <span className={`${colors.text.accent} font-medium`}>
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
                  className={`px-8 py-4 border ${
                    theme === "dark" ? "border-white/20" : "border-gray-300"
                  } ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } rounded-lg ${
                    theme === "dark" ? "hover:bg-white/5" : "hover:bg-gray-100"
                  } transition-colors font-medium flex items-center justify-center gap-3`}
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
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-white/60" : "text-gray-600"
                } flex flex-wrap justify-center items-center gap-2`}
              >
                <span className="whitespace-nowrap">
                  Trusted by innovative companies like
                </span>
                <div className="flex items-center gap-4">
                  {["TechCorp", "WebSolutions", "AI Ventures"].map(
                    (company, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                      >
                        <span className="font-medium whitespace-nowrap">
                          {company}
                        </span>
                        {i < 2 && (
                          <div
                            className={`w-1 h-1 rounded-full ${
                              theme === "dark" ? "bg-white/30" : "bg-gray-400"
                            }`}
                          />
                        )}
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Quantum Divider */}
        <div className="relative h-32 overflow-hidden">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
                : "bg-gradient-to-b from-transparent via-purple-200/50 to-transparent"
            }`}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`h-px w-full bg-gradient-to-r from-transparent ${
                theme === "dark" ? "via-white/30" : "via-gray-400/50"
              } to-transparent`}
            ></div>
          </div>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div
              className={`w-32 h-32 rounded-full border-2 border-dashed ${
                theme === "dark" ? "border-white/10" : "border-gray-300"
              }`}
            ></div>
          </motion.div>
        </div>

        {/* Mission Statement */}
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
                <GradientText
                  text="Modern Development Approach"
                  from={
                    theme === "dark"
                      ? "from-purple-400 to-purple-300"
                      : "from-purple-600 to-purple-500"
                  }
                  to={
                    theme === "dark"
                      ? "from-blue-300 to-blue-400"
                      : "from-blue-500 to-blue-600"
                  }
                  size="text-4xl md:text-5xl"
                  theme={theme}
                />
                <p
                  className={`text-xl ${colors.text.secondary} leading-relaxed`}
                >
                  At <strong className={colors.text.accent}>Craftmind</strong>,
                  we combine cutting-edge technologies with proven methodologies
                  to deliver scalable solutions. Our{" "}
                  <span className={colors.text.accent}>
                    component-based architecture
                  </span>{" "}
                  ensures maintainability, while our{" "}
                  <span className={colors.text.accent}>
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
                    className={`bg-gradient-to-b ${
                      theme === "dark"
                        ? "from-white/5 to-white/2 border-white/10 hover:border-purple-400/30"
                        : "from-white/90 to-white/50 border-gray-200 hover:border-purple-500/30"
                    } p-8 rounded-xl border transition-all group relative overflow-hidden`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className={`absolute -right-10 -top-10 w-32 h-32 ${
                        theme === "dark"
                          ? "bg-purple-500/10"
                          : "bg-purple-300/20"
                      } rounded-full filter blur-xl group-hover:opacity-50 transition-opacity`}
                    ></div>
                    <div className="relative z-10">
                      <div
                        className={`${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        } mb-4 text-3xl`}
                      >
                        {card.icon}
                      </div>
                      <h3
                        className={`text-xl font-semibold mb-3 ${colors.text.primary}`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`${colors.text.secondary} text-sm leading-relaxed`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Neural Network Visualization */}
        <section className="py-20 relative">
          <div
            className={`absolute inset-0 overflow-hidden ${
              theme === "dark" ? "opacity-10" : "opacity-5"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                theme === "dark"
                  ? "bg-[url('/neural-pattern-dark.png')]"
                  : "bg-[url('/neural-pattern-light.png')]"
              } bg-[length:300px_300px]`}
            ></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <GradientText
                text="Our Integrated Approach"
                from={
                  theme === "dark"
                    ? "from-purple-400 to-purple-300"
                    : "from-purple-600 to-purple-500"
                }
                to={
                  theme === "dark"
                    ? "from-blue-300 to-blue-400"
                    : "from-blue-500 to-blue-600"
                }
                size="text-4xl md:text-5xl"
                theme={theme}
              />
              <motion.p
                className={`text-xl ${colors.text.secondary} leading-relaxed`}
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
                <motion.div
                  className={`w-64 h-64 rounded-full border-2 border-dashed ${
                    theme === "dark" ? "border-white/20" : "border-gray-300"
                  } flex items-center justify-center`}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    className={`w-48 h-48 rounded-full border ${
                      theme === "dark" ? "border-white/10" : "border-gray-200"
                    } flex items-center justify-center`}
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className={`w-32 h-32 rounded-full ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                          : "bg-gradient-to-br from-purple-200/50 to-blue-200/50"
                      } flex items-center justify-center`}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <FiCode
                        className={`text-5xl ${
                          theme === "dark"
                            ? "text-purple-400"
                            : "text-purple-600"
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {[
                {
                  position: "top-1/4 left-1/4",
                  color:
                    theme === "dark"
                      ? "from-purple-600 to-purple-400"
                      : "from-purple-700 to-purple-500",
                  icon: <FiCode className="text-xl" />,
                },
                {
                  position: "top-1/3 right-1/4",
                  color:
                    theme === "dark"
                      ? "from-blue-600 to-blue-400"
                      : "from-blue-700 to-blue-500",
                  icon: <FiSmartphone className="text-xl" />,
                },
                {
                  position: "bottom-1/4 left-1/3",
                  color:
                    theme === "dark"
                      ? "from-green-600 to-green-400"
                      : "from-green-700 to-green-500",
                  icon: <FiCpu className="text-xl" />,
                },
                {
                  position: "bottom-1/3 right-1/3",
                  color:
                    theme === "dark"
                      ? "from-pink-600 to-pink-400"
                      : "from-pink-700 to-pink-500",
                  icon: <FiUsers className="text-xl" />,
                },
              ].map((node, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${
                    node.position
                  } w-16 h-16 rounded-full bg-gradient-to-br ${
                    node.color
                  } flex items-center justify-center text-white shadow-lg ${
                    theme === "dark" ? "border-white/10" : "border-white/20"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {node.icon}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-28 relative">
          <div className="mt-1">
            <motion.img
              src={theme === "dark" ? "/hero_image.png" : "/hero_image.png"}
              alt="Hero"
              width={198}
              height={44}
              className="object-contain mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GradientText
                text="Our Services"
                from={
                  theme === "dark"
                    ? "from-purple-400 to-purple-300"
                    : "from-purple-600 to-purple-500"
                }
                to={
                  theme === "dark"
                    ? "from-blue-300 to-blue-400"
                    : "from-blue-500 to-blue-600"
                }
                size="text-4xl md:text-5xl"
                theme={theme}
              />
              <p
                className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}
              >
                Comprehensive solutions tailored to your business requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <InteractiveCard
                icon={<FiCode className="text-4xl" />}
                title="Web Development"
                version="v4.2"
                description="Modern web applications built with cutting-edge technologies"
                features={[
                  "React/Next.js applications",
                  "Node.js backends",
                  "Responsive UI/UX design",
                  "API integrations",
                ]}
                link="/web-development"
                delay={0}
                theme={theme}
              />

              <InteractiveCard
                icon={<FiSmartphone className="text-4xl" />}
                title="Mobile Apps"
                version="3.1"
                description="Cross-platform mobile solutions for iOS and Android"
                features={[
                  "React Native development",
                  "Native performance",
                  "App store deployment",
                  "Offline capabilities",
                ]}
                link="/mobile-apps"
                delay={0.1}
                theme={theme}
              />

              <InteractiveCard
                icon={<FiCpu className="text-4xl" />}
                title="AI Integration"
                version="LLM"
                description="Smart solutions powered by artificial intelligence"
                features={[
                  "Custom chatbots",
                  "Machine learning models",
                  "Process automation",
                  "Data analysis",
                ]}
                link="/ai-integration"
                delay={0.2}
                theme={theme}
              />
            </div>
          </div>
        </section>

        {/* Future Tech Showcase */}
        <section className="py-28 relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-[url('/grid-pattern.png')] bg-[length:200px_200px] ${
              theme === "dark" ? "opacity-10" : "opacity-5"
            }`}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <GradientText
                text="Innovating With Modern Tech"
                from={
                  theme === "dark"
                    ? "from-purple-400 to-purple-300"
                    : "from-purple-600 to-purple-500"
                }
                to={
                  theme === "dark"
                    ? "from-blue-300 to-blue-400"
                    : "from-blue-500 to-blue-600"
                }
                size="text-4xl md:text-5xl"
                theme={theme}
              />
              <motion.p
                className={`text-xl ${colors.text.secondary} leading-relaxed`}
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
                  bgColor: theme === "dark" ? "bg-purple-600" : "bg-purple-500",
                  textColor: "text-white",
                },
                {
                  icon: <FiSmartphone className="text-3xl" />,
                  title: "React Native",
                  description:
                    "Creating cross-platform mobile apps with native performance",
                  bgColor: theme === "dark" ? "bg-blue-600" : "bg-blue-500",
                  textColor: "text-white",
                },
                {
                  icon: <FiCpu className="text-3xl" />,
                  title: "AI APIs",
                  description:
                    "Integrating cutting-edge AI capabilities into your applications",
                  bgColor: theme === "dark" ? "bg-green-600" : "bg-green-500",
                  textColor: "text-white",
                },
                {
                  icon: <FiZap className="text-3xl" />,
                  title: "Edge Computing",
                  description:
                    "Deploying globally distributed applications for maximum performance",
                  bgColor: theme === "dark" ? "bg-orange-600" : "bg-orange-500",
                  textColor: "text-white",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-b ${
                    theme === "dark"
                      ? "from-white/5 to-transparent border-white/10 hover:border-purple-400/30"
                      : "from-gray-50 to-white border-gray-200 hover:border-purple-500/30"
                  } p-8 rounded-xl border transition-all group shadow-sm hover:shadow-md`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className={`p-4 rounded-lg ${tech.bgColor} ${tech.textColor} text-3xl`}
                      whileHover={{ rotate: 10 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <div>
                      <h3
                        className={`text-xl font-semibold mb-2 ${colors.text.primary}`}
                      >
                        {tech.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${colors.text.secondary}`}
                      >
                        {tech.description}
                      </p>
                      <div className="mt-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-white/5 text-white/60"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
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

        {/* Why Choose Us Section */}
        <section className="py-28 relative overflow-hidden">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-[url('/grid-pattern-dark.png')]"
                : "bg-[url('/grid-pattern-light.png')]"
            } bg-[length:200px_200px] opacity-5`}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <GradientText
                text="Why Choose Craftmind"
                from={
                  theme === "dark"
                    ? "from-purple-400 to-purple-300"
                    : "from-purple-600 to-purple-500"
                }
                to={
                  theme === "dark"
                    ? "from-blue-300 to-blue-400"
                    : "from-blue-500 to-blue-600"
                }
                size="text-4xl md:text-5xl"
                theme={theme}
              />
              <motion.p
                className={`text-xl ${colors.text.secondary} mt-6 leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We go beyond traditional development to deliver exceptional
                value and results.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <FiZap className="text-4xl" />,
                  title: "Lightning Fast",
                  description:
                    "Optimized performance with 60+ Lighthouse scores guaranteed",
                  highlight: "Performance First",
                },
                {
                  icon: <FiUsers className="text-4xl" />,
                  title: "User-Centric",
                  description:
                    "Designs that prioritize intuitive experiences and accessibility",
                  highlight: "UX Focused",
                },
                {
                  icon: <FiCode className="text-4xl" />,
                  title: "Future-Proof",
                  description:
                    "Built with scalable architectures and modern tech stacks",
                  highlight: "Sustainable Code",
                },
                {
                  icon: <FiCpu className="text-4xl" />,
                  title: "AI-Enhanced",
                  description:
                    "Smart features that learn and adapt to user behavior",
                  highlight: "Intelligent Systems",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl border ${
                    theme === "dark"
                      ? "border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-purple-400/30"
                      : "border-gray-200 bg-white hover:border-purple-500/30"
                  } transition-all group relative overflow-hidden`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`absolute -right-10 -top-10 w-32 h-32 ${
                      theme === "dark" ? "bg-purple-500/10" : "bg-purple-200/30"
                    } rounded-full filter blur-xl group-hover:opacity-50 transition-opacity`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`p-4 mb-6 rounded-lg inline-flex ${
                        theme === "dark"
                          ? "bg-purple-900/30 text-purple-400"
                          : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <h3
                      className={`text-xl font-semibold mb-3 ${colors.text.primary}`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`${colors.text.secondary} mb-4 text-sm leading-relaxed`}
                    >
                      {item.description}
                    </p>

                    <div
                      className={`text-xs font-medium px-3 py-1 rounded-full inline-block ${
                        theme === "dark"
                          ? "bg-purple-900/50 text-purple-300"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {item.highlight}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <div
              className={`mt-20 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto p-8 rounded-xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10"
                  : "bg-gradient-to-br from-purple-50 to-blue-50 border border-gray-200"
              }`}
            >
              {[
                {
                  value: "100%",
                  label: "Client Satisfaction",
                },
                {
                  value: "40+",
                  label: "Projects Completed",
                },
                {
                  value: "5x",
                  label: "Performance Boost",
                },
                {
                  value: "24/7",
                  label: "Support Available",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`text-4xl font-bold mb-2 ${
                      theme === "dark" ? "text-purple-300" : "text-purple-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              className={`mt-20 max-w-3xl mx-auto p-8 rounded-xl ${
                theme === "dark"
                  ? "bg-gradient-to-b from-white/5 to-transparent border border-white/10"
                  : "bg-white border border-gray-200"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <h4 className={`font-semibold ${colors.text.primary}`}>
                    John Doe
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    CEO, TechCorp
                  </p>
                </div>
              </div>
              <blockquote className={`text-lg italic ${colors.text.secondary}`}>
                "Craftmind transformed our digital presence with their
                innovative approach. Their team delivered beyond our
                expectations with a solution that's both beautiful and
                performant."
              </blockquote>
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${
                      theme === "dark" ? "text-yellow-400" : "text-yellow-500"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-br from-purple-900/80 to-blue-900/80"
                : "bg-gradient-to-br from-purple-500/80 to-blue-500/80"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                theme === "dark"
                  ? "bg-[url('/grid-pattern.png')]"
                  : "bg-[url('/grid-pattern-light.png')]"
              } bg-[length:200px_200px] opacity-20`}
            ></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GradientText
                text="Ready to Build Together?"
                from="from-white to-purple-300"
                to="from-purple-300 to-blue-300"
                size="text-4xl md:text-5xl"
                theme={theme}
              />
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

          {/* Floating particles */}
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
