// components/ThemeButton.js
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/app/context/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle({ inline = false }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return inline ? null : (
      <div className="fixed top-6 right-6 z-50 p-3 rounded-full w-[46px] h-[46px]" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`${
        inline
          ? "p-3 rounded-full border backdrop-blur-sm"
          : "fixed top-6 right-6 z-50 p-3 rounded-full border backdrop-blur-sm"
      } ${
        theme === "dark"
          ? "bg-white/10 hover:bg-white/20 border-white/10"
          : "bg-black/5 hover:bg-black/10 border-gray-200"
      } transition-all`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "dark" ? (
          <FiSun className="text-yellow-300" size={20} />
        ) : (
          <FiMoon className="text-indigo-600" size={20} />
        )}
      </motion.div>
    </motion.button>
  );
}
