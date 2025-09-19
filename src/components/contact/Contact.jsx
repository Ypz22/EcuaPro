import React from "react";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        subject: "",
        message: "",
    });

    const sendWhatsApp = (e) => {
        e.preventDefault();
        const phoneNumber = "593979395043";
        const text = `Hola, soy ${form.name}. Tema: ${form.subject}. Mensaje: ${form.message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    const sendMail = (e) => {
        e.preventDefault();
        const email = "jeffersonyepez621@gmail.com";
        const subject = `Contacto: ${form.subject}`;
        const body = `Hola, soy ${form.name}.\n\n${form.message}`;
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact">
            <div className="contact-page">
                <h2>CONNECT WITH US</h2>
                <p>Let us make your home or office shine — contact us today!</p>
            </div>
            <div className="form-page">
                <p className="form-page-phrase">FILL OUT THE FORM BELOW AND WE’LL GET BACK TO YOU AS SOON AS POSSIBLE</p>
                <h2>CONTACT FORM</h2>
                <div className="forms-container">
                    <form className="form-contact" onSubmit={sendWhatsApp}>
                        <p>FOR A QUICK RESPONSE, WRITE TO US ON WHATSAPP</p>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Enter your Name..." value={form.name}
                                onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Enter a subject..." value={form.subject}
                                onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="4" placeholder="Message..." value={form.message}
                                onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit">Send WhatsApp</button>
                    </form>
                    <form className="form-contact" onSubmit={sendMail}>
                        <p>FOR A QUICK RESPONSE, WRITE TO US ON WHATSAPP</p>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Enter your Name..." value={form.name}
                                onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Enter a subject..." value={form.subject}
                                onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="4" placeholder="Message..." value={form.message}
                                onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit">Send Email</button>
                    </form>
                </div>
            </div>
        </div>

    );
}