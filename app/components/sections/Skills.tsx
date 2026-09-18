import { Code, Layers, Database, Smartphone, Wrench } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";
import SkillCategory from "@/app/components/SkillCategory";
import { skillsData, techIconMap } from "@/lib/data";

export default function Skills() {
  const iconMap = {
    Code,
    Layers,
    Database,
    Smartphone,
    Wrench,
  };

  return (
    <section id="skills" className="py-24 px-6 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02 / SKILLS"
          title="Technologies & Tools"
          description="A collection of technologies and tools I use to build web, backend, mobile, and AI-powered applications."
        />

        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];
            return (
              <SkillCategory
                key={category.category}
                category={category.category}
                icon={IconComponent}
                skills={category.skills}
                techIcons={techIconMap}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
