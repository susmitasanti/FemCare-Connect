import React from "react";
import Classes from "../css/map.css";

function HospitalCard({ name, address, rating, phone, website }) {
  return (
    <div className={Classes.hospitalCard}>
      <h3 className={Classes.cardTitle}>{name}</h3>
      <p className={Classes.cardDetail}><strong>Address:</strong> {address}</p>
      <p className={Classes.cardDetail}><strong>Rating:</strong> {rating}</p>
      <p className={Classes.cardDetail}><strong>Phone:</strong> {phone}</p>
      <p className={Classes.cardDetail}>
        <strong>Website:</strong>{" "}
        {website !== "No website available" ? (
          <a href={website} target="_blank" rel="noopener noreferrer" className={Classes.cardLink}>
            {website}
          </a>
        ) : (
          website
        )}
      </p>
    </div>
  );
}

export default HospitalCard;
