export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#020408] text-gray-300 py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Effective Date: February 2026</p>

        <div className="space-y-8 text-sm leading-relaxed border-l border-white/10 pl-6">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you browse websites. 
              They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Cookies</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong className="text-white">Essential Cookies:</strong> These are necessary for the website to function properly 
                (e.g., security, network management).
              </li>
              <li>
                <strong className="text-white">Analytics Cookies:</strong> We may use tools (like Vercel Analytics) to collect anonymous 
                information about how you interact with our site to help us improve user experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the 
              ability of websites to set cookies, you may worsen your overall user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Contact</h2>
            <p>
              If you have questions about our use of cookies, please contact us at hello@abyss-insight.com.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}