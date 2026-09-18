"use client";

import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#08090A]/80 backdrop-blur-md border-b border-[#25282C]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 text-xl font-bold text-[#F5F5F5] hover:text-[#3B82F6] transition-colors"
            aria-label="Go to home"
          >
            Duong<span className="text-[#3B82F6]">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="text-sm text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-200"
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* GitHub Link + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/BinhDuonghb"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-200"
              title="GitHub"
              aria-label="Visit GitHub profile"
            >
              <Code size={18} />
              <span>GitHub</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#25282C] space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="block w-full text-left text-sm text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-200 py-2"
              >
                {section.label}
              </button>
            ))}
            <a
              href="https://github.com/BinhDuonghb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#3B82F6] transition-colors duration-200 py-2"
              title="GitHub"
              aria-label="Visit GitHub profile"
            >
              <Code size={18} />
              <span>GitHub</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
