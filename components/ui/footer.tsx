import { Coffee } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="text-white py-16" style={{ backgroundColor: "#4B2E2B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, #6F4E37, #4B2E2B)",
                }}
              >
                <Coffee className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold">Brew & Bean</span>
            </Link>
            <p
              className="mb-6 leading-relaxed max-w-md"
              style={{ color: "#FAF3E0" }}
            >
              Your neighborhood cafe where quality meets comfort. Join us for
              exceptional coffee, warm hospitality, and a welcoming community
              atmosphere.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6" style={{ color: "#FAF3E0" }}>
              Quick Links
            </h4>
            <div className="space-y-3" style={{ color: "#FAF3E0" }}>
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
                  About Us
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
            <h4 className="font-bold mb-6" style={{ color: "#F5F5DC" }}>
              Contact Info
            </h4>
            <div className="space-y-3" style={{ color: "#FAF3E0" }}>
              <p>123 Coffee Street</p>
              <p>Downtown District</p>
              <p>(555) 123-BREW</p>
              <p>hello@brewandbean.com</p>
            </div>
          </div>
        </div>

        <div
          className="border-t mt-12 pt-8 text-center"
          style={{ borderColor: "#6F4E37", color: "#FAF3E0" }}
        >
          <p>
            &copy; 2024 Brew & Bean. All rights reserved. Made with ❤️ for
            coffee lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
