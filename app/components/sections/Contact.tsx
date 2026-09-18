"use client";

import { useState } from "react";
import { Mail, Phone, Send, Download, Code, Users } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status.fieldErrors?.[e.target.name]) {
      setStatus({
        ...status,
        fieldErrors: {
          ...status.fieldErrors,
          [e.target.name]: "",
        },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
          fieldErrors: data.fieldErrors || {},
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  const getFieldError = (fieldName: string): string | undefined => {
    return status.fieldErrors?.[fieldName];
  };

  return (
    <section id="contact" className="py-24 px-6 md:py-28 bg-[#0F1012]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="05 / CONTACT"
          title="Get In Touch"
          description="I'm open to opportunities related to Full-Stack Development, Backend Development, and software engineering. Feel free to reach out."
        />

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="p-6 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#3B82F6]/10">
                  <Mail size={20} className="text-[#3B82F6]" />
                </div>
                <p className="text-sm text-[#6B7280] font-medium">Email</p>
              </div>
              <a
                href="mailto:duonghb1577@gmail.com"
                className="text-[#F5F5F5] hover:text-[#3B82F6] transition-colors font-medium"
              >
                duonghb1577@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#3B82F6]/10">
                  <Phone size={20} className="text-[#3B82F6]" />
                </div>
                <p className="text-sm text-[#6B7280] font-medium">Phone</p>
              </div>
              <a
                href="tel:0857551767"
                className="text-[#F5F5F5] hover:text-[#3B82F6] transition-colors font-medium"
              >
                +84 857 551 767
              </a>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200">
              <p className="text-sm text-[#6B7280] font-medium mb-4">
                Social Links
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/BinhDuonghb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] hover:text-[#2563EB] hover:bg-[#3B82F6]/20 transition-all duration-200"
                  title="GitHub"
                  aria-label="Visit GitHub profile"
                >
                  <Code size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/phan-duong-4072a0355/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] hover:text-[#2563EB] hover:bg-[#3B82F6]/20 transition-all duration-200"
                  title="LinkedIn"
                  aria-label="Visit LinkedIn profile"
                >
                  <Users size={20} />
                </a>
                <a
                  href="mailto:duonghb1577@gmail.com"
                  className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] hover:text-[#2563EB] hover:bg-[#3B82F6]/20 transition-all duration-200"
                  title="Email"
                  aria-label="Send email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* CV Download */}
            <div className="p-6 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200">
              <p className="text-sm text-[#6B7280] font-medium mb-4">
                Download CV
              </p>
              <a
                href="/Phan-Binh-Duong-100926.171203.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-[#F5F5F5] font-semibold rounded-lg transition-all duration-200 hover:-translate-y-1"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-sm text-[#9CA3AF] mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-[#111315] border rounded-lg text-[#F5F5F5] placeholder-[#6B7280] focus:outline-none transition-all duration-200 ${
                  getFieldError("name")
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-[#25282C] focus:border-[#3B82F6]"
                }`}
                placeholder="Your name"
              />
              {getFieldError("name") && (
                <p className="text-xs text-red-400 mt-1.5">
                  {getFieldError("name")}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm text-[#9CA3AF] mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-[#111315] border rounded-lg text-[#F5F5F5] placeholder-[#6B7280] focus:outline-none transition-all duration-200 ${
                  getFieldError("email")
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-[#25282C] focus:border-[#3B82F6]"
                }`}
                placeholder="your.email@example.com"
              />
              {getFieldError("email") && (
                <p className="text-xs text-red-400 mt-1.5">
                  {getFieldError("email")}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm text-[#9CA3AF] mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 bg-[#111315] border rounded-lg text-[#F5F5F5] placeholder-[#6B7280] focus:outline-none transition-all duration-200 resize-none ${
                  getFieldError("message")
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-[#25282C] focus:border-[#3B82F6]"
                }`}
                placeholder="Your message"
              />
              {getFieldError("message") && (
                <p className="text-xs text-red-400 mt-1.5">
                  {getFieldError("message")}
                </p>
              )}
            </div>

            {/* Status Messages */}
            {status.type === "success" && (
              <div className="p-4 rounded-lg text-sm font-medium bg-emerald-500/10 border border-emerald-500/50 text-emerald-400">
                {status.message}
              </div>
            )}

            {status.type === "error" &&
              !Object.keys(status.fieldErrors || {}).length && (
                <div className="p-4 rounded-lg text-sm font-medium bg-red-500/10 border border-red-500/50 text-red-400">
                  {status.message}
                </div>
              )}

            {status.type === "loading" && (
              <div className="p-4 rounded-lg text-sm font-medium bg-blue-500/10 border border-blue-500/50 text-blue-400 flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full px-4 py-3 bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#3B82F6]/50 text-[#F5F5F5] font-semibold rounded-lg transition-all duration-200 disabled:cursor-not-allowed hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
