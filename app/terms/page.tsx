export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-10 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using b41.ai, you agree to be bound by these Terms of Service. If
              you do not agree to all of these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of the Website</h2>
            <p className="mb-3">
              Permission is granted to access and view the materials on this website for personal,
              non-commercial purposes only. You may not:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Modify or copy the materials for commercial use</li>
              <li>Attempt to reverse engineer any software on the site</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer or mirror the materials on any other server</li>
              <li>Use the site for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the
              property of B41 and is protected by applicable intellectual property laws. Unauthorized
              use is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Disclaimer</h2>
            <p>
              The materials on this website are provided on an "as is" basis. B41 makes no
              warranties, expressed or implied, and disclaims all other warranties including
              implied warranties of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p>
              In no event shall B41 or its affiliates be liable for any indirect, incidental,
              special, or consequential damages arising out of your use or inability to use this
              website or its services, even if B41 has been advised of the possibility of such
              damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. These links are provided for
              convenience only. B41 has no responsibility for the content or practices of any
              linked sites and is not liable for any loss or damage arising from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Modifications</h2>
            <p>
              B41 may revise these Terms of Service at any time without prior notice. By continuing
              to use this website after any changes, you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws.
              Any disputes arising under these terms shall be subject to the exclusive jurisdiction
              of the relevant courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h2>
            <p>
              Questions about these Terms of Service should be directed to:{" "}
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
