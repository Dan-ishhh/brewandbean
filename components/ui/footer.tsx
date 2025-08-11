import { Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="py-16 bg-[#4B2E2B] text-white dark:bg-[#18181c] dark:text-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center"
                // style={{
                //   background:
                //     "linear-gradient(to bottom right, #6F4E37, #4B2E2B)",
                // }}
              >
                <Image
                  src="/coffee-cup.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-10 h-10"
                />
              </div>
              <span className="text-2xl font-bold text-[#FAF3E0] dark:text-[#e6b800]">
                Brew & Bean
              </span>
            </Link>
            <p className="mb-6 leading-relaxed max-w-md text-[#FAF3E0] dark:text-[#e6e6e6]">
              Your neighborhood cafe where quality meets comfort. Join us for
              exceptional coffee, warm hospitality, and a welcoming community
              atmosphere.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#FAF3E0] dark:text-[#e6b800]">
              Quick Links
            </h4>
            <div className="space-y-3 text-[#FAF3E0] dark:text-[#e6e6e6]">
              <p>
                <Link
                  href="/menu"
                  className="hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </p>
              <p>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </p>
              <p>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#F5F5DC] dark:text-[#e6b800]">
              Contact Info
            </h4>
            <div className="space-y-3 text-[#FAF3E0] dark:text-[#e6e6e6]">
              <p>123 Coffee Street</p>
              <p>Downtown District</p>
              <p>(555) 123-BREW</p>
              <p>hello@brewandbean.com</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center border-[#6F4E37] dark:border-[#333] text-[#FAF3E0] dark:text-[#e6e6e6]">
          <p>
            &copy; 2025 Brew & Bean. All rights reserved. Made with ❤️ for
            coffee lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
