import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FileText, AlertCircle } from 'lucide-react';
import './Legal.scss';

const Terms: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="legal">
      <section className="legal__hero">
        <div className="legal__hero-container">
          <h1 className="legal__hero-title">
            <span className={gradientClass}>Terms & Conditions</span>
          </h1>
          <p className="legal__hero-updated">Last updated: December 2024</p>
        </div>
      </section>

      <section className="legal__content">
        <div className="legal__content-container">
          <div className="legal__section">
            <h2 className="legal__heading">Agreement to Terms</h2>
            <p className="legal__text">
              By accessing and using the services provided by SDMR.pro ("Service Provider," "we," "us," or "our"), 
              you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, 
              you may not access or use our services.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Services Description</h2>
            <p className="legal__text">
              SDMR.pro provides scientific data management, analysis, automation, and consulting services. 
              Specific deliverables, timelines, and pricing are agreed upon in writing before project commencement 
              through a separate service agreement or statement of work.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Client Responsibilities</h2>
            <p className="legal__text">Clients agree to:</p>
            <ul className="legal__list">
              <li>Provide accurate and complete information necessary for project execution</li>
              <li>Ensure they have the legal right to share any data or materials provided</li>
              <li>Provide timely feedback and approvals as needed</li>
              <li>Pay all fees as agreed in the service agreement</li>
              <li>Maintain confidentiality of any proprietary tools or methodologies shared</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Intellectual Property</h2>
            <p className="legal__text">
              <strong>Client Data:</strong> All scientific data, research results, and materials provided by the 
              client remain the exclusive property of the client.
            </p>
            <p className="legal__text">
              <strong>Deliverables:</strong> Upon full payment, clients receive ownership of custom code, scripts, 
              and outputs specifically created for their project, unless otherwise specified in the service agreement.
            </p>
            <p className="legal__text">
              <strong>Pre-existing IP:</strong> Generic tools, templates, and methodologies developed by SDMR.pro 
              prior to or independent of the project remain our property. Clients receive a license to use 
              these components as part of their deliverables.
            </p>
          </div>

          <div className="legal__highlight">
            <h3 className="legal__highlight-title">
              <AlertCircle size={20} />
              Important Notice
            </h3>
            <p className="legal__highlight-text">
              Our services are provided on an advisory and execution basis. While we strive for accuracy, 
              clients are responsible for validating results against their own standards and requirements, 
              especially for regulatory or publication purposes.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Payment Terms</h2>
            <p className="legal__text">
              Payment terms are specified in individual service agreements. Generally:
            </p>
            <ul className="legal__list">
              <li>A deposit may be required before project commencement</li>
              <li>Invoices are due within 30 days unless otherwise agreed</li>
              <li>Late payments may incur interest charges</li>
              <li>Project deliverables are released upon receipt of full payment</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Confidentiality</h2>
            <p className="legal__text">
              We maintain strict confidentiality regarding all client information and project data. 
              Non-disclosure agreements (NDAs) are available upon request and are standard practice 
              for projects involving proprietary or sensitive data.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Limitation of Liability</h2>
            <p className="legal__text">
              SDMR.pro's liability for any claim arising from our services is limited to the amount 
              paid for those specific services. We are not liable for indirect, incidental, consequential, 
              or punitive damages.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Termination</h2>
            <p className="legal__text">
              Either party may terminate a project with written notice. Upon termination, clients are 
              responsible for payment of work completed to date. All client data will be returned or 
              securely deleted upon request.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Governing Law</h2>
            <p className="legal__text">
              These Terms shall be governed by and construed in accordance with applicable laws. 
              Any disputes shall be resolved through good-faith negotiation, followed by binding 
              arbitration if necessary.
            </p>
          </div>

          <div className="legal__contact">
            <h3 className="legal__contact-title">Questions About These Terms?</h3>
            <p className="legal__contact-text">
              Contact us for clarification:
            </p>
            <a href="mailto:legal@sdmr.pro" className="legal__contact-email">
              legal@sdmr.pro
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
