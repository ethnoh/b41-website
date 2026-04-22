"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      e.currentTarget.reset();

      setTimeout(() => {
        setSuccess(false);
        setError(false);
        onClose();
      }, 2200);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const inputCls = `
    w-full px-4 py-3 rounded-xl text-gray-900 text-sm
    bg-[#F5F5F5] border border-[#D0D0D0]
    placeholder:text-gray-400
    focus:outline-none focus:border-[#1A1A1A] focus:bg-white focus:ring-2 focus:ring-[#1A1A1A]/15
    transition-all duration-200
  `;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-white"
            style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.20)" }}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, #1A1A1A 0%, #2D3436 50%, #636E72 100%)" }}
              aria-hidden
            />

            <div className="p-8 pt-10">
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close contact form"
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200"
              >
                <X size={16} />
              </button>

              {!success ? (
                <>
                  {/* Header */}
                  <div className="mb-7">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{ background: "#F5F5F5", color: "#1A1A1A" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: "#1A1A1A" }}
                      />
                      Get in touch
                    </div>
                    <h2
                      id="contact-modal-title"
                      className="text-xl font-bold text-gray-900 mt-2"
                    >
                      Tell us about your project
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <input
                      name="name"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      className={inputCls}
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Work email"
                      required
                      autoComplete="email"
                      className={inputCls}
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone (optional)"
                      autoComplete="tel"
                      className={inputCls}
                    />
                    <textarea
                      name="message"
                      placeholder="Describe your workflow or automation need…"
                      rows={4}
                      required
                      className={`${inputCls} resize-none`}
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}
                    >
                      {loading ? "Sending…" : "Send message"}
                    </button>

                    {error && (
                      <p className="text-red-500 text-sm text-center">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                </>
              ) : (
                /* Success state */
                <div className="text-center py-14">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ background: "#F5F5F5", border: "1px solid #D0D0D0" }}
                  >
                    <span className="text-2xl" style={{ color: "#1A1A1A" }}>✓</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message sent!</h3>
                  <p className="text-gray-500 text-sm">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
