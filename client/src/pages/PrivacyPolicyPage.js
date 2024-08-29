import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import NebulousReasonImage from "../components/NebulousReasonImage";
import "../css/styles.css";

function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-container">
      <Header />
      <NebulousReasonImage />
      <main className="privacy-policy-main">
        <h1>Privacy Policy</h1>
        <p>Welcome to Nebulous Reason!</p>

        <p>
          At Nebulous Reason, we value and respect your privacy. This Privacy
          Policy outlines our commitment to protecting your personal information
          and explains how we ensure that your data remains private and secure.
        </p>

        <h2>1. Data Collection</h2>
        <p>
          Nebulous Reason does not collect any personal data from its users. We
          do not require you to provide any personal information to access our
          content or participate in our discussions. Our platform is designed to
          allow you to explore and enjoy our content without the need to share
          any identifying details.
        </p>

        <h2>2. Tracking and Cookies</h2>
        <p>
          Nebulous Reason does not use tracking technologies, such as cookies or
          web beacons, to monitor your activity on our site. We believe in
          providing a browsing experience that respects your right to privacy
          and anonymity. You can navigate our site freely, knowing that your
          actions are not being tracked or logged.
        </p>

        <h2>3. User Anonymity</h2>
        <p>
          We respect your right to remain anonymous. You are not required to
          create an account or log in to access the content on Nebulous Reason.
          Should you choose to interact with our site, such as by leaving
          comments, you may do so without revealing your identity.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          Nebulous Reason does not share user data with third-party services.
          Since we do not collect any personal information, there is no data to
          be shared or sold to external entities. Your privacy is of utmost
          importance to us, and we take every measure to ensure it is preserved.
        </p>

        <h2>5. Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time to reflect
          changes in our practices or for other operational, legal, or
          regulatory reasons. We encourage you to review this page periodically
          to stay informed about our privacy practices.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please feel free to contact us at{" "}
          <a href="mailto:nebulous@nebulousreason.link">
            nebulous@nebulousreason.link
          </a>
          . We are committed to addressing any inquiries you may have about our
          approach to privacy and data protection.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicyPage;
