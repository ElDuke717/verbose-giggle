import React from "react";

function NebulousReasonImage() {
  return (
    <img
      src={process.env.PUBLIC_URL + "/assets/nebulous-reason_rect.png"}
      alt="Nebulous Reason"
      style={{
        width: "300px",
        height: "200px",
        objectFit: "contain",
        borderRadius: "10px",
      }}
    />
  );
}

export default NebulousReasonImage;
