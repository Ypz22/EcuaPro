import { GALLERY_COLUMNS } from "@/data/siteContent";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-page">
        <h2>GALLERY</h2>
        <p>Discover the difference we make</p>
      </div>
      <div className="gallery-container">
        <p className="gallery-page-phrase">
          IN OUR GALLERY, YOU&apos;LL FIND REAL EXAMPLES OF CLEANING: KITCHENS,
          <br />
          BATHROOMS, AND OFFICES TRANSFORMED, SHOWCASING OUR
          <br />
          COMMITMENT TO QUALITY AND DETAIL.
        </p>
      </div>
      <div className="gallery-images-container">
        {GALLERY_COLUMNS.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            <div className={`gallery-images ${column.className}`}>
              {column.items.map((item) => (
                <img
                  key={item.src}
                  className="gallery-img"
                  src={item.src}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
