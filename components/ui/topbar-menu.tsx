"use client";
import Link from "next/link";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CartButton } from "@/components/cart/cart-button";
import Image from "next/image";

interface TopbarMenuProps {
  // Removed activePage prop
}

export function TopbarMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div
        className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border"
        style={{ borderColor: "#F5F5DC" }}
      >
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  // style={{
                  //   background:
                  //     "linear-gradient(to bottom right, #6F4E37, #4B2E2B)",
                  // }}
                >
                  {/* <Coffee className="h-6 w-6 text-white" />
                  <img
                src="/coffee-cup.png"
                alt="Cafe"
                className="w-5 h-5 rounded-full"
              /> */}
                  <Image
                    src="/coffee-cup.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-10 h-10"
                  />
                </div>
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: "#F5F5DC" }}
                ></div>
              </div>
              <span className="text-xl font-bold" style={{ color: "#4B2E2B" }}>
                <span
                  className="hidden md:inline text-xl font-bold"
                  style={{ color: "#4B2E2B" }}
                >
                  Brew & Bean
                </span>
              </span>
              <span
                className="inline md:hidden text-xl font-bold"
                style={{ color: "#4B2E2B" }}
              >
                <span
                  className="inline md:hidden text-xl font-bold"
                  style={{ color: "#4B2E2B" }}
                ></span>
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
                      ${isActive ? "bg-[#6F4E37] text-white" : "text-[#4B2E2B]"}
                      hover:bg-[#F5F5DC] hover:text-[#4B2E2B]`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <CartButton />

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
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t py-4 border-[#F5F5DC]">
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
                            ? "bg-[#6F4E37] text-white"
                            : "text-[#4B2E2B]"
                        }
                        hover:bg-[#F5F5DC] hover:text-[#4B2E2B]`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
