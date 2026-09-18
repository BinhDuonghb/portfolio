"use client";

import { Mail, Code, Users } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[#25282C]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Section */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[#F5F5F5] hover:text-[#3B82F6] transition-colors font-bold text-lg mb-2"
              aria-label="Scroll to top"
            >
              Duong<span className="text-[#3B82F6]">.</span>
            </button>
            <p className="text-[#6B7280] text-sm">
              © {currentYear} Phan Binh Duong. All rights reserved.
            </p>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/BinhDuonghb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111315] border border-[#25282C] text-[#6B7280] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-all duration-200"
              title="GitHub"
              aria-label="Visit GitHub profile"
            >
              <Code size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/phan-duong-4072a0355/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#111315] border border-[#25282C] text-[#6B7280] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-all duration-200"
              title="LinkedIn"
              aria-label="Visit LinkedIn profile"
            >
              <Users size={20} />
            </a>
            <a
              href="mailto:duonghb1577@gmail.com"
              className="p-2 rounded-lg bg-[#111315] border border-[#25282C] text-[#6B7280] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-all duration-200"
              title="Email"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
