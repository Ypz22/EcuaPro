import { useState } from "react";
import { CONTACT_DETAILS } from "@/data/siteContent";
import ContactForm from "./ContactForm";

const INITIAL_FORM_STATE = {
  name: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [whatsAppForm, setWhatsAppForm] = useState(INITIAL_FORM_STATE);
  const [mailForm, setMailForm] = useState(INITIAL_FORM_STATE);

  const buildWhatsAppMessage = ({ name, subject, message }) =>
    `Hola, soy ${name}. Tema: ${subject}. Mensaje: ${message}`;

  const buildMailToLink = ({ name, subject, message }) => {
    const mailSubject = `Contacto: ${subject}`;
    const body = `Hola, soy ${name}.\n\n${message}`;

    return `mailto:${CONTACT_DETAILS.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
  };

  const handleFormChange = (setter) => ({ target: { name, value } }) => {
    setter((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();
    const url = `https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(whatsAppForm))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMailSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailToLink(mailForm);
  };

  return (
    <div className="contact">
      <div className="contact-page">
        <h2>CONNECT WITH US</h2>
        <p>Let us make your home or office shine - contact us today!</p>
      </div>
      <div className="form-page">
        <p className="form-page-phrase">
          FILL OUT THE FORM BELOW AND WE&apos;LL GET BACK TO YOU AS SOON AS POSSIBLE
        </p>
        <h2>CONTACT FORM</h2>
        <div className="forms-container">
          <ContactForm
            description="FOR A QUICK RESPONSE, WRITE TO US ON WHATSAPP"
            formId="whatsapp"
            values={whatsAppForm}
            onChange={handleFormChange(setWhatsAppForm)}
            onSubmit={handleWhatsAppSubmit}
            submitLabel="Send WhatsApp"
          />
          <ContactForm
            description="IF YOU PREFER EMAIL, SEND US YOUR MESSAGE HERE"
            formId="email"
            values={mailForm}
            onChange={handleFormChange(setMailForm)}
            onSubmit={handleMailSubmit}
            submitLabel="Send Email"
          />
        </div>
      </div>
    </div>
  );
}
