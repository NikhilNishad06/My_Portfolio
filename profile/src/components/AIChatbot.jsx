import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

// Knowledge base built strictly from Nikhil's verified resume and portfolio (in friendly Hinglish)
const KNOWLEDGE_BASE = [
  {
    triggers: ['who', 'about', 'intro', 'yourself', 'nikhil', 'profile', 'summary', 'kon', 'kaun'],
    response: `Main hoon **Nikhil Nishad**! Bhilai, India se ek Full-Stack MERN Developer. Main production-ready enterprise systems jaise ERP, HRMS, MIS dashboards, TMS, aur Mining portals banata hoon with secure REST APIs and smooth user interfaces.`
  },
  {
    triggers: ['project', 'work', 'system', 'build', 'portfolio', 'erp', 'mis', 'hrms', 'tms', 'mining', 'inventory', 'kaam'],
    response: `Yeh hain Nikhil ke top enterprise projects:\n\n1. **ERP & Master Management System** — Centralized roles, master data & multi-department workflows.\n2. **Mining & Coal Management System** — Real-time coal dispatch tracking, weighbridge integration & logistics.\n3. **Inventory Management System (IMS)** — Stock in/out, reorder alerts & ledger automation.\n4. **Transport Management (TMS)** — Fleet tracking, trip scheduling & freight billing.\n5. **MIS Dashboard** — Multi-department live analytics & Google Sheets integration.\n6. **HR Management System** — Outside attendance, GPS tracking & role-based dashboards.\n\nYeh sab React.js, Node.js, Express.js aur MongoDB se bane hain!`
  },
  {
    triggers: ['skill', 'stack', 'tech', 'technologies', 'tools', 'languages', 'frontend', 'backend', 'database'],
    response: `Nikhil ka core technology stack yeh hai:\n\n• **Frontend:** React.js, Next.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS\n• **Backend:** Node.js, Express.js, NestJS, REST APIs, Google Apps Script\n• **Databases:** MongoDB, MySQL, PostgreSQL, Supabase\n• **Auth & Security:** JWT Auth, OAuth Integration\n• **Tools:** Git, GitHub, Postman, Vercel, Netlify, Render, npm`
  },
  {
    triggers: ['experience', 'job', 'company', 'botivate', 'work history', 'intern', 'role'],
    response: `Nikhil ka work experience:\n\n• **Full Stack Web Developer** at **Botivate Services LLP** (Mar 2026 – Present)\n  - 7+ enterprise production applications banaye, client architecture aur deployment lead kiya.\n• **Full Stack Developer Intern** at **Botivate Services LLP** (Jan 2026 – Feb 2026)\n  - Enterprise modules, database tuning aur API optimization pe hands-on kaam kiya.`
  },
  {
    triggers: ['education', 'degree', 'college', 'university', 'cgpa', 'kalinga', 'avish', 'course', 'padhai'],
    response: `Nikhil ka educational background:\n\n🎓 **Bachelor of Computer Application (BCA)**\n• Kalinga University, Raipur (2023 – 2026)\n• **CGPA: 3.79 / 4.00** (Academic Excellence)\n\n📜 **Full Stack Web Development Certification**\n• Avish Educom, Durg (2025 – 2026)`
  },
  {
    triggers: ['contact', 'email', 'phone', 'call', 'reach', 'hire', 'message', 'whatsapp', 'linkedin', 'github', 'sampark'],
    response: `Aap Nikhil se directly connect kar sakte hain:\n\n📧 **Email:** nikhilnishad622@gmail.com\n📱 **Phone:** +91 6264345297\n💼 **LinkedIn:** linkedin.com/in/nikhil-nishad-293176349\n🐙 **GitHub:** github.com/NikhilNishad06\n📍 **Location:** Bhilai, Chhattisgarh, India\n\nYa fir neeche diye **Contact Form** se message bhej sakte hain!`
  },
  {
    triggers: ['resume', 'cv', 'download'],
    response: `Aap Nikhil ka updated official resume Hero section ya About section ke **"Download Resume"** button se seedhe download kar sakte hain!`
  },
  {
    triggers: ['hi', 'hello', 'hey', 'namaste', 'hola', 'sup', 'kaise', 'kya hal'],
    response: `Hello ji! 👋 Main hoon **Nikhil's AI Assistant**. Aap mujhse Nikhil ke **Projects**, **Tech Stack**, **Experience** ya **Contact details** ke baare mein kuch bhi pooch sakte hain!`
  }
];

