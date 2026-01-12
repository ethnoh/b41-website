import Image from "next/image";

export default function AIKnowledgeAssistantContent() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="text-center space-y-6">
        <h2 className="text-6xl font-black mb-2">AI Knowledge Assistant</h2>
        <p className="text-lg text-teal-300">Trained on internal company data</p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <Image
            src="/projects/ai-knowledge-assistant/hero.png"
            alt="AI Knowledge Assistant hero"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-4xl space-y-4">
        <h3 className="text-4xl font-black">The problem</h3>
        <p className="text-white/70 leading-relaxed">
          Public AI models cannot answer questions about proprietary software,
          internal processes, or company-specific workflows.
          <br />
          <br />
          Employees end up searching through manuals, SOPs, and internal
          documentation — or relying on support teams for answers that already
          exist.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="max-w-4xl space-y-4">
        <h3 className="text-4xl font-black">The solution</h3>
        <p className="text-white/70 leading-relaxed">
          We build private AI assistants trained exclusively on internal company
          knowledge.
          <br />
          <br />
          The assistant understands company terminology, internal logic, and real
          workflows — delivering accurate, context-aware answers without
          hallucinations.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-10">
        <h3 className="text-4xl font-black">How it works</h3>

        {/* MINI BLOCKS (как в проектах 1 и 2) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-2">Company data</h4>
            <p className="text-white/70 leading-relaxed">
              Manuals
              <br />
              SOPs
              <br />
              Internal docs
              <br />
              Process rules
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-2">Data pipeline</h4>
            <p className="text-white/70 leading-relaxed">
              Chunking
              <br />
              Embeddings
              <br />
              Tagging
              <br />
              Updates
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-2">AI assistant</h4>
            <p className="text-white/70 leading-relaxed">
              Context retrieval
              <br />
              Answer synthesis
              <br />
              Guardrails
              <br />
              No hallucinations
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-2">Employee</h4>
            <p className="text-white/70 leading-relaxed">
              Fast guidance
              <br />
              Better onboarding
              <br />
              Less support load
              <br />
              Consistent SOPs
            </p>
          </div>
        </div>

        {/* IMAGE AFTER MINI BLOCKS */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <Image
            src="/projects/ai-knowledge-assistant/architecture.png"
            alt="AI Knowledge Assistant architecture"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* WHERE USED */}
      <section className="max-w-4xl space-y-4">
        <h3 className="text-4xl font-black">Where it’s used</h3>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Employee training and onboarding</li>
          <li>Internal support and helpdesk</li>
          <li>Operations and SOP guidance</li>
          <li>Software and system instructions</li>
          <li>Compliance and procedures</li>
        </ul>
      </section>

      {/* DEPLOYMENT */}
      <section className="max-w-4xl space-y-4">
        <h3 className="text-4xl font-black">Deployment & security</h3>
        <p className="text-white/70 leading-relaxed">
          Deployed in the client’s own infrastructure (Azure, private cloud, or
          on-premise).
        </p>
      </section>

      {/* CONNECTED MODULES */}
      <section className="max-w-4xl space-y-4">
        <h3 className="text-4xl font-black">Connected modules</h3>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>AI Knowledge Base</li>
          <li>Automation Core (n8n)</li>
          <li>Document Intelligence (OCR)</li>
        </ul>
      </section>
    </div>
  );
}
