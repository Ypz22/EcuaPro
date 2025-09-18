import React from "react";
import photo from "@/assets/CLEANING.png";

export default function Choose() {
    return (
        <section className="choose">
            <h2>WHY CHOOSE US?</h2>
            <p>“We guarantee cleaning with high quality standards and the commitment of an
                efficient team in every service.”</p>
            <div className="choose-container">
                <div className="choose-text">
                    <div >
                        <h4><span>1.</span>TRUST</h4>
                        <p>The trust of our clients is our greatest
                            guarantee. We work with transparency
                            and commitment in every service.</p>
                    </div>
                    <div>
                        <h4><span>2.</span>PROFESSIONALISM</h4>
                        <p>We have a highly trained team that ensures impeccable
                            results in every cleaning.</p>
                    </div>
                    <div>
                        <h4><span>3.</span>FLEXIBILITY</h4>
                        <p>We adapt to your needs, offering
                            personalized cleaning solutions whenever
                            you require them.</p>
                    </div>
                    <div>
                        <h4><span>4.</span>EXCELLENCE</h4>
                        <p>We constantly exceed quality standards to
                            provide you with a unique and satisfying
                            experience.</p>
                    </div>
                </div>
                <div className="choose-photo">
                    <img src={photo} alt="Why choose us?" />
                    <img src={photo} alt="Why choose us?" />
                </div>
            </div>
        </section>
    );
}