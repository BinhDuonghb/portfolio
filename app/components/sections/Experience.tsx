import Image from "next/image";
import { Briefcase, CheckCircle } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";
import { experienceData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:py-28 bg-[#0F1012]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="03 / EXPERIENCE"
          title="Professional Journey"
          description="Building real-world applications in a professional software development environment."
        />

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="pb-8 border-l-2 border-[#3B82F6] pl-8 relative"
            >
              {/* Timeline Dot with Icon */}
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center">
                <Briefcase size={16} className="text-[#08090A]" />
              </div>

              <div className="space-y-6">
                {/* Header Info with Company Image */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Image on the left (small square) */}
                  {exp.image && (
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-[#25282C] hover:border-[#3B82F6]/50 transition-all duration-200">
                      <Image
                        src={exp.image}
                        alt={exp.company}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="64px"
                        loading="eager"
                      />
                    </div>
                  )}

                  {/* Company Info on the right */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-[#F5F5F5]">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-[#6B7280] whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#3B82F6] font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#9CA3AF] leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1.5 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-sm text-[#3B82F6] font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                )}

                {/* Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-[#F5F5F5] mb-3">
                      Key Responsibilities
                    </h4>
                    <div className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle
                            size={18}
                            className="text-[#3B82F6] flex-shrink-0 mt-0.5"
                          />
                          <span className="text-[#9CA3AF]">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Close the div */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


