import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="container max-w-4xl">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: March 10, 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the Sanctuary Maker website and purchasing our products, you agree to be bound by these Terms of Service. Sanctuary Maker reserves the right to make changes to these terms at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download materials for personal, non-commercial viewing only. You may not modify, copy, distribute, or use materials for any commercial purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer of Warranties</h2>
            <p>
              The materials on Sanctuary Maker's website are provided on an 'as is' basis. We make no warranties and disclaim all implied warranties of merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitations of Liability</h2>
            <p>
              Sanctuary Maker shall not be liable for any damages arising from the use or inability to use materials on our website, even if we have been notified of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Refund Policy</h2>
            <p>
              We offer a 7-day money-back guarantee on all purchases. If you are not satisfied with the product, you may request a full refund within 7 days of purchase through Hotmart's platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Digital Products</h2>
            <p>
              All products sold are digital downloads. Upon purchase, you will receive instant access to download the materials. Due to the digital nature of our products, refunds are handled through our 7-day guarantee policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p>
              All content, including text, graphics, logos, and images, is the property of Sanctuary Maker and is protected by copyright laws. Unauthorized use may violate copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
            <p>For questions about these Terms of Service, contact us at legal@sanctuarymaker.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
