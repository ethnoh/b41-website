"use client";

import { useState } from "react";
import ProjectModal from "./projects/ProjectModal";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      id: "web-monitoring",
      title: "Automated Web Monitoring",
      subtitle: "Be the first to know. Automatically.",
      short: "Real-time alerts from websites that matter.",
      image: "/projects/web-monitoring/hero.png",
    },
    {
      id: "sales-automation",
      title: "Sales & Operations Automation",
      subtitle: "From first contact to sent offer — automatically.",
      short: "End-to-end sales and operations pipeline.",
      image: "/projects/sales-automation/hero.png",
    },
    {
      id: "ai-knowledge-assistant",
      title: "AI Knowledge Assistant",
      subtitle: "Trained on internal company data",
      short: "Private AI assistant for training, operations, and internal support.",
      image: "/projects/ai-knowledge-assistant/hero.png",
    },
    {
      id: "messenger-automation",
      title: "Interactive Messenger Automation",
      subtitle: "Operational workflows delivered through messengers",
      short: "Interactive automation systems for field and operational teams.",
      image: "/projects/messenger-automation/hero.png",
    },
    {
      id: "ai-visual-storytelling",
      title: "AI Visual Storytelling",
      subtitle: "Turning ideas into cinematic visuals.",
      short: "AI-powered videos for business, process, and brand storytelling.",
      image: "/projects/ai-visual-storytelling/hero.png",
    }

  ];


  // 🔧 CONTROL — crop top of background image (px)
  const TOP_CROP_PX = 10;

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden text-white bg-black"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-top"
          style={{
            backgroundImage: "url(/assets/backgrounds/projects.png)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
      </div>



      {/* TOP FADE (CLIENTS → PROJECTS) */}
      <div
        className="absolute top-0 left-0 w-full h-48 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* BOTTOM FADE */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 flex justify-center pt-10 pb-60 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-6xl font-black mb-24">
            What we deliver
          </h2>

          {/* PROJECT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className="
                  group
                  text-left
                  bg-white/5
                  backdrop-blur-md
                  p-8
                  rounded-xl
                  border
                  border-white/10
                  hover:border-teal-300/40
                  hover:shadow-teal-300/20
                  transition
                "
              >
                {/* IMAGE PREVIEW */}
                <div className="relative h-40 rounded-md mb-6 overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      absolute inset-0
                      w-full h-full
                      object-cover
                      opacity-80
                      scale-105
                      group-hover:scale-110
                      transition-transform
                      duration-700
                    "
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-teal-300 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-base opacity-80">
                  {project.short}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <ProjectModal
          projectId={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

    </section>
  );
}
