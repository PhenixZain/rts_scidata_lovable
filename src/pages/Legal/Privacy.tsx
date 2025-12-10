import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Shield, Lock, Eye, AlertCircle } from 'lucide-react';
import './Legal.scss';

const Privacy: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="legal">
      <section className="legal__hero">
        <div className="legal__hero-container">
          <h1 className="legal__hero-title">
            <span className={gradientClass}>Privacy Policy</span>
          </h1>
          <p className="legal__hero-updated">Last updated: December 2024</p>
        </div>
      </section>

      <section className="legal__content">
        <div className="legal__content-container">
          <div className="legal__section">
            <h2 className="legal__heading">Introduction</h2>
            <p className="legal__text">
              SDMR.pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website and use our services.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Information We Collect</h2>
            <p className="legal__text">We may collect information about you in various ways:</p>
            <ul className="legal__list">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and organization details you provide through our contact form.</li>
              <li><strong>Project Data:</strong> Scientific data, files, and information you share with us for project work.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">How We Use Your Information</h2>
            <p className="legal__text">We use the information we collect to:</p>
            <ul className="legal__list">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver the services you have requested</li>
              <li>Improve our website and services</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="legal__highlight">
            <h3 className="legal__highlight-title">
              <Shield size={20} />
              Scientific Data Protection
            </h3>
            <p className="legal__highlight-text">
              Any scientific or research data you share with us is treated with the highest level of 
              confidentiality. We implement industry-standard security measures and sign non-disclosure 
              agreements upon request. Your intellectual property and research data are never shared 
              with third parties without explicit written consent.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Data Security</h2>
            <p className="legal__text">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. This includes 
              encrypted communications, secure file transfer protocols, and access controls.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Data Retention</h2>
            <p className="legal__text">
              We retain personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy or as required by law. Project data is securely deleted within 30 days 
              of project completion unless otherwise agreed upon in writing.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Your Rights</h2>
            <p className="legal__text">You have the right to:</p>
            <ul className="legal__list">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Contact Us</h2>
            <p className="legal__text">
              If you have questions about this Privacy Policy or wish to exercise your rights, 
              please contact us at:
            </p>
          </div>

          <div className="legal__contact">
            <h3 className="legal__contact-title">Privacy Inquiries</h3>
            <p className="legal__contact-text">
              For any privacy-related questions or concerns:
            </p>
            <a href="mailto:privacy@sdmr.pro" className="legal__contact-email">
              privacy@sdmr.pro
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
