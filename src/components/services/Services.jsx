import { SERVICE_SECTIONS } from "@/data/siteContent";
import { useState } from "react";
import Modal from "./Modal";
import ServiceModalContent from "./ServiceModalContent";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services">
      <div className="gallery-page services-page">
        <h2>SERVICES</h2>
        <p>
          Explore our cleaning services designed
          <br />
          for homes, offices, and businesses
        </p>
      </div>

      <div className="gallery-container">
        <p className="gallery-page-phrase services-page-phrase">
          WE ADAPT TO YOUR NEEDS TO ENSURE SPOTLESS,
          <br />
          ORGANIZED, AND WORRY-FREE SPACES.
        </p>
      </div>

      <div>
        {SERVICE_SECTIONS.map((section) => (
          <div className="services-text" key={section.title}>
            <h3>{section.title}</h3>
            {section.subtitle ? <p>{section.subtitle}</p> : null}
            <div className="plano">
              <img src={section.image} alt={section.imageAlt} className="imagen-plano" />

              {section.labels.map((service) => (
                <div key={service.key}>
                  <button
                    type="button"
                    className={`label ${service.key}`}
                    onClick={() => setSelectedService(service)}
                  >
                    {service.label}
                  </button>
                  <div className={`line ${service.key}-line`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={Boolean(selectedService)} onClose={() => setSelectedService(null)}>
        {selectedService ? (
          <ServiceModalContent
            title={selectedService.label}
            image={selectedService.image}
            imageAlt={selectedService.imageAlt}
            details={selectedService.details}
          />
        ) : null}
      </Modal>
    </section>
  );
}
