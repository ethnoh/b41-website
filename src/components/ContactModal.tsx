"use client";

import { useState } from "react";

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

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="
          relative w-full max-w-lg rounded-2xl overflow-hidden
          text-white shadow-2xl border border-white/10
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/assets/backgrounds/hero.png')",
          }}
        />

        {/* DARK + BLUR OVERLAY */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

        {/* CONTENT */}
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-300 hover:text-white transition"
          >
            ✕
          </button>

          {!success ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Contact us</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-neutral-900/80 border border-neutral-700
                    focus:outline-none focus:border-white/40
                    placeholder:text-neutral-400
                  "
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-neutral-900/80 border border-neutral-700
                    focus:outline-none focus:border-white/40
                    placeholder:text-neutral-400
                  "
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-neutral-900/80 border border-neutral-700
                    focus:outline-none focus:border-white/40
                    placeholder:text-neutral-400
                  "
                />

                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={4}
                  required
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-neutral-900/80 border border-neutral-700
                    focus:outline-none focus:border-white/40
                    placeholder:text-neutral-400
                    resize-none
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full py-3 rounded-full
                    bg-white text-black font-semibold
                    hover:bg-neutral-200 transition
                    disabled:opacity-60
                  "
                >
                  {loading ? "Sending..." : "Send message"}
                </button>

                {error && (
                  <p className="text-red-400 text-sm text-center mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
              <p className="text-neutral-300 mb-8">
                Your request has been sent. We’ll get back to you shortly.
              </p>
              <button
                onClick={onClose}
                className="
                  px-10 py-3 rounded-full
                  bg-white text-black font-semibold
                  hover:bg-neutral-200 transition
                "
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
