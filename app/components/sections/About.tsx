import SectionHeader from "@/app/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="01 / ABOUT"
          title="Who I Am"
          description="A passionate Full-Stack Developer from Vietnam focused on building practical, scalable software products."
        />

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Story */}
          <div className="md:col-span-2 space-y-6 text-[#9CA3AF] leading-relaxed">
            <p>
              I&apos;m Phan Binh Duong, a Full-Stack Developer from Vietnam with a background in Information Technology. I enjoy building practical software products and turning ideas into reliable applications, from user-facing interfaces to backend services and databases.
            </p>
            <p>
              I have hands-on experience working with React, Next.js, TypeScript, Node.js, NestJS, C#, ASP.NET Core, MongoDB, and SQL Server through professional and academic projects. These experiences have helped me develop a strong foundation in full-stack development and understand how different parts of a software system work together.
            </p>
            <p>
              I&apos;m particularly interested in AI-powered applications and the growing intersection between software engineering and AI. I want to explore how AI can be integrated into real-world products to make them more useful, intelligent, and efficient.
            </p>
            <p>
              At this stage of my career, I&apos;m actively looking for opportunities to work with international teams, especially internships and junior-level roles where I can contribute to real projects, learn from experienced engineers, and grow through hands-on collaboration. I&apos;m open to remote opportunities and excited to work in an environment where I can improve both my technical and professional skills.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-4">
            <div className="p-6 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200">
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                1
              </div>
              <p className="text-sm text-[#6B7280]">Year Professional Experience</p>
            </div>
            <div className="p-6 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200">
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                8+
              </div>
              <p className="text-sm text-[#6B7280]">Core Technologies</p>
            </div>
            <div className="p-6 bg-[#111315] border border-[#25282C] rounded-xl hover:border-[#3B82F6]/50 transition-all duration-200">
              <div className="text-3xl font-bold text-[#3B82F6] mb-2">
                3.64
              </div>
              <p className="text-sm text-[#6B7280]">GPA (HUBT) / 4.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
