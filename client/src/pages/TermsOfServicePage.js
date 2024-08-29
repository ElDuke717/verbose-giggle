import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../css/styles.css"; // Optional: For custom styles

function TermsOfServicePage() {
    return (
        <div className="terms-of-service-container">
            <Header />
            <main className="terms-of-service-main">
                <h1>Terms of Service</h1>
                
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing and using the Nebulous Reason website (the "Site"), you agree to comply with and be bound by these Terms of Service (the "Terms"). If you do not agree to these Terms, please do not use the Site.
                </p>

                <h2>2. Use of the Site</h2>
                <p>
                    The Site is provided for your personal, non-commercial use only. You may not use the Site for any illegal or unauthorized purpose. You agree to comply with all applicable laws, rules, and regulations in your use of the Site.
                </p>

                <h2>3. Content</h2>
                <p>
                    All content provided on the Site is for informational purposes only. While we strive to ensure that the information provided is accurate and up-to-date, Nebulous Reason makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the content.
                </p>

                <h2>4. User Conduct</h2>
                <p>
                    You agree not to engage in any illegal, harmful, or abusive activity on the Site. This includes, but is not limited to, harassment, defamation, hate speech, spamming, or uploading malicious content. Nebulous Reason reserves the right to moderate and remove any content or activity that is deemed to be in violation of these Terms or that may harm the Site or its users.
                </p>

                <h2>5. Moderation and Removal of Content</h2>
                <p>
                    Nebulous Reason has the sole discretion to moderate, edit, or remove any content or activity on the Site that violates these Terms, including but not limited to, any illegal or harmful activity. We reserve the right to take appropriate action, including suspending or terminating access to the Site, for any user who engages in such conduct.
                </p>

                <h2>6. Intellectual Property</h2>
                <p>
                    All intellectual property rights in the Site and its content, including but not limited to text, graphics, logos, and images, are owned by Nebulous Reason or its licensors. You may not reproduce, distribute, or create derivative works from any content on the Site without the express written permission of Nebulous Reason.
                </p>

                <h2>7. Limitation of Liability</h2>
                <p>
                    In no event shall Nebulous Reason be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the Site. This limitation of liability applies to the fullest extent permitted by law.
                </p>

                <h2>8. Changes to the Terms</h2>
                <p>
                    Nebulous Reason reserves the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting to the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.
                </p>

                <h2>9. Governing Law</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Nebulous Reason operates, without regard to its conflict of law provisions.
                </p>

                <h2>10. Contact Information</h2>
                <p>
                    If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:nebulous@nebulousreason.link">nebulous@nebulousreason.link</a>.
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default TermsOfServicePage;