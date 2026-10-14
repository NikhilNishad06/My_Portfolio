import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contacts } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });
  const [note, setNote] = useState('');
  const leftColRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    [leftColRef.current, formRef.current].forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in');
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.12 });
      observer.observe(el);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !/\S+@\S+\.\S+/.test(formData.email) || !formData.message.trim()) {
      setNote('Please fill in your name, a valid email, and a message.');
      return;
    }

    setIsSending(true);
    setNote('Sending message to Nikhil...');

    const projectType = formData.type.trim() || 'General Inquiry';

    // Support both direct parameter names and custom template variables
    const templateParams = {
      name: formData.name,
      nikh: formData.name,
      email: formData.email,
      nikhi: formData.email,
      project_type: projectType,
      demo: projectType,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    if (window.emailjs) {
      window.emailjs
        .send('service_5qohtre', 'template_3kavxdr', templateParams, 'BKMWfK2CWBzHepJM2')
        .then(() => {
          setIsSending(false);
          setNote('✓ Thank you! Your message has been sent successfully. I will get back to you shortly.');
          setFormData({ name: '', email: '', type: '', message: '' });
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
          setIsSending(false);
          // Fallback to mailto if network or client blocks
          const subject = encodeURIComponent(`New project — ${projectType}`);
          const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${projectType}\n\n${formData.message}`
          );
          window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`;
          setNote('Direct send encountered an issue, opened your mail app instead.');
        });
    } else {
      setIsSending(false);
      const subject = encodeURIComponent(`New project — ${projectType}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${projectType}\n\n${formData.message}`
      );
      window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`;
      setNote('Thanks — your mail app should open with the message ready.');
    }
  };

  return (
    <section id="contact">
      <div className="wrap cgrid">
        <div ref={leftColRef} className="rv">
          <div className="tag">Contact</div>
          <h2>
            Have a project? <span className="grad">Let's build it.</span>
          </h2>
          <p>
            Need an ERP, HR or MIS system, a full-stack web app or a business website? Tell me what you need and let's ship it.
          </p>
          <div className="btns">
            <a href="#form" className="btn solid">Start a Project</a>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Let's Connect
            </a>
          </div>
          <div className="clinks">
            <a href={`mailto:${contacts.email}`}>
              <span>Email</span>
              <span>{contacts.email}</span>
            </a>
            <a href={`tel:${contacts.phone}`}>
              <span>Phone</span>
              <span>{contacts.phoneLabel}</span>
            </a>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <div className="loc">
              <span>Location</span>
              <span>{contacts.location}</span>
            </div>
          </div>
        </div>

        <form
          id="form"
          className="glass rv"
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label htmlFor="fn">Name</label>
            <input
              id="fn"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="fe">Email</label>
            <input
              id="fe"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="fp">Project Type</label>
            <input
              id="fp"
              name="type"
              type="text"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="fm">Message</label>
            <textarea
              id="fm"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button className="btn solid" type="submit" disabled={isSending}>
              {isSending ? 'Sending Message...' : "Let's Build"}
            </button>
          </div>
          <div id="note" role="status">
            {note}
          </div>
        </form>
      </div>
    </section>
  );
}
