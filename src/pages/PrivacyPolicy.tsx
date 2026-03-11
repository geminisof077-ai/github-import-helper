import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="container max-w-4xl">
        <Link to="/" className="text-primary hover:underline mb-8 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: March 10, 2026</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Sanctuary Maker ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p>We collect information you provide directly, including name, email, billing address, and payment information. We also collect information automatically such as IP address, browser type, pages visited, and cookies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Meta Pixel & Advertising</h2>
            <p>
              We use Meta Pixel (Facebook Pixel) to track user behavior and optimize advertising campaigns. This includes tracking page views, purchases, and user interactions for retargeting and audience building purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. How We Use Your Information</h2>
            <p>We use your information to process transactions, send periodic emails, improve our website, and personalize user experience. We may also use your information for marketing purposes with your consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p>We use Hotmart as our payment processor. When you make a purchase, your payment information is processed securely by Hotmart. We do not store your full payment details on our servers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@sanctuarymaker.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
