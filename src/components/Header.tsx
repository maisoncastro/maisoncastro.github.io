import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <img src="./public/me.jpg" alt="profile" />
      <div className="header-info">
        <div>
          <span>Nazim-Yoldas Sesen</span>
          <span>WEB DEVELOPER & UX/UI DESIGNER</span>
        </div>
        <div>
          <span>+1.514.345.8893</span>
          <span>NAZIMSESEN@GMAIL.COM</span>
          <span>MONTREAL, QUEBEC</span>
        </div>
      </div>
    </div>
  );
};
