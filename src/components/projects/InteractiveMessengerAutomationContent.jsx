import Image from "next/image";

export default function InteractiveMessengerAutomationContent() {
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
          Interactive Messenger Automation
        </h2>

        <p className="text-xl text-teal-300">
          Operational workflows delivered through messengers
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <Image
            src="/projects/messenger-automation/hero.png"
            alt="Interactive Messenger Automation hero"
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
          Operational tasks are often slow, manual, and error-prone — especially
          in the field.
          <br />
          <br />
          Data is collected across messages, photos, spreadsheets, and systems,
          forcing operators to switch tools, repeat steps, and manually validate
          information.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">The solution</h3>
        <p className="text-white/70 leading-relaxed">
          We build interactive automation systems that guide users step by step
          through operational workflows.
          <br />
          <br />
          Messengers become structured control panels — handling validation,
          AI processing, OCR, and backend automation automatically.
        </p>

        <p className="text-white/60 italic">
          We turn messengers into operational control panels.
        </p>
      </section>

      {/* USE CASES */}
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">Use cases</h3>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Inventory checks and availability requests</li>
          <li>Field inspections and container condition reporting</li>
          <li>Structured data collection</li>
          <li>Operational reporting</li>
          <li>Guided workflows for field teams</li>
        </ul>
      </section>

      {/* TEXT QUERY EXAMPLE */}
      <section className="space-y-10">
        <h3 className="text-3xl font-bold">
          Text-based operational queries
        </h3>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <Image
            src="/projects/messenger-automation/text-query.png"
            alt="Text query to structured response"
            width={1400}
            height={900}
            className="w-full h-auto"
          />
        </div>

        <p className="md:max-w-4xl text-white/60 leading-relaxed">
          Operators can ask free-text questions in a messenger.
          The system interprets the request, queries internal data sources, and
          returns structured, reliable answers — without manual searching.
        </p>
      </section>

      {/* WHY IT MATTERS */}
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">Why it matters</h3>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>No training required</li>
          <li>Works on any device</li>
          <li>Reduces human errors</li>
          <li>Saves operational time</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-10">
        <h3 className="text-3xl font-bold">How it works</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
          {[
            {
              title: "Input",
              text: "Messages\nButtons\nPhotos",
            },
            {
              title: "Interface logic",
              text: "Step-by-step flow\nValidation\nUI controls",
            },
            {
              title: "AI & OCR",
              text: "Text understanding\nImage recognition\nData extraction",
            },
            {
              title: "Automation core",
              text: "Business rules\nProcessing\nFile handling",
            },
            {
              title: "Storage & output",
              text: "Google Sheets\nCloud storage\nReports",
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
            src="/projects/messenger-automation/architecture.png"
            alt="Interactive Messenger Automation architecture"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* CONNECTED MODULES */}
      <section className="md:max-w-4xl space-y-4">
        <h3 className="text-3xl font-bold">Connected modules</h3>
        <ul className="list-disc list-inside text-white/70 space-y-2">
          <li>Automation Core</li>
          <li>OCR & Document Intelligence</li>
          <li>AI Knowledge Assistant</li>
        </ul>
      </section>
    </div>
  );
}
