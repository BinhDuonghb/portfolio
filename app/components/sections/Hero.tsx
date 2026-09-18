"use client";

import Image from "next/image";
import { ChevronDown, Code, Users, Mail } from "lucide-react";

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-40 pb-24 px-6 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Label */}
            <div className="inline-block">
              <span className="text-xs md:text-sm text-[#3B82F6] font-bold tracking-widest uppercase">
                Full-Stack Developer
              </span>
            </div>

            {/* Main Heading - What I Build */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] leading-tight">
                Hi, I'm Duong.
                <br />
                I Build.
                <br />
                You Grow.
              </h2>
            </div>

            {/* Description - What I Work With */}
            <p className="text-sm md:text-base text-[#9CA3AF] leading-relaxed max-w-lg">
              I develop practical software across frontend, backend, and database systems using React, Next.js, Node.js, NestJS, C#, and ASP.NET Core.
            </p>

            {/* Career Goal */}
            <div className="space-y-2 pt-2">
              <p className="text-sm md:text-base text-[#9CA3AF] font-medium">
                Currently seeking opportunities with international teams.
              </p>
              <p className="text-sm text-[#6B7280]">
                Internship & Junior roles • Remote-friendly
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleScroll("projects")}
                className="group px-8 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-[#F5F5F5] font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href="mailto:duonghb1577@gmail.com"
                className="group px-8 py-3 border border-[#25282C] hover:border-[#3B82F6] text-[#9CA3AF] hover:text-[#3B82F6] font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Contact Me</span>
                <Mail size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Name - Secondary Identity */}
            <div className="pt-8 border-t border-[#25282C]">
              <p className="text-sm text-[#6B7280]">Phan Binh Duong</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/BinhDuonghb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-[#3B82F6] transition-all duration-200 hover:scale-110"
                title="GitHub"
                aria-label="Visit GitHub profile"
              >
                <Code size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/phan-duong-4072a0355/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] hover:text-[#3B82F6] transition-all duration-200 hover:scale-110"
                title="LinkedIn"
                aria-label="Visit LinkedIn profile"
              >
                <Users size={24} />
              </a>
              <a
                href="mailto:duonghb1577@gmail.com"
                className="text-[#6B7280] hover:text-[#3B82F6] transition-all duration-200 hover:scale-110"
                title="Email"
                aria-label="Send email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Personal Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Animated background elements */}
              <div className="absolute inset-0 rounded-2xl border border-[#3B82F6]"></div>
              <div className="absolute inset-4 rounded-2xl border border-[#3B82F6]/30"></div>

              {/* Personal Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/imgs/me/me.png"
                  alt="Phan Binh Duong"
                  fill
                  className="object-cover"
                  sizes="320px"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Accent line */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
