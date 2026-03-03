import './Contact.css';
import { IconEnvelope, IconSend, IconClear } from '../components/PixelIcons';
import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.message) {
            setSent(true);
        }
    };

    if (sent) {
        return (
            <div className="contact-sent">
                <div className="contact-sent-icon"><IconEnvelope size={48} /></div>
                <p className="contact-sent-title">Message Sent!</p>
                <p className="contact-sent-body">
                    Thank you, <strong>{form.name}</strong>! Your message has been delivered to the NEXUS relay station.
                    Expect a response at <strong>{form.email}</strong> within 24–48 hours.
                </p>
                <button className="retro-btn" onClick={() => { setForm({ name: '', email: '', message: '' }); setSent(false); }}>
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form className="contact-root" onSubmit={handleSend} id="contact-form">
            <div className="contact-header">
                <IconEnvelope size={14} /> New Message — Contact Form v1.0
            </div>

            <div className="contact-field">
                <label className="contact-label" htmlFor="contact-name">From (Name):</label>
                <input
                    className="retro-input"
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name..."
                    required
                />
            </div>

            <div className="contact-field">
                <label className="contact-label" htmlFor="contact-email">Reply-To (Email):</label>
                <input
                    className="retro-input"
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                />
            </div>

            <div className="contact-field contact-field-grow">
                <label className="contact-label" htmlFor="contact-message">Message Body:</label>
                <textarea
                    className="retro-input contact-textarea"
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    required
                />
            </div>

            <div className="contact-actions">
                <button type="submit" className="retro-btn contact-send-btn">
                    <IconSend size={12} /> Send Message
                </button>
                <button type="button" className="retro-btn" onClick={() => setForm({ name: '', email: '', message: '' })}>
                    <IconClear size={12} /> Clear
                </button>
            </div>
        </form>
    );
}