function getBotResponse(userMsg) {
  const query = userMsg.toLowerCase().trim();

  for (const item of KNOWLEDGE_BASE) {
    if (item.triggers.some((trigger) => query.includes(trigger))) {
      return item.response;
    }
  }

  return `Poochne ke liye shukriya! Nikhil MERN stack, custom ERPs, MIS dashboards aur full-stack web applications me expert hain.\n\nAap unke **Projects**, **Tech Stack**, **Experience**, ya **Contact Info** ke baare me jaan-na chahenge?`;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Namaste! Main hoon **Nikhil's AI Assistant** (Robotic Voice Enabled). Aap mujhse Nikhil ke projects, skills ya experience ke baare me kuch bhi pooch sakte hain!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Robotic Text-to-Speech function
  const speakRobotic = (text) => {
    if (!voiceEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Stop any ongoing speech

    // Clean markdown asterisks and emojis for clear robot voice
    const cleanText = text
      .replace(/\*\*/g, '')
      .replace(/•/g, '')
      .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
      .replace(/\n+/g, '. ')
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Robotic voice acoustics: slightly higher pitch, crisp cadence
    utterance.pitch = 1.3; // Robotic tone
    utterance.rate = 1.05; // Crisp steady speed
    utterance.volume = 1;

    // Pick Indian English (en-IN) voice for natural Hinglish pronunciations, or fallback to US/English
    const voices = window.speechSynthesis.getVoices();
    const hindiIndianVoice = voices.find((v) => v.lang === 'en-IN' || v.lang.startsWith('en-IN') || v.lang === 'hi-IN')
      || voices.find((v) => v.name.includes('India') || v.name.includes('Ravi') || v.name.includes('Heera'))
      || voices.find((v) => v.lang.startsWith('en'));

    if (hindiIndianVoice) utterance.voice = hindiIndianVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const toggleVoice = () => {
    if (voiceEnabled) {
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
      setVoiceEnabled(false);
    } else {
      setVoiceEnabled(true);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Stop speaking prior answer if new message sent
    stopSpeaking();

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const botReply = getBotResponse(query);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
      speakRobotic(botReply);
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
                <p>
                  {isSpeaking ? (
                    <span className="ai-speaking-status">
                      <span className="voice-wave" />
                      <span className="voice-wave" />
                      <span className="voice-wave" />
                      Robotic Voice Speaking...
                    </span>
                  ) : (
                    "MERN Knowledge Base · 100% Free"
                  )}
                </p>
              </div>
            </div>

            <div className="ai-header-actions">
              {/* Voice Mute/Unmute Toggle */}
              <button
                className={`ai-voice-btn ${voiceEnabled ? 'active' : 'muted'} ${isSpeaking ? 'speaking' : ''}`}
                onClick={toggleVoice}
                title={voiceEnabled ? (isSpeaking ? "Stop Speaking / Mute Voice" : "Voice Enabled (Robotic)") : "Unmute Robotic Voice"}
                aria-label="Toggle Robotic Audio"
              >
                {voiceEnabled ? (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                ) : (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                )}
              </button>

              <button className="ai-close-btn" onClick={() => { stopSpeaking(); setIsOpen(false); }}>✕</button>
            </div>
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
                {msg.sender === 'bot' && (
                  <div className="bot-meta-row">
                    <span className="bot-tag">AI ROBOT</span>
                    <button
                      className="ai-audio-speak-btn"
                      onClick={() => speakRobotic(msg.text)}
                      title="Play Robotic Audio"
                      aria-label="Listen with robotic voice"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                      <span>Listen</span>
                    </button>
                  </div>
                )}
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
              placeholder="Nikhil ke projects, skills ke baare me poochhein..."
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
