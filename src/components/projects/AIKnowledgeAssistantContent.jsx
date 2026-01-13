import Image from "next/image";

export default function AIKnowledgeAssistantContent() {
  return (
    <div
      className="
        space-y-20 text-white
        md:px-10 md:py-16 md:space-y-24
        md:max-w-5xl md:mx-auto
      "
    >
      {/* HERO */}
      <section className="text-center">
        <h2
          className="
            font-black mb-4
            text-[32px] leading-tight
            md:text-5xl md:leading-none
          "
        >
          AI Knowledge Assistant
        </h2>

        <p className="text-xl text-teal-300">
          Trained on internal company data
        </p>

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
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">The problem</h3>
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
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">The solution</h3>
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
        <h3 className="text-3xl font-bold">How it works</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          {[
            {
              title: "Company data",
              text: "Manuals\nSOPs\nInternal docs\nProcess rules",
            },
            {
              title: "Data pipeline",
              text: "Chunking\nEmbeddings\nTagging\nUpdates",
            },
            {
              title: "AI assistant",
              text: "Context retrieval\nAnswer synthesis\nGuardrails\nNo hallucinations",
            },
            {
              title: "Employee",
              text: "Fast guidance\nBetter onboarding\nLess support load\nConsistent SOPs",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
            >
              <p className="font-semibold mb-2">{item.title}</p>
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

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
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">Where it’s used</h3>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Employee training and onboarding</li>
          <li>Internal support and helpdesk</li>
          <li>Operations and SOP guidance</li>
          <li>Software and system instructions</li>
          <li>Compliance and procedures</li>
        </ul>
      </section>

      {/* DEPLOYMENT */}
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">Deployment & security</h3>
        <p className="text-white/70 leading-relaxed">
          Deployed in the client’s own infrastructure (Azure, private cloud, or
          on-premise).
        </p>
      </section>

      {/* CONNECTED MODULES */}
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">Connected modules</h3>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>AI Knowledge Base</li>
          <li>Automation Core (n8n)</li>
          <li>Document Intelligence (OCR)</li>
        </ul>
      </section>
    </div>
  );
}
