export default function ServiceModalContent({ title, image, imageAlt, details }) {
  return (
    <div className="modal-content-div">
      <div className="modal-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="modal-details">
        <h3>{title}</h3>
        <ul>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
