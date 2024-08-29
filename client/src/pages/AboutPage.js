import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1>About Nebulous Reason</h1>
        <p>
          Welcome to <strong>Nebulous Reason</strong>, a blog built from the
          ground up by passionate individuals who believe in the power of free
          speech and the exchange of ideas. This platform was created to be a
          space where thoughts can be shared openly, where unconventional ideas
          are welcome, and where the spirit of curiosity and debate thrives.
        </p>
        <p>
          At Nebulous Reason, we believe that every idea deserves a voice, and
          that through dialogue and discussion, we can all grow. This blog is
          not just another site on the internet; it's a labor of love, crafted
          by hand and driven by the belief that the best content comes from the
          heart. Whether you're here to read, to write, or to engage with
          others, we welcome you to our corner of the web.
        </p>
        <p>
          We are committed to maintaining an open platform where a variety of
          topics can be explored—whether they are mainstream or on the fringes.
          We respect all viewpoints and encourage our readers to approach each
          topic with an open mind and a willingness to consider different
          perspectives.
        </p>
        <p>
          If you'd like to contribute, ask questions, or simply reach out, we
          would love to hear from you. You can contact us at{" "}
          <a href="mailto:nebulous@nebulousreason.link">
            nebulous@nebulousreason.link
          </a>
          .
        </p>
        <p>
          Thank you for visiting Nebulous Reason. We hope you find this blog as
          inspiring to read as it has been for us to create.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
