"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CartButton } from "@/components/cart/cart-button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import Select from "react-select";

export function TopbarMenu() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
  ];

  const { language, setLanguage } = useLanguage();
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div
        className="backdrop-blur-lg rounded-2xl shadow-xl border transition-colors duration-300 bg-white/95 dark:bg-[#18181b] border-[#F5F5DC] dark:border-[#222]"
        style={{
          boxShadow:
            theme === "dark"
              ? "0 6px 32px 0 rgba(111, 78, 55, 0.18), 0 1.5px 8px 0 rgba(111, 78, 55, 0.22)"
              : undefined,
        }}
      >
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/coffee-cup.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-10 h-10"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse bg-[#F5F5DC] dark:bg-[#6F4E37]"></div>
              </div>
              <span className="text-xl font-bold text-[#4B2E2B] dark:text-[#e6e6e6]">
                <span className="hidden md:inline text-xl font-bold text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Brew & Bean
                </span>
              </span>
              <span className="inline md:hidden text-xl font-bold text-[#4B2E2B] dark:text-[#F5F5DC]">
                <span className="inline md:hidden text-xl font-bold text-[#4B2E2B] dark:text-[#F5F5DC]"></span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#6F4E37] text-white dark:bg-[#e6e6e6] dark:text-[#18181b]"
                          : "text-[#4B2E2B] dark:text-[#e6e6e6]"
                      }
                      hover:bg-[#F5F5DC] hover:text-[#4B2E2B] dark:hover:bg-[#222] dark:hover:text-[#e6e6e6]`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              {/* Language Selector Desktop */}
              <div className="hidden md:flex w-[90px] min-w-[90px] max-w-[140px]">
                <Select
                  value={{
                    value: language,
                    label: language === "en" ? "English" : "हिन्दी",
                  }}
                  onChange={(option) => {
                    if (option) setLanguage(option.value);
                  }}
                  options={[
                    { value: "en", label: "English" },
                    { value: "hi", label: "हिन्दी" },
                  ]}
                  isSearchable={false}
                  classNamePrefix="langselect"
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused
                        ? theme === "dark"
                          ? "#333"
                          : "#FAF3E0"
                        : theme === "dark"
                        ? "#222"
                        : "#FFF8F0",
                      borderColor: "#4B2E2B",
                      boxShadow: "0 2px 12px 0 rgba(111, 78, 55, 0.10)",
                      borderRadius: 16,
                      minHeight: 38,
                      paddingLeft: 4,
                      paddingRight: 4,
                      width: "100%",
                      minWidth: "90px",
                      maxWidth: "140px",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: theme === "dark" ? "#e6b800" : "#4B2E2B",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: theme === "dark" ? "#222" : "#FFF8F0",
                      borderRadius: 16,
                      boxShadow: "0 4px 24px 0 rgba(111, 78, 55, 0.15)",
                      marginTop: 2,
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isSelected
                        ? "#e6b800"
                        : state.isFocused
                        ? theme === "dark"
                          ? "#333"
                          : "#FAF3E0"
                        : theme === "dark"
                        ? "#222"
                        : "#FFF8F0",
                      color: state.isSelected
                        ? "#222"
                        : theme === "dark"
                        ? "#e6b800"
                        : "#4B2E2B",
                      fontWeight: state.isSelected ? "bold" : "normal",
                      fontSize: "1rem",
                      borderRadius: 12,
                      paddingLeft: 10,
                      paddingRight: 10,
                    }),
                  }}
                />
              </div>
              <CartButton />

              {/* Theme Switch - Desktop & Mobile */}
              <button
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#F5F5DC] bg-[#FFF8F0] dark:bg-[#222] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6F4E37]"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  {theme === "dark" ? (
                    <Sun className="h-6 w-6 text-yellow-400 transition-transform duration-300 rotate-0" />
                  ) : (
                    <Moon className="h-6 w-6 text-[#6F4E37] transition-transform duration-300 rotate-0" />
                  )}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl transition-colors"
                style={{
                  backgroundColor: isMobileMenuOpen ? "#F5F5DC" : "transparent",
                  color: "#4B2E2B",
                }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6 dark:text-[#F5F5DC]" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t py-4 border-[#F5F5DC] dark:border-[#222] bg-white/95 dark:bg-[#18181b]">
              <div className="space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#6F4E37] text-white dark:bg-[#F5F5DC] dark:text-[#18181b]"
                            : "text-[#4B2E2B] dark:text-[#F5F5DC]"
                        }
                        hover:bg-[#F5F5DC] hover:text-[#4B2E2B] dark:hover:bg-[#222] dark:hover:text-[#F5F5DC]`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                {/* Language Selector Mobile */}
                <div className="w-[110px] min-w-[90px] max-w-[140px]">
                  <Select
                    value={{
                      value: language,
                      label: language === "en" ? "English" : "हिन्दी",
                    }}
                    onChange={(option) => {
                      if (option) setLanguage(option.value);
                    }}
                    options={[
                      { value: "en", label: "English" },
                      { value: "hi", label: "हिन्दी" },
                    ]}
                    isSearchable={false}
                    classNamePrefix="langselect"
                    components={{
                      DropdownIndicator: () => null,
                      IndicatorSeparator: () => null,
                    }}
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                          ? theme === "dark"
                            ? "#333"
                            : "#FAF3E0"
                          : theme === "dark"
                          ? "#222"
                          : "#FFF8F0",
                        borderColor: "#4B2E2B",
                        boxShadow: "0 2px 12px 0 rgba(111, 78, 55, 0.10)",
                        borderRadius: 16,
                        minHeight: 38,
                        paddingLeft: 4,
                        paddingRight: 4,
                        width: "100%",
                        minWidth: "90px",
                        maxWidth: "140px",
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: theme === "dark" ? "#e6b800" : "#4B2E2B",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: theme === "dark" ? "#222" : "#FFF8F0",
                        borderRadius: 16,
                        boxShadow: "0 4px 24px 0 rgba(111, 78, 55, 0.15)",
                        marginTop: 2,
                        width: base.width || "100%",
                        minWidth: base.minWidth || "90px",
                        maxWidth: base.maxWidth || "140px",
                        left: "0",
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected
                          ? "#e6b800"
                          : state.isFocused
                          ? theme === "dark"
                            ? "#333"
                            : "#FAF3E0"
                          : theme === "dark"
                          ? "#222"
                          : "#FFF8F0",
                        color: state.isSelected
                          ? "#222"
                          : theme === "dark"
                          ? "#e6b800"
                          : "#4B2E2B",
                        fontWeight: state.isSelected ? "bold" : "normal",
                        fontSize: "1rem",
                        borderRadius: 12,
                        paddingLeft: 10,
                        paddingRight: 10,
                      }),
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
