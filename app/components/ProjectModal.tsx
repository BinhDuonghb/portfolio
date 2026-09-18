'use client';

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  screenshots: string[];
  demoLink?: string | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  fullDescription,
  technologies,
  screenshots,
  demoLink,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111315] border border-[#25282C] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 md:p-8 border-b border-[#25282C] bg-[#111315]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5F5]">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#25282C] rounded-lg transition-colors duration-200"
          >
            <X size={24} className="text-[#9CA3AF]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Screenshots Carousel */}
          {screenshots.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#F5F5F5]">
                Project Showcase
              </h3>
              <div className="relative w-full bg-gradient-to-br from-[#1a1d21] to-[#0f1012] border border-[#25282C] rounded-xl overflow-hidden flex items-center justify-center" style={{ maxHeight: "400px" }}>
                <Image
                  src={screenshots[currentImageIndex]}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  width={500}
                  height={300}
                  className="object-contain w-auto h-auto max-w-full max-h-96"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 70vw"
                />

                {/* Navigation Buttons */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-all duration-200 backdrop-blur-sm"
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-all duration-200 backdrop-blur-sm"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm">
                      {currentImageIndex + 1} / {screenshots.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {screenshots.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex
                          ? "border-[#3B82F6]"
                          : "border-[#25282C] hover:border-[#3B82F6]/50"
                      }`}
                    >
                      <Image
                        src={screenshot}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                        loading="eager"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F5]">About</h3>
            <p className="text-[#9CA3AF] leading-relaxed">
              {fullDescription || description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#F5F5F5]">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1.5 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-sm text-[#3B82F6] hover:bg-[#3B82F6]/20 hover:border-[#3B82F6]/50 transition-all duration-150"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Demo Link */}
          {demoLink && (
            <div className="pt-4 border-t border-[#25282C]">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium rounded-lg transition-colors duration-200"
              >
                <span>View Live Demo</span>
                <span>→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
