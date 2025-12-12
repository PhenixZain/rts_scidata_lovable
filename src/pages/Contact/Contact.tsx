import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import './Contact.scss';

const Contact: React.FC = () => {
  const { gradientMode } = useTheme();
  const { t } = useLanguage();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="contact__hero-container">
          <span className="contact__hero-tag">{t.contact.tag}</span>
          <h1 className="contact__hero-title">
            <span className={gradientClass}>{t.contact.heroTitle}</span>
          </h1>
          <p className="contact__hero-subtitle">{t.contact.heroSubtitle}</p>
        </div>
      </section>

      <section className="contact__content">
        <div className="contact__content-container">
          <div className="contact__info">
            <p className="contact__info-text">{t.contact.infoDesc}</p>

            <div className="contact__info-reasons">
              <h2 className="contact__info-title">{t.contact.reasonsTitle}</h2>
              <div className="contact__info-list">
                {t.contact.reasons.map((reason, index) => (
                  <div className="contact__info-item" key={index}>
                    <CheckCircle size={18} />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact__details">
              <h2 className="contact__details-title">{t.contact.infoTitle}</h2>
              <div className="contact__details-list">
                <div className="contact__details-item">
                  <Mail size={20} />
                  <a href="mailto:contact@sdmr.pro">contact@sdmr.pro</a>
                </div>
                <div className="contact__details-item">
                  <MapPin size={20} />
                  <span>{t.contact.locationValue}</span>
                </div>
                <div className="contact__details-item">
                  <Clock size={20} />
                  <span>{t.contact.availabilityValue}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-section">
            <form className="contact__form" onSubmit={handleSubmit}>
              <h2 className="contact__form-title">{t.contact.formTitle}</h2>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="name">{t.contact.formName} *</label>
                <input
                  className="contact__form-input"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="email">{t.contact.formEmail} *</label>
                <input
                  className="contact__form-input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="subject">{t.contact.formSubject} *</label>
                <input
                  className="contact__form-input"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="message">{t.contact.formMessage} *</label>
                <textarea
                  className="contact__form-textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact__form-submit">
                <Send size={18} />
                {t.contact.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
