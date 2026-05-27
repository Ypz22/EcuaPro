import cleaning1 from "@/assets/cleaning1.png";
import cleaning2 from "@/assets/cleaning2.png";
import { CHOOSE_REASONS } from "@/data/siteContent";

export default function Choose() {
  return (
    <section className="choose">
      <h2>WHY CHOOSE US?</h2>
      <p>
        &quot;We guarantee cleaning with high quality standards and the commitment of an
        efficient team in every service.&quot;
      </p>
      <div className="choose-container">
        <div className="choose-text">
          {CHOOSE_REASONS.map((reason, index) => (
            <div key={reason.title}>
              <h4>
                <span>{index + 1}.</span>
                {reason.title}
              </h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="choose-photo">
          <img className="cleaning-photo" src={cleaning1} alt="Professional cleaning team at work" />
          <img src={cleaning2} alt="Finished cleaning result" />
        </div>
      </div>
    </section>
  );
}
