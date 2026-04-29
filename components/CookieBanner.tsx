"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setShow(true);
  }, []);

  const accept = () => { localStorage.setItem("cookie-consent", "accepted"); setShow(false); };
  const decline = () => { localStorage.setItem("cookie-consent", "declined"); setShow(false); };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{ background: "#1a1a1a", borderTop: "1px solid #333333", boxShadow: "0 -4px 20px rgba(0,0,0,0.4)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300 leading-relaxed">
              We use cookies to enhance your experience and analyze site usage.{" "}
              <a href="/privacy" className="underline text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2 text-sm rounded-lg border border-gray-600 text-white hover:border-gray-400 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-sm rounded-lg font-semibold bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
