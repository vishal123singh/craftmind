"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiCode,
  FiLayers,
  FiSmartphone,
  FiCpu,
  FiMenu,
  FiX,
  FiUser,
  FiMail,
  FiChevronDown,
} from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import ThemeToggle from "@/app/components/ThemeButton";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const servicesItems = [
    {
      name: "Web Development",
      href: "/web-development",
      icon: <FaReact className="text-lg" />,
    },
    {
      name: "Mobile Apps",
      href: "/mobile-apps",
      icon: <FiSmartphone className="text-lg" />,
    },
    {
      name: "AI Integration",
      href: "/ai-integration",
      icon: <FiCpu className="text-lg" />,
    },
  ];

  const otherNavItems = [
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`fixed w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          theme === "dark"
            ? "bg-transparent backdrop-blur-md"
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <FiCode className="text-2xl text-amber-500" />
              <span
                className={`text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Craftmind
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    theme === "dark"
                      ? servicesItems.some((item) =>
                          pathname.startsWith(item.href)
                        )
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                      : servicesItems.some((item) =>
                          pathname.startsWith(item.href)
                        )
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span>Services</span>
                  <FiChevronDown className="transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className={`absolute left-0 top-full mt-2 w-56 origin-top-left rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="py-1">
                    {servicesItems.map((item) => {
                      const isActive = pathname.startsWith(item.href);
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center gap-2 px-4 py-2 ${
                            theme === "dark"
                              ? isActive
                                ? "bg-gray-700 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                              : isActive
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                        >
                          {item.icon}
                          {item.name}
                          {isActive && (
                            <div
                              className={`absolute right-3 h-1.5 w-1.5 rounded-full ${
                                theme === "dark"
                                  ? "bg-amber-400"
                                  : "bg-amber-500"
                              }`}
                            />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Other Navigation Items */}
              {otherNavItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        theme === "dark"
                          ? isActive
                            ? "text-white"
                            : "text-gray-300 hover:text-white"
                          : isActive
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {isActive && (
                      <div
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-4/5 ${
                          theme === "dark" ? "bg-amber-400" : "bg-amber-500"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              {/* <ThemeToggle /> */}
              <button
                className="md:hidden p-2 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <FiX className="text-2xl" />
                ) : (
                  <FiMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 pt-20 ${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          } md:hidden`}
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col gap-1">
              {/* Services Dropdown Mobile */}
              <div className="mb-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-lg ${
                    theme === "dark"
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <FiCode className="text-lg" />
                    <span>Services</span>
                  </div>
                  <FiChevronDown
                    className={`transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div
                    className={`ml-6 mt-1 space-y-1 ${
                      theme === "dark"
                        ? "border-l border-gray-700"
                        : "border-l border-gray-200"
                    }`}
                  >
                    {servicesItems.map((item) => {
                      const isActive = pathname.startsWith(item.href);
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                            theme === "dark"
                              ? isActive
                                ? "text-white bg-gray-800"
                                : "text-gray-400 hover:text-white hover:bg-gray-800"
                              : isActive
                              ? "text-gray-900 bg-gray-100"
                              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Other Navigation Items Mobile */}
              {otherNavItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg relative ${
                      theme === "dark"
                        ? isActive
                          ? "text-white bg-gray-800"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                        : isActive
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isActive && (
                      <div
                        className={`absolute left-0 bottom-0 h-0.5 w-full ${
                          theme === "dark" ? "bg-amber-400" : "bg-amber-500"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
