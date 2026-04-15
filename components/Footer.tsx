import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#team" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Sales Automation",
  "Document OCR",
  "AI Assistants",
  "Custom AI Systems",
];

export default function Footer() {
  return (
    <footer style={{ background: "#111111" }}>
      {/* Gradient divider */}
      <div className="h-px gradient-bg opacity-40" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/assets/logo.svg"
                alt="B41 — Based on AI"
                width={64}
                height={40}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
              AI automation solutions for logistics operations. We build AI that replaces manual
              work — not people.
            </p>
            <a
              href="mailto:hello@b41.ai"
              className="text-sm font-medium transition-colors"
              style={{ color: "#cd853f" }}
            >
              hello@b41.ai
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s} className="text-sm text-gray-400">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} B41 — Based on AI. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">Built for logistics, powered by AI.</p>
        </div>
      </div>
    </footer>
  );
}
