export default function WebMonitoringContent() {
  return (
    <div className="space-y-20">

      {/* HERO */}
      <section className="text-center">
        <h2 className="text-5xl font-black mb-4">
          Automated Web Monitoring
        </h2>
        <p className="text-xl text-teal-300 mb-10">
          Be the first to know. Automatically.
        </p>

        <div className="rounded-xl overflow-hidden border border-white/10">
          <img
            src="/projects/web-monitoring/hero.png"
            alt="Automated web monitoring"
            className="w-full"
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-3xl">
        <h3 className="text-3xl font-bold mb-4">The problem</h3>
        <p className="text-white/80 leading-relaxed">
          Critical information appears on websites every day — new listings,
          updates, and opportunities. Manually checking websites is slow,
          inefficient, and easy to miss.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="max-w-3xl">
        <h3 className="text-3xl font-bold mb-4">The solution</h3>
        <p className="text-white/80 leading-relaxed">
          We build automated systems that continuously monitor websites and
          instantly deliver relevant updates — without manual effort.
        </p>
      </section>

      {/* SOURCE */}
      <section>
        <h3 className="text-3xl font-bold mb-6">Source example</h3>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img
            src="/projects/web-monitoring/source.png"
            alt="Monitored website"
            className="w-full"
          />
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <h3 className="text-3xl font-bold mb-8">How it works</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          {[
            { title: "Target websites", text: "Marketplaces\nJob boards\nListings\nPlatforms" },
            { title: "Monitoring engine", text: "Change detection\nFilters\nData extraction" },
            { title: "Automation core", text: "Processing\nFormatting\nRouting" },
            { title: "Delivery", text: "Messenger\nEmail\nCSV\nCloud tables" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <p className="font-semibold mb-2">{item.title}</p>
              <p className="opacity-70 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OUTPUT */}
      <section>
        <h3 className="text-3xl font-bold mb-6">Output example</h3>
        <div className="max-w-md rounded-xl overflow-hidden border border-white/10">
          <img
            src="/projects/web-monitoring/output.png"
            alt="Telegram alert"
            className="w-full"
          />
        </div>
      </section>

      {/* CONNECTED MODULES */}
      <section>
        <h3 className="text-3xl font-bold mb-6">Connected modules</h3>
        <ul className="text-white/80 space-y-2">
          <li>• Automation Core</li>
          <li>• AI Assistant (analysis & enrichment)</li>
          <li>• Document Intelligence (if needed)</li>
        </ul>
      </section>

    </div>
  );
}
