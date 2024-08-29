import React from "react";
import "../css/styles.css"; //Optional: Add custom styles if needed

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Nebulous Reason. All rights
          reserved.
        </p>
        <p>
          Contact us at{" "}
          <a href="mailto:nebulous@nebulousreason.link">
            nebulous@nebulousreason.link
          </a>
        </p>
        <nav className="footer-nav">
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
        </nav>
        <p className="footer-note">
          Built with love in the spirit of free speech and sharing ideas.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
