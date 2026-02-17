import "../styles/ContactSection.css";

// Import images
import heroImage from "../assets/images/DSC_3666.webp";
import verticalImage from "../assets/images/IMG_1706.webp";
import gallery1 from "../assets/images/DSC_2498.webp";
import gallery2 from "../assets/images/DSC_8160.webp";
import gallery3 from "../assets/images/IMG_4435.webp";
import gallery4 from "../assets/images/DSC_8325.webp";
import patternBg from "../assets/green-pattern-bg.png";

function ContactSection() {
  const handleScrollToBooking = (e) => {
    e.preventDefault();
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Hero Image Section */}
      <div className="contact-hero">
        <img
          src={heroImage}
          alt="Gioia reformer pilates studio"
          className="contact-hero-image"
          loading="lazy"
        />
        <div className="contact-hero-overlay">
          <h2 className="contact-hero-title">Kontakt i lokacija</h2>
        </div>
      </div>

      {/* Information Grid - 3 columns */}
      <div
        className="contact-info-grid"
        style={{ "--pattern-bg": `url(${patternBg})` }}
      >
        {/* Address Card */}
        <div className="contact-info-card">
          <h3>Adresa</h3>
          <p>
            Gioia – reformer pilates studio
            <br />
            Verudela 8
            <br />
            52100 Pula, Hrvatska
          </p>
          <p className="contact-intro-text">
            Studio se nalazi u mirnom dijelu Verudele, nekoliko minuta hoda od
            mora. Lako dostupan autom, s besplatnim parkingom u blizini.
          </p>
        </div>

        {/* Contact & Hours Card */}
        <div className="contact-info-card">
          <div className="contact-details-block">
            <h3>Kontakt</h3>
            <p>
              <strong>Telefon:</strong>
              <br />
              <a href="tel:+385953896809" className="contact-link-editorial">
                095 389 6809
              </a>
            </p>
            <p>
              <strong>E-mail:</strong>
              <br />
              <a href="mailto:info@gioia.hr" className="contact-link-editorial">
                info@gioia.hr
              </a>
            </p>
          </div>

          <div className="contact-details-block">
            <h3>Radno vrijeme</h3>
            <p>
              <strong>Ponedjeljak – petak:</strong>
              <br />
              7–10 h, 16–19 h
            </p>
            <p>
              <strong>Subota:</strong>
              <br />
              8–11 h
            </p>
            <p>
              <strong>Nedjeljom:</strong> zatvoreno
            </p>
          </div>
        </div>

        {/* Vertical Image Column */}
        <div className="contact-image-column">
          <img src={verticalImage} alt="Gioia studio ambijent" loading="lazy" />
        </div>
      </div>

      {/* Pattern Divider */}
      <div className="contact-map-divider"></div>

      {/* Map Section */}
      <div className="contact-map-full">
        <iframe
          title="Gioia - reformer pilates studio lokacija"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.9375580498445!2d13.83649317659797!3d44.84320497465727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd3c7d9c47527%3A0x96f98e7e1837d5d7!2sGioia%20-%20reformer%20pilates%20studio!5e0!3m2!1sen!2shr!4v1764440583822!5m2!1sen!2shr"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Image Gallery Row */}
      <div className="contact-gallery-row">
        <div className="contact-gallery-item">
          <img src={gallery1} alt="Pilates rekviziti" loading="lazy" />
        </div>
        <div className="contact-gallery-item">
          <img src={gallery2} alt="Reformer detalj" loading="lazy" />
        </div>
        <div className="contact-gallery-item">
          <img src={gallery3} alt="Trening u akciji" loading="lazy" />
        </div>
        <div className="contact-gallery-item">
          <img src={gallery4} alt="Studio prostor" loading="lazy" />
        </div>
      </div>

      {/* CTA Footer */}
      <div className="contact-cta-footer">
        <p className="contact-cta-text">Spremna započeti svoj pilates put?</p>
        <a
          href="#booking"
          className="contact-cta-button"
          onClick={handleScrollToBooking}
        >
          Rezerviraj termin
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
