'use client';

import { useState } from "react";
import SectionHeader from "@/app/components/SectionHeader";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectModal from "@/app/components/ProjectModal";
import { projectsData, techIconMap } from "@/lib/data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:py-28 bg-[#0F1012]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="04 / PROJECTS"
          title="Selected Works"
          description="A selection of projects I've built, from graduation work to collaborative university platforms."
        />

        {/* Projects Grid */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              number={project.number}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoLink={project.demoLink}
              image={project.image}
              techIcons={techIconMap}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={projectsData[selectedProject].title}
          description={projectsData[selectedProject].description}
          fullDescription={projectsData[selectedProject].fullDescription}
          technologies={projectsData[selectedProject].technologies}
          screenshots={projectsData[selectedProject].screenshots}
          demoLink={projectsData[selectedProject].demoLink}
        />
      )}
    </section>
  );
}
