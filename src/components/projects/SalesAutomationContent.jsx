export default function SalesAutomationContent() {
  return (
    <div
      className="
        px-6 py-14 space-y-20 text-white
        md:px-10 md:py-16 md:space-y-24
        max-w-5xl mx-auto
      "
    >

      {/* HERO */}
      <section className="text-center">
        <h2
          className="
            font-black
            text-4xl leading-tight mb-4
            md:text-5xl
          "
        >
          Sales & Operations Automation
        </h2>
        <p className="text-teal-300 text-lg md:text-xl">
          From first contact to sent offer — automatically.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section>
        <img
          src="/projects/sales-automation/hero.png"
          alt="Sales Automation Hero"
          className="w-full rounded-xl border border-white/10"
        />
      </section>

      {/* PROBLEM */}
      <section className="md:max-w-3xl">
        <h3 className="text-2xl font-bold mb-4 md:text-3xl">
          The problem
        </h3>
        <p className="text-white/80 leading-relaxed">
          Sales and operations teams waste enormous amounts of time manually
          processing inquiries, validating data, checking availability, and
          coordinating between systems. This leads to delays, human errors,
          and lost deals.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="md:max-w-3xl">
        <h3 className="text-2xl font-bold mb-4 md:text-3xl">
          The solution
        </h3>
        <p className="text-white/80 leading-relaxed">
          We design fully automated pipelines that handle incoming requests
          end-to-end — from the first message to a ready-to-send offer and
          synchronized internal records. No manual work. No bottlenecks.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h3 className="text-2xl font-bold mb-8 md:text-3xl">
          How it works
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            {
              title: "Inbound requests",
              text: "Website forms\nEmail inquiries\nMessengers\nAPI inputs",
            },
            {
              title: "Automated processing",
              text: "Data validation\nLead enrichment\nBusiness rules\nAI decisions",
            },
            {
              title: "Operations sync",
              text: "CRM updates\nInventory checks\nPricing logic\nAvailability",
            },
            {
              title: "Client delivery",
              text: "Offer generation\nEmail / Messenger replies\nStatus tracking",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5 p-6 rounded-xl border border-white/10
                text-sm
              "
            >
              <p className="font-semibold mb-2">
                {item.title}
              </p>
              <p className="opacity-70 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL FLOW */}
      <section>
        <img
          src="/projects/sales-automation/flow.png"
          alt="Automation Flow"
          className="w-full rounded-xl border border-white/10"
        />
      </section>

      {/* WHAT’S AUTOMATED */}
      <section className="md:max-w-4xl">
        <h3 className="text-2xl font-bold mb-6 md:text-3xl">
          What’s automated
        </h3>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 text-white/80">
          <li>• Lead intake</li>
          <li>• Data validation</li>
          <li>• CRM synchronization</li>
          <li>• Inventory & availability checks</li>
          <li>• Offer generation</li>
          <li>• Client communication</li>
        </ul>
      </section>

      {/* USE CASES */}
      <section className="md:max-w-4xl">
        <h3 className="text-2xl font-bold mb-6 md:text-3xl">
          Typical use cases
        </h3>

        <div className="space-y-4 text-white/80">
          <p>
            • Logistics & container sales — incoming requests are instantly
            validated, priced, and turned into ready-to-send offers.
          </p>
          <p>
            • Industrial equipment sales — multi-step approval, availability
            checks, and CRM updates happen automatically.
          </p>
          <p>
            • High-volume B2B inquiries — hundreds of requests per week handled
            without increasing headcount.
          </p>
        </div>
      </section>

      {/* CONNECTED MODULES */}
      <section className="md:max-w-4xl">
        <h3 className="text-2xl font-bold mb-6 md:text-3xl">
          Connected modules
        </h3>
        <ul className="text-white/80 space-y-2">
          <li>• Automation Core</li>
          <li>• AI Decision Layer</li>
          <li>• CRM & Inventory Systems</li>
          <li>• Messaging Automation</li>
        </ul>
      </section>

      {/* MICRO CTA */}
      <section className="pt-8 border-t border-white/10">
        <p className="text-lg font-semibold md:text-xl">
          This system typically replaces the workload of
          <span className="text-teal-300"> 2–3 full-time roles</span>
          — while responding to clients in seconds.
        </p>
      </section>

    </div>
  );
}
