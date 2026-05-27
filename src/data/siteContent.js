import bathroomBefore from "@/assets/GALERIA/Bano.png";
import bathroomAfter from "@/assets/GALERIA/bano1.png";
import brushBefore from "@/assets/GALERIA/cepillo.png";
import brushAfter from "@/assets/GALERIA/cepillo1.png";
import showerBefore from "@/assets/GALERIA/ducha.png";
import showerAfter from "@/assets/GALERIA/ducha1.png";
import sinkBefore from "@/assets/GALERIA/lavamano2.png";
import sinkAfter from "@/assets/GALERIA/lavamano2.1.png";
import washbasinBefore from "@/assets/lavabo.jpg";
import washbasinAfter from "@/assets/lavabo1.jpg";
import toiletBefore from "@/assets/baño.png";
import toiletAfter from "@/assets/baño1.png";
import stoveBefore from "@/assets/cocina.png";
import stoveAfter from "@/assets/cocina1.png";
import housePlan from "@/assets/CASA3D.png";
import officePlan from "@/assets/FOTOOFICINA.png";
import bathroomModal from "@/assets/modalBano.jpg";
import bedroomsModal from "@/assets/modalBedrooms.jpg";
import kitchenModal from "@/assets/modalKitchen.jpg";
import livingRoomModal from "@/assets/modalLivingRoom.jpg";
import commonAreasModal from "@/assets/modalCommonAreas.jpg";
import floorsWindowsModal from "@/assets/modalFloorsWindows.jpg";
import workstationModal from "@/assets/modalWorkstation.jpg";
import meetingModal from "@/assets/modalMeeting.jpg";

export const NAV_ITEMS = [
  { label: "HOME", path: "/" },
  { label: "SERVICES", path: "/services" },
  { label: "GALLERY", path: "/gallery" },
  { label: "CONTACT US", path: "/contact" },
];

export const FOOTER_SERVICE_ITEMS = [
  "House Cleaning",
  "Floor Polishing",
  "Carpet Cleaning",
  "Floor Cleaning",
  "Home Organizing",
  "Commercial Cleaning",
  "Garage, Basement or Attic Cleaning",
];

export const CHOOSE_REASONS = [
  {
    title: "TRUST",
    description:
      "The trust of our clients is our greatest guarantee. We work with transparency and commitment in every service.",
  },
  {
    title: "PROFESSIONALISM",
    description:
      "We have a highly trained team that ensures impeccable results in every cleaning.",
  },
  {
    title: "FLEXIBILITY",
    description:
      "We adapt to your needs, offering personalized cleaning solutions whenever you require them.",
  },
  {
    title: "EXCELLENCE",
    description:
      "We constantly exceed quality standards to provide you with a unique and satisfying experience.",
  },
];

export const BEFORE_AFTER_ITEMS = [
  {
    before: stoveBefore,
    after: stoveAfter,
    beforeAlt: "Kitchen before cleaning",
    afterAlt: "Kitchen after cleaning",
  },
  {
    before: toiletBefore,
    after: toiletAfter,
    beforeAlt: "Bathroom before cleaning",
    afterAlt: "Bathroom after cleaning",
  },
  {
    before: washbasinBefore,
    after: washbasinAfter,
    beforeAlt: "Washbasin before cleaning",
    afterAlt: "Washbasin after cleaning",
  },
];

export const GALLERY_COLUMNS = [
  {
    title: "BEFORE",
    className: "before",
    items: [
      { src: bathroomBefore, alt: "Bathroom before cleaning" },
      { src: showerBefore, alt: "Shower before cleaning" },
      { src: brushBefore, alt: "Brush before cleaning" },
      { src: sinkBefore, alt: "Sink before cleaning" },
      { src: washbasinBefore, alt: "Washbasin before cleaning" },
      { src: toiletBefore, alt: "Toilet before cleaning" },
      { src: stoveBefore, alt: "Stove before cleaning" },
    ],
  },
  {
    title: "AFTER",
    className: "after",
    items: [
      { src: bathroomAfter, alt: "Bathroom after cleaning" },
      { src: showerAfter, alt: "Shower after cleaning" },
      { src: brushAfter, alt: "Brush after cleaning" },
      { src: sinkAfter, alt: "Sink after cleaning" },
      { src: washbasinAfter, alt: "Washbasin after cleaning" },
      { src: toiletAfter, alt: "Toilet after cleaning" },
      { src: stoveAfter, alt: "Stove after cleaning" },
    ],
  },
];

