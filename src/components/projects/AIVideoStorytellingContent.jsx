export default function AIVisualStorytellingContent() {
  return (
    <div className="space-y-20">
      {/* TITLE */}
      <div className="text-center">
        <h1
          className="
            font-black mb-4
            text-[32px] leading-tight
            md:text-5xl
          "
        >
          AI Visual Storytelling
        </h1>

        <p className="text-teal-300 text-lg">
          Turning ideas, processes, and products into cinematic visuals.
        </p>
      </div>

      {/* HERO IMAGE */}
      {/* ✅ MOBILE: show full image (no crop) */}
      <div className="md:hidden rounded-xl overflow-hidden border border-white/10 bg-black/40">
        <img
          src="/projects/ai-visual-storytelling/hero.png"
          alt="AI Visual Storytelling"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ✅ DESKTOP: keep EXACTLY your original behavior */}
      <div className="hidden md:block relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/10">
        <img
          src="/projects/ai-visual-storytelling/hero.png"
          alt="AI Visual Storytelling"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* WHAT IT’S USED FOR */}
      <div>
        <h3 className="text-3xl font-bold mb-6">
          What it’s used for
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
          <ul className="space-y-2">
            <li>• Product presentations</li>
            <li>• Marketing & brand videos</li>
            <li>• Concept & idea validation</li>
          </ul>
          <ul className="space-y-2">
            <li>• Process visualization</li>
            <li>• Internal communication</li>
          </ul>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div>
        <h3 className="text-3xl font-bold mb-10">
          How it works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Client idea",
              items: ["Product", "Process", "Concept", "Story"],
            },
            {
              title: "Visual direction",
              items: ["Style & mood", "Key scenes", "Narrative flow"],
            },
            {
              title: "AI generation",
              items: ["Video models", "Scene composition", "Iterations"],
            },
            {
              title: "Final delivery",
              items: ["Business-ready visuals", "Marketing & internal use"],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
            >
              <h3 className="font-semibold mb-4">{card.title}</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO — BUSINESS */}
      <div>
        <video
          src="https://b41media.blob.core.windows.net/videos/ai-story-container.webm"
          muted
          playsInline
          controls
          preload="metadata"
          className="w-full rounded-xl border border-white/10"
        />
        <p className="mt-4 text-sm text-white/60 text-center">
          Logistics → transformation → final value
        </p>
      </div>

      {/* VIDEO — CREATIVE */}
      <div>
        <video
          src="https://b41media.blob.core.windows.net/videos/ai-story-diwali.webm"
          muted
          playsInline
          controls
          preload="metadata"
          className="w-full rounded-xl border border-white/10"
        />
        <p className="mt-4 text-sm text-white/60 text-center">
          Creative AI visuals for internal culture & communication
        </p>
      </div>

      {/* WHY IT MATTERS */}
      <div className="text-white/80">
        <h3 className="text-3xl font-bold mb-6">
          Why it matters
        </h3>
        <ul className="space-y-2">
          <li>• Makes complex ideas instantly understandable</li>
          <li>• Elevates product & process storytelling</li>
          <li>• Supports marketing, sales & internal alignment</li>
          <li>• Shows AI potential beyond pure automation</li>
        </ul>
      </div>

      {/* DISCLAIMER */}
      <div className="text-center text-sm text-white/50">
        This is not our core service, but a creative extension of our AI
        capabilities.
      </div>
    </div>
  );
}
