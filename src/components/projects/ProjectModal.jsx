"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import WebMonitoringContent from "./WebMonitoringContent";
import SalesAutomationContent from "./SalesAutomationContent";
import AIKnowledgeAssistantContent from "./AIKnowledgeAssistantContent";
import InteractiveMessengerAutomationContent from "./InteractiveMessengerAutomationContent";
import AIVideoStorytellingContent from "./AIVideoStorytellingContent";


export default function ProjectModal({ projectId, onClose }) {

  // 🔒 Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">

      {/* SCROLL CONTAINER */}
      <div className="absolute inset-0 overflow-y-auto modal-scroll">
        <div className="min-h-full flex items-center justify-center p-6">

          <div
            className="
              relative
              w-full
              max-w-5xl
              bg-gradient-to-br
              from-neutral-900/80
              via-neutral-900/70
              to-black/80
              backdrop-blur-xl
              border
              border-white/10
              rounded-2xl
              p-10
              text-white
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            {/* CONTENT */}
            {projectId === "web-monitoring" && <WebMonitoringContent />}
            {projectId === "sales-automation" && <SalesAutomationContent />}
            {projectId === "ai-knowledge-assistant" && (
              <AIKnowledgeAssistantContent />
            )}
            {projectId === "messenger-automation" && (
              <InteractiveMessengerAutomationContent />
            )}
            {projectId === "ai-visual-storytelling" && <AIVideoStorytellingContent />}
          </div>
        </div>
      </div>

    </div>
  );
}
