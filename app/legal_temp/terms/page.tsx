export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020408] text-gray-300 py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Effective Date: February 2026</p>

        <div className="space-y-8 text-sm leading-relaxed border-l border-white/10 pl-6">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of Abyss Insight ("we," "us," or "our"), 
              you agree to comply with and be bound by these Terms of Service. If you do not agree 
              to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Services</h2>
            <p>
              Abyss Insight provides AI implementation, consulting, and software development services. 
              Specific deliverables, timelines, and costs for our services will be outlined in separate 
              agreements (Statements of Work) signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website, including code, design, text, graphics, and logos, is the property 
              of Abyss Insight and is protected by international copyright laws. You may not reproduce, 
              distribute, or create derivative works without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Abyss Insight shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including loss of profits or data, 
              arising out of or in connection with your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Ukraine, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant 
              changes by updating the date at the top of this policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}