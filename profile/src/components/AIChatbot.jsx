import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

// Knowledge base built strictly from Nikhil's verified resume and portfolio
const KNOWLEDGE_BASE = [
  {
    triggers: ['who', 'about', 'intro', 'yourself', 'nikhil', 'profile', 'summary'],
    response: `I'm **Nikhil Nishad**, a Full-Stack MERN Developer based in Bhilai, India. I specialize in building production-ready enterprise systems (ERP, HR, MIS, TMS, Mining & Inventory portals) with secure REST APIs and responsive, intuitive user interfaces.`
  },
  {
    triggers: ['project', 'work', 'system', 'build', 'portfolio', 'erp', 'mis', 'hrms', 'tms', 'mining', 'inventory'],
    response: `Here are Nikhil's key enterprise projects:\n\n1. **ERP & Master Management System** — Centralized roles, master data & multi-department workflows.\n2. **Mining & Coal Management System** — Real-time coal dispatch tracking, weighbridge integration & logistics.\n3. **Inventory Management System (IMS)** — Stock in/out, reorder alerts & ledger automation.\n4. **Transport Management (TMS)** — Fleet tracking, trip scheduling & freight billing.\n5. **MIS Dashboard** — Multi-department live analytics & Google Sheets integration.\n6. **HR Management System** — Outside attendance, GPS tracking & role-based dashboards.\n\nAll built using React.js, Node.js, Express.js, and MongoDB!`
  },
  {
    triggers: ['skill', 'stack', 'tech', 'technologies', 'tools', 'languages', 'frontend', 'backend', 'database'],
    response: `Nikhil's core technology stack includes:\n\n• **Frontend:** React.js, Next.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS\n• **Backend:** Node.js, Express.js, NestJS, REST APIs, Google Apps Script\n• **Databases:** MongoDB, MySQL, PostgreSQL, Supabase\n• **Auth & Security:** JWT Auth, OAuth Integration\n• **Tools:** Git, GitHub, Postman, Vercel, Netlify, Render, npm`
  },
  {
    triggers: ['experience', 'job', 'company', 'botivate', 'work history', 'intern', 'role'],
    response: `Nikhil's work experience:\n\n• **Full Stack Web Developer** at **Botivate Services LLP** (Mar 2026 – Present)\n  - Engineered 7+ enterprise production applications, client meetings, architecture & deployment.\n• **Full Stack Developer Intern** at **Botivate Services LLP** (Jan 2026 – Feb 2026)\n  - Hands-on enterprise module creation, database tuning & API optimization.`
  },
  {
    triggers: ['education', 'degree', 'college', 'university', 'cgpa', 'kalinga', 'avish', 'course'],
    response: `Nikhil's educational background:\n\n🎓 **Bachelor of Computer Application (BCA)**\n• Kalinga University, Raipur (2023 – 2026)\n• **CGPA: 3.79 / 4.00** (Academic Excellence)\n\n📜 **Full Stack Web Development Certification**\n• Avish Educom, Durg (2025 – 2026)`
  },
  {
    triggers: ['contact', 'email', 'phone', 'call', 'reach', 'hire', 'message', 'whatsapp', 'linkedin', 'github'],
    response: `You can directly reach Nikhil here:\n\n📧 **Email:** nikhilnishad622@gmail.com\n📱 **Phone:** +91 6264345297\n💼 **LinkedIn:** linkedin.com/in/nikhil-nishad-293176349\n🐙 **GitHub:** github.com/NikhilNishad06\n📍 **Location:** Bhilai, Chhattisgarh, India\n\nOr drop a quick message via the **Contact Form** below!`
  },
  {
    triggers: ['resume', 'cv', 'download'],
    response: `You can download Nikhil's updated official resume directly from the Hero or About section using the **"Download Resume"** button!`
  },
  {
    triggers: ['hi', 'hello', 'hey', 'namaste', 'hola', 'sup'],
    response: `Hello there! 👋 I am **Nikhil's AI Assistant**. How can I help you today? Feel free to ask about his **Projects**, **Skills**, **Work Experience**, or **Contact details**!`
  }
];

function getBotResponse(userMsg) {
  const query = userMsg.toLowerCase().trim();

  for (const item of KNOWLEDGE_BASE) {
    if (item.triggers.some((trigger) => query.includes(trigger))) {
      return item.response;
    }
  }

  return `Thanks for asking! Nikhil specializes in MERN stack development, custom ERPs, MIS dashboards, and scalable web apps.\n\nWould you like to know about his **Projects**, **Tech Stack**, **Experience**, or **Contact Info**?`;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Hi! I'm **Nikhil's AI Assistant** (100% Free & Live). Ask me anything about his projects, tech stack, or experience!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const botReply = getBotResponse(query);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 550);
  };

  const quickPrompts = [
    '🚀 Top Projects',
    '⚡ Tech Stack',
    '💼 Experience',
    '🎓 Education',
    '📞 Contact Info'
  ];

  return (
    <div className="ai-chatbot-wrapper">
      {/* Floating Trigger Button */}
      <button
        className={`ai-chatbot-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
      >
        <span className="ai-trigger-pulse" />
        <div className="ai-bot-icon">
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <rect x="4" y="8" width="16" height="12" rx="3" />
              <path d="M9 13v2" />
              <path d="M15 13v2" />
              <path d="M2 14h2" />
              <path d="M20 14h2" />
            </svg>
          )}
        </div>
        {!isOpen && <span className="ai-trigger-badge">AI Chat</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window glass">
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-header-left">
              <div className="ai-avatar-online">
                🤖
                <span className="online-dot" />
              </div>
              <div>
                <h4>Nikhil's AI Assistant</h4>
                <p>MERN Knowledge Base · 100% Free</p>
              </div>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* Quick suggestions pills */}
          <div className="ai-quick-pills">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                className="ai-pill"
                onClick={() => handleSend(prompt.replace(/^[^\w]+/, ''))}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="ai-chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`ai-message ${msg.sender}`}>
                {msg.sender === 'bot' && <div className="bot-tag">AI</div>}
                <div className="ai-msg-bubble">
                  {msg.text.split('\n').map((line, lIdx) => (
                    <span key={lIdx}>
                      {line.includes('**') ? (
                        line.split('**').map((part, pIdx) =>
                          pIdx % 2 === 1 ? <strong key={pIdx}>{part}</strong> : part
                        )
                      ) : (
                        line
                      )}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ai-message bot">
                <div className="bot-tag">AI</div>
                <div className="ai-msg-bubble typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Box */}
          <form
            className="ai-chat-input-area"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Ask about Nikhil's projects, skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button type="submit" disabled={!input.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