export const SERVICE_SECTIONS = [
  {
    title: "HOUSE SERVICES",
    image: housePlan,
    imageAlt: "House cleaning floor plan",
    labels: [
      {
        key: "bathrooms",
        label: "BATHROOMS",
        image: bathroomModal,
        imageAlt: "Bathroom cleaning service",
        details: [
          "Deep cleaning and disinfecting of sinks, faucets, and toilets.",
          "Removal of soap scum, mold, and scale from showers and bathtubs.",
          "Polishing of mirrors for a streak-free, sparkling finish.",
          "Thorough sweeping and mopping of floors.",
          "Emptying of trash cans and replacing liners.",
          "Organizing and dusting of surfaces and shelves.",
        ],
      },
      {
        key: "bedrooms",
        label: "BEDROOMS",
        image: bedroomsModal,
        imageAlt: "Bedroom cleaning service",
        details: [
          "Dusting of all surfaces, including furniture, picture frames, and decorations.",
          "Polishing of mirrors for a streak-free, brilliant finish.",
          "Making beds and arranging pillows.",
          "Vacuuming of carpets or sweeping and mopping of floors.",
          "Emptying of trash cans.",
        ],
      },
      {
        key: "kitchen",
        label: "KITCHEN",
        image: kitchenModal,
        imageAlt: "Kitchen cleaning service",
        details: [
          "Cleaning and disinfecting of countertops and work surfaces.",
          "Cleaning of the stove and exteriors of appliances (oven, microwave, and refrigerator).",
          "Cleaning and polishing of the sink and faucets.",
          "Wiping down the exteriors of cabinets and drawers.",
          "Sweeping and mopping of floors.",
          "Emptying of trash and recycling.",
        ],
      },
      {
        key: "living",
        label: "LIVING ROOM",
        image: livingRoomModal,
        imageAlt: "Living room cleaning service",
        details: [
          "Dusting of all surfaces, including tables, shelves, and electronic devices.",
          "Wiping down of coffee and side tables.",
          "Vacuuming of upholstery and carpets to remove dust and dirt.",
          "Arranging of cushions, pillows, and throws.",
          "Sweeping and mopping of floors.",
        ],
      },
    ],
  },
  {
    title: "OFFICE SERVICES",
    subtitle: "INCLUDES BATHROOM AND KITCHEN CLEANING IF NECESSARY",
    image: officePlan,
    imageAlt: "Office cleaning floor plan",
    labels: [
      {
        key: "workstations",
        label: "WORKSTATIONS",
        image: workstationModal,
        imageAlt: "Workstation cleaning service",
        details: [
          "Disinfecting and wiping down of desks, phones, and work surfaces.",
          "Cleaning of monitors, keyboards, and mice.",
          "Dusting of office chairs and equipment.",
          "Emptying of personal trash cans.",
          "Includes bathroom and kitchen cleaning if necessary.",
        ],
      },
      {
        key: "floors",
        label: "FLOORS & WINDOWS",
        image: floorsWindowsModal,
        imageAlt: "Floors and windows cleaning service",
        details: [
          "Sweeping, vacuuming, and mopping of all floors.",
          "Cleaning of interior windows, mirrors, and glass surfaces.",
          "Wiping down of baseboards, corners, and edges.",
          "Detail cleaning of traffic marks and buildup near corners.",
          "Includes bathroom and kitchen cleaning if necessary.",
        ],
      },
      {
        key: "meeting",
        label: "MEETING AREA",
        image: meetingModal,
        imageAlt: "Meeting area cleaning service",
        details: [
          "Cleaning and disinfecting of conference tables and chairs.",
          "Organizing of furniture and presentation equipment.",
          "Wiping down screens, whiteboards, and projectors.",
          "Emptying of trash cans.",
          "Includes bathroom and kitchen cleaning if necessary.",
        ],
      },
      {
        key: "common",
        label: "COMMON AREAS",
        image: commonAreasModal,
        imageAlt: "Common areas cleaning service",
        details: [
          "Cleaning and disinfecting of countertops and tables.",
          "Wiping down exteriors of appliances (microwave, fridge, etc.) and sinks.",
          "Cleaning of furniture (sofas, chairs) and high-touch surfaces.",
          "Emptying of main trash bins.",
          "Includes bathroom and kitchen cleaning if necessary.",
        ],
      },
    ],
  },
];

export const CONTACT_DETAILS = {
  phone: "+1 (929) 594 8111",
  whatsappNumber: "19295948111",
  email: "Sanymela12@gmail.com",
};
