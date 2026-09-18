import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  category: string;
  icon: LucideIcon;
  skills: string[];
  techIcons?: Record<string, string>;
}

export default function SkillCategory({
  category,
  icon: IconComponent,
  skills,
  techIcons = {},
}: SkillCategoryProps) {
  return (
    <div className="group p-6 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200 hover:-translate-y-1">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-[#3B82F6]/10">
          <IconComponent size={20} className="text-[#3B82F6]" />
        </div>
        <h3 className="text-lg font-semibold text-[#F5F5F5]">
          {category}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1d21] border border-[#25282C] rounded-full text-sm text-[#9CA3AF] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-150 group-hover:bg-[#1a1d21]"
          >
            <span className="font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
