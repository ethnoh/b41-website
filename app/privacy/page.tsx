export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              B41 ("Company," "we," or "us") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website b41.ai (the "Site"). Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect information about you in a variety of ways:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-gray-800">Personal Data:</strong> Name, email address, and phone number when you contact us via our contact form.</li>
              <li><strong className="text-gray-800">Automatic Data:</strong> Browser type, IP address, pages visited, and time spent on the Site.</li>
              <li><strong className="text-gray-800">Cookies:</strong> Small files stored on your device to enhance your browsing experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Use of Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your inquiries and contact requests</li>
              <li>Improve our website and services</li>
              <li>Monitor and analyze usage and trends</li>
              <li>Send relevant follow-up communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Disclosure of Your Information</h2>
            <p>
              We may share your information with third-party service providers who perform services
              on our behalf, including email delivery and analytics. We do not sell, trade, or rent
              your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
            <p>
              We use cookies to enhance your experience. You can choose to accept or decline cookies
              via the banner shown on your first visit. Declining cookies may limit certain
              functionality of the Site. Your preference is stored in your browser's local storage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Security</h2>
            <p>
              We use reasonable administrative, technical, and physical security measures to protect
              your personal information. However, no method of transmission over the Internet is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal
              data we hold about you. To exercise these rights, please contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:sales@b41.ai" className="underline text-gray-800 hover:text-black">
                sales@b41.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
