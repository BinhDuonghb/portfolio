'use client';

import Image from "next/image";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string | null;
  image?: string;
  techIcons?: Record<string, string>;
  onClick: () => void;
}

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  demoLink,
  image,
  techIcons = {},
  onClick,
}: ProjectCardProps) {
  return (
    <div className="group relative cursor-pointer" onClick={onClick}>
      <div className="p-6 md:p-8 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6] transition-all duration-200 hover:-translate-y-1">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Preview Area */}
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square bg-gradient-to-br from-[#1a1d21] to-[#0f1012] border border-[#25282C] rounded-lg overflow-hidden group-hover:border-[#3B82F6]/50 transition-all duration-200">
              {image ? (
                <>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    loading="eager"
                    priority
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-6xl mb-3">📱</div>
                    <p className="text-sm text-[#6B7280]">
                      {title.split(" ").slice(0, 2).join(" ")}
                    </p>
                  </div>
                </div>
              )}

              {/* Project Number Badge */}
              <div className="absolute top-4 right-4 text-3xl font-bold text-[#3B82F6]/80 bg-black/40 px-3 py-1 rounded-lg backdrop-blur-sm">
                {number}
              </div>
            </div>
          </div>

          {/* Project Information */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              {/* Project Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#3B82F6] transition-colors duration-200 line-clamp-2">
                {title}
              </h3>

              {/* Project Description */}
              <p className="text-[#9CA3AF] leading-relaxed mb-5 text-sm md:text-base line-clamp-3">
                {description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-xs md:text-sm text-[#3B82F6] group-hover:bg-[#3B82F6]/20 group-hover:border-[#3B82F6]/50 transition-all duration-150"
                  >
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* View Details Button */}
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] transition-colors duration-150">
              <span>View Details</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

