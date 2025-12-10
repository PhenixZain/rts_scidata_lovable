import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Send
} from 'lucide-react';
import './Contact.scss';

const reasons = [
  {
    icon: CheckCircle,
    title: 'Domain Expertise',
    description: '20+ years of chemistry experience means I understand your data at a fundamental level.'
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Efficient workflows and automation expertise enable fast delivery without sacrificing quality.'
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Strict confidentiality protocols protect your proprietary research and sensitive data.'
  },
  {
    icon: Globe,
    title: 'Global Availability',
    description: 'Remote work setup with flexible hours to accommodate teams across time zones.'
  }
];

const testimonials = [
  {
    quote: 'Zain transformed our chaotic compound library into a searchable, validated database. His understanding of chemistry meant he could identify data issues that others would have missed. The Streamlit app he built is now essential to our daily operations.',
    name: 'Dr. Marie Laurent',
    role: 'Research Director, Pharma Company',
    initials: 'ML'
  },
  {
    quote: 'The automated reporting pipeline Zain developed saved our team over 15 hours per week. He took the time to understand our workflow and delivered a solution that fit seamlessly into how we actually work.',
    name: 'Prof. Ahmed Hassan',
    role: 'Principal Investigator, University',
    initials: 'AH'
  },
  {
    quote: 'Working with someone who speaks both science and data is rare. Zain delivered a Power BI dashboard that actually made sense to our researchers, not just to IT. The training he provided was equally valuable.',
    name: 'Sarah Chen',
    role: 'Data Manager, Biotech Startup',
    initials: 'SC'
  },
  {
    quote: 'Zain\'s Python scripts for kinetics analysis have become standard tools in our R&D department. His documentation was excellent, making it easy for our team to maintain and modify the code as needed.',
    name: 'Dr. Thomas Weber',
    role: 'R&D Engineer, Industrial Lab',
    initials: 'TW'
  }
];

const Contact: React.FC = () => {
  const { gradientMode } = useTheme();
  const gradientClass = gradientMode === 'animated' ? 'gradient-text-animated' : 'gradient-text-static';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="contact">
      <section className="contact__hero">
        <div className="contact__hero-container">
          <span className="contact__hero-tag">Contact</span>
          <h1 className="contact__hero-title">
            <span className={gradientClass}>Let's Work Together</span>
          </h1>
          <p className="contact__hero-subtitle">
            Ready to transform your scientific data challenges into streamlined solutions? 
            I'd love to hear about your project.
          </p>
        </div>
      </section>

      <section className="contact__content">
        <div className="contact__content-container">
          <div className="contact__info">
            <p className="contact__info-text">
              Whether you need a one-time data cleanup, an automated pipeline, or ongoing 
              data management support, I'm here to help. Every project starts with a 
              conversation to understand your specific needs and challenges.
            </p>

            <div className="contact__info-reasons">
              <h2 className="contact__info-title">Why Work With Me</h2>
              <div className="contact__info-list">
                {reasons.map((reason, index) => (
                  <div className="contact__info-item" key={index}>
                    <div className="contact__info-item-icon">
                      <reason.icon />
                    </div>
                    <div className="contact__info-item-content">
                      <h3 className="contact__info-item-title">{reason.title}</h3>
                      <p className="contact__info-item-desc">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact__details">
              <h2 className="contact__details-title">Contact Information</h2>
              <div className="contact__details-list">
                <div className="contact__details-item">
                  <Mail size={20} />
                  <a href="mailto:contact@sdmr.pro">contact@sdmr.pro</a>
                </div>
                <div className="contact__details-item">
                  <MapPin size={20} />
                  <span>Remote • Available Worldwide</span>
                </div>
                <div className="contact__details-item">
                  <Clock size={20} />
                  <span>Response within 24-48 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-section">
            <form className="contact__form" onSubmit={handleSubmit}>
              <h2 className="contact__form-title">Send a Message</h2>
              <p className="contact__form-desc">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="name">Your Name *</label>
                <input
                  className="contact__form-input"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="email">Email Address *</label>
                <input
                  className="contact__form-input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="organization">Organization</label>
                <input
                  className="contact__form-input"
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your company or institution"
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="subject">Subject *</label>
                <input
                  className="contact__form-input"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Brief description of your needs"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="message">Message *</label>
                <textarea
                  className="contact__form-textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, challenges, and goals..."
                  required
                />
              </div>

              <button type="submit" className="contact__form-submit">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact__testimonials">
        <div className="contact__testimonials-header">
          <span className="contact__testimonials-tag">Testimonials</span>
          <h2 className="contact__testimonials-title">What Clients Say</h2>
        </div>
        <div className="contact__testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="contact__testimonial" key={index}>
              <p className="contact__testimonial-quote">{testimonial.quote}</p>
              <div className="contact__testimonial-author">
                <div className="contact__testimonial-avatar">{testimonial.initials}</div>
                <div className="contact__testimonial-info">
                  <div className="contact__testimonial-name">{testimonial.name}</div>
                  <div className="contact__testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
