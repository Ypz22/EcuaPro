import React from "react";

export default function Contact() {
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
                    <div className="form-contact">
                        <p>FOR A QUICK RESPONSE, WRITE TO US ON WHATSAPP</p>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Enter your Name..." required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Enter a subject..." required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="4" placeholder="Message..." required></textarea>
                        </div>
                        <button>Submit</button>
                    </div>
                    <div className="form-contact">
                        <p>FOR A QUICK RESPONSE, WRITE TO US ON WHATSAPP</p>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Enter your Name..." required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" name="subject" placeholder="Enter a subject..." required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="4" placeholder="Message..." required></textarea>
                        </div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    );
}