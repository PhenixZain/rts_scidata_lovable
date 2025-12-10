import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Lock, Shield, Eye, Server, FileCheck, Users } from 'lucide-react';
import './Legal.scss';

const DataConfidentiality: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';

  return (
    <main className="legal">
      <section className="legal__hero">
        <div className="legal__hero-container">
          <h1 className="legal__hero-title">
            <span className={gradientClass}>Data Confidentiality Statement</span>
          </h1>
          <p className="legal__hero-updated">Last updated: December 2024</p>
        </div>
      </section>

      <section className="legal__content">
        <div className="legal__content-container">
          <div className="legal__section">
            <h2 className="legal__heading">Our Commitment to Your Data</h2>
            <p className="legal__text">
              At SDMR.pro, we understand that scientific data is among the most valuable and sensitive 
              assets our clients possess. Whether you're working on unpublished research, proprietary 
              formulations, or confidential business information, we treat your data with the highest 
              level of protection and respect.
            </p>
          </div>

          <div className="legal__highlight">
            <h3 className="legal__highlight-title">
              <Lock size={20} />
              Iron-Clad Confidentiality
            </h3>
            <p className="legal__highlight-text">
              Your data is never shared with third parties without explicit written consent. We do not 
              use your data for any purpose other than the specific services you have engaged us to 
              provide. Period.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Data Handling Protocols</h2>
            <p className="legal__text">
              We implement comprehensive protocols for every stage of data handling:
            </p>
          </div>

          <div className="legal__highlight">
            <h3 className="legal__highlight-title">
              <Server size={20} />
              Secure Transfer
            </h3>
            <p className="legal__highlight-text">
              All data transfers use encrypted channels (TLS 1.3, SFTP, or encrypted cloud storage). 
              We never request data through unsecured email attachments. Clients receive secure links 
              or access credentials for file sharing.
            </p>
          </div>

          <div className="legal__highlight">
            <h3 className="legal__highlight-title">
              <Shield size={20} />
              Storage Security
            </h3>
            <p className="legal__highlight-text">
              Project data is stored on encrypted drives with access controls. We maintain separate 
              storage for each client project. Regular security audits ensure our systems meet 
              industry standards for data protection.
            </p>
          </div>

          <div className="legal__highlight">
            <h3 className="legal__highlight-title">
              <Eye size={20} />
              Access Control
            </h3>
            <p className="legal__highlight-text">
              Only personnel directly involved in your project have access to your data. We maintain 
              detailed access logs and can provide audit trails upon request. No data is ever viewed 
              or accessed by unauthorized parties.
            </p>
          </div>

          <div className="legal__highlight">
            <h3 className="legal__highlight-title">
              <FileCheck size={20} />
              Data Destruction
            </h3>
            <p className="legal__highlight-text">
              Upon project completion, all client data is securely deleted within 30 days unless 
              otherwise agreed. We use secure deletion methods that prevent recovery. Clients can 
              request immediate deletion and receive confirmation of destruction.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Non-Disclosure Agreements</h2>
            <p className="legal__text">
              We readily sign Non-Disclosure Agreements (NDAs) before beginning any project. Many 
              clients require this, and we consider it standard practice for scientific data work. 
              We can work with your organization's standard NDA or provide our own.
            </p>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Compliance & Standards</h2>
            <p className="legal__text">
              Our data handling practices are designed to comply with:
            </p>
            <ul className="legal__list">
              <li><strong>GDPR:</strong> For projects involving EU data subjects</li>
              <li><strong>Good Documentation Practice (GDP):</strong> For pharmaceutical and regulated industries</li>
              <li><strong>Institutional Requirements:</strong> We adapt to specific university or corporate policies</li>
              <li><strong>Industry Best Practices:</strong> Following FAIR principles for scientific data management</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2 className="legal__heading">Special Considerations for Scientific Data</h2>
            <p className="legal__text">
              Scientific data often has unique sensitivity requirements:
            </p>
            <ul className="legal__list">
              <li><strong>Unpublished Research:</strong> We understand publication priority and protect pre-publication data</li>
              <li><strong>Patent-Related Data:</strong> Strict protocols for data that may be part of patent applications</li>
              <li><strong>Clinical Data:</strong> Additional safeguards for any human-subjects related information</li>
              <li><strong>Proprietary Compounds:</strong> Special handling for chemical structures and formulations</li>
            </ul>
          </div>

          <div className="legal__highlight">
            <h3 className="legal__highlight-title">
              <Users size={20} />
              Your Rights
            </h3>
            <p className="legal__highlight-text">
              You have the right to know exactly how your data is being handled at any time. Request a 
              data handling report, audit trail, or deletion confirmation whenever needed. We provide 
              full transparency about our data protection measures.
            </p>
          </div>

          <div className="legal__contact">
            <h3 className="legal__contact-title">Questions About Data Security?</h3>
            <p className="legal__contact-text">
              We're happy to discuss specific security requirements for your project:
            </p>
            <a href="mailto:security@sdmr.pro" className="legal__contact-email">
              security@sdmr.pro
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataConfidentiality;
