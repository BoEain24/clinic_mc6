import React from "react";
import "../styles/card/card.css";

const TreatmentsCardContainer = () => (
  <div className="card-container">
    <div
      className="card-img"
      style={{
        backgroundImage: "url('../assets/images/laser-hair-remover.jpg')",
      }}
    />
    <div className="card-content">
      <div className="card-section">
        <span className="card-title">Laser Hair Remover</span>
        <span className="card-description">
          Laser hair removal is a safe and effective treatment designed to
          permanently reduce unwanted hair. Using advanced laser ....
        </span>
      </div>
      <div className="card-actions">
        <span className="card-button-text">Check More</span>
        <div
          className="card-icon"
          style={{ backgroundImage: "url('../assets/images/arrow-icon.png')" }}
        />
      </div>
    </div>
  </div>
);

export default TreatmentsCardContainer;
