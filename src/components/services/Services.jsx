import React, { useState } from "react";
import Casa3D from "@/assets/CASA3D.png";
import Office3D from "@/assets/FOTOOFICINA.png";
import Modal from "./Modal";
import modalBano from "@/assets/modalBano.jpg";
import modalBedRoom from "@/assets/modalBedrooms.jpg";
import modalKitchen from "@/assets/modalKitchen.jpg";
import modalLiving from "@/assets/modalLivingRoom.jpg";
import modalCommonAreas from "@/assets/modalCommonAreas.jpg";
import modalFloorsWindows from "@/assets/modalFloorsWindows.jpg";
import modalWorkstation from "@/assets/modalWorkstation.jpg";
import modalMeeting from "@/assets/modalMeeting.jpg";

export default function Services() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
    };

    return (
        <section className="services">
            <div className="gallery-page services-page">
                <h2>SERVICES</h2>
                <p>Explore our cleaning services designed <br />
                    for homes, offices, and businesses
                </p>
            </div>

            <div className="gallery-container">
                <p className="gallery-page-phrase services-page-phrase">
                    WE ADAPT TO YOUR NEEDS TO ENSURE SPOTLESS, <br />
                    ORGANIZED, AND WORRY-FREE SPACES.
                </p>
            </div>

            <div>
                <div className="services-text">
                    <h3>HOUSE SERVICES</h3>
                    <div className="plano">
                        <img src={Casa3D} alt="Plano" className="imagen-plano" />

                        <div className="label bathrooms" onClick={() => openModal(
                            <div className="modal-content-div">
                                <div className="modal-image">
                                    <img src={modalBano} alt="Bathroom" />
                                </div>
                                <div className="modal-details">
                                    <h3>BATHROOMS</h3>
                                    <ul>
                                        <li>Deep cleaning and disinfecting of sinks, faucets, and toilets.</li>
                                        <li>Removal of soap scum, mold, and scale from showers and
                                            bathtubs.</li>
                                        <li>Polishing of mirrors for a streak-free, sparkling finish.</li>
                                        <li>Thorough sweeping and mopping of floors.</li>
                                        <li>Emptying of trash cans and replacing liners.</li>
                                        <li>Organizing and dusting of surfaces and shelves.</li>
                                    </ul>
                                </div>
                            </div>
                        )}>BATHROOMS</div>
                        <div className="line bathrooms-line"></div>

                        <div className="label bedrooms" onClick={() => openModal(
                            <div className="modal-content-div">
                                <div className="modal-image">
                                    <img src={modalBedRoom} alt="BedRoom" />
                                </div>
                                <div className="modal-details">
                                    <h3>BEDROOMS</h3>
                                    <ul>
                                        <li>Dusting of all surfaces, including furniture, picture frames,
                                            and decorations.</li>
                                        <li>Polishing of mirrors for a streak-free, brilliant finish</li>
                                        <li>Making beds and arranging pillows.</li>
                                        <li>Vacuuming of carpets or sweeping and mopping of floors.</li>
                                        <li>Emptying of trash cans.</li>
                                    </ul>
                                </div>
                            </div>
                        )}>BEDROOMS</div>
                        <div className="line bedrooms-line"></div>

                        <div className="label kitchen" onClick={() => openModal(
                            <div className="modal-content-div">
                                <div className="modal-image">
                                    <img src={modalKitchen} alt="Bathroom" />
                                </div>
                                <div className="modal-details">
                                    <h3>KITCHEN</h3>
                                    <ul>
                                        <li>Cleaning and disinfecting of countertops and work surfaces.</li>
                                        <li>Cleaning of the stove and exteriors of appliances (oven,
                                            microwave, and refrigerator).</li>
                                        <li>Cleaning and polishing of the sink and faucets.</li>
                                        <li>Wiping down the exteriors of cabinets and drawers.</li>
                                        <li>Sweeping and mopping of floors.</li>
                                        <li>Emptying of trash and recycling.</li>
                                    </ul>
                                </div>
                            </div>
                        )}>KITCHEN</div>
                        <div className="line kitchen-line"></div>

                        <div className="label living" onClick={() => openModal(
                            <div className="modal-content-div">
                                <div className="modal-image">
                                    <img src={modalLiving} alt="Bathroom" />
                                </div>
                                <div className="modal-details">
                                    <h3>LIVING ROOM</h3>
                                    <ul>
                                        <li>Dusting of all surfaces, including tables, shelves, and
                                            electronic devices.</li>
                                        <li>Wiping down of coffee and side tables.</li>
                                        <li>Vacuuming of upholstery and carpets to remove dust
                                            and dirt.</li>
                                        <li>Arranging of cushions, pillows, and throws.</li>
                                        <li>Sweeping and mopping of floors.</li>
                                    </ul>
                                </div>
                            </div>
                        )}>LIVING ROOM</div>
                        <div className="line living-line"></div>
                    </div>
                </div>

                <div className="services-text">
                    <h3>OFFICE SERVICES</h3>
                    <p>INCLUDES BATHROOM AND KITCHEN CLEANING IF NECESSARY</p>
                    <div className="plano">
                        <img src={Office3D} alt="Plano oficina" className="imagen-plano" />

                        <div className="label workstations" onClick={() => openModal(
                            <div className="modal-content-div">
                                <div className="modal-image">
                                    <img src={modalWorkstation} alt="Bathroom" />
                                </div>
                                <div className="modal-details">
                                    <h3>WORKSTATIONS</h3>
                                    <ul>
                                        <li>Disinfecting and wiping down of desks, phones, and work
                                            surfaces.</li>
                                        <li>Cleaning of monitors, keyboards, and mice.</li>
                                        <li>Dusting of office chairs and equipment.</li>
                                        <li>Emptying of personal trash cans.</li>
                                        <li>Includes bathroom and kitchen cleaning if necessary</li>
                                    </ul>
                                </div>
                            </div>
                        )}>WORKSTATIONS</div>
                        <div className="line workstations-line"></div>

                        <div className="label floors" onClick={() => openModal(
                            <div className="modal-content-div">
                                <div className="modal-image">
                                    <img src={modalFloorsWindows} alt="Bathroom" />
                                </div>
                                <div className="modal-details">
                                    <h3>FLOORS & WINDOWS</h3>
                                    <ul>
                                        <li>Sweeping, vacuuming, and mopping of all floors.</li>
                                        <li>Cleaning of interior windows, mirrors, and glass surfaces.</li>
                                        <li>Wiping down of baseboards, corners, and edges.</li>
                                        <li>Wiping down of baseboards, corners, and edges.</li>
                                        <li>Includes bathroom and kitchen cleaning if necessary</li>
                                    </ul>
                                </div>
                            </div>
                        )}>FLOORS & WINDOWS</div>
                        <div className="line floors-line"></div>

                        <div className="label meeting" onClick={() => openModal(
                            <div className="modal-content-div">
                                <div className="modal-image">
                                    <img src={modalMeeting} alt="Bathroom" />
                                </div>
                                <div className="modal-details">
                                    <h3>MEETING AREA</h3>
                                    <ul>
                                        <li>Cleaning and disinfecting of conference tables and chairs.</li>
                                        <li>Organizing of furniture and presentation equipment.</li>
                                        <li>Wiping down screens, whiteboards, and projectors.</li>
                                        <li>Emptying of trash cans.</li>
                                        <li>Includes bathroom and kitchen cleaning if necessary</li>
                                    </ul>
                                </div>
                            </div>
                        )}>MEETING AREA</div>
                        <div className="line meeting-line"></div>

                        <div className="label common" onClick={() => openModal(
                            <div className="modal-content-div">
                                <div className="modal-image">
                                    <img src={modalCommonAreas} alt="Bathroom" />
                                </div>
                                <div className="modal-details">
                                    <h3>COMMON AREAS</h3>
                                    <ul>
                                        <li>Cleaning and disinfecting of countertops and tables.</li>
                                        <li>Wiping down exteriors of appliances (microwave,
                                            fridge, etc.) and sinks.</li>
                                        <li>Cleaning of furniture (sofas, chairs) and high-touch surfaces.</li>
                                        <li>Emptying of main trash bins.</li>
                                        <li>Includes bathroom and kitchen cleaning if necessary</li>
                                    </ul>
                                </div>
                            </div>
                        )}>COMMON AREAS</div>
                        <div className="line common-line"></div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {modalContent}
            </Modal>
        </section>
    );
}
