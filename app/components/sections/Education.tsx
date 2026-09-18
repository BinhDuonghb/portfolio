import { BookOpen } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Information Technology",
      school: "Hanoi University of Business and Technology (HUBT)",
      year: "Expected 2026",
      gpa: "GPA: 3.70 / 4.00",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="EDUCATION"
          title="Academic Background"
          description="Strong foundation in Information Technology with focus on software development."
        />

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#3B82F6]/10 h-fit">
                  <BookOpen size={24} className="text-[#3B82F6]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-[#3B82F6] font-medium mb-2">
                    {edu.school}
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 text-sm text-[#9CA3AF]">
                    <span>{edu.year}</span>
                    <span>•</span>
                    <span>{edu.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
