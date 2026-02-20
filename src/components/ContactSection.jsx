import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/ContactSection.css";
import { fadeUp, imageReveal, staggerContainer, viewport } from "../animations/motionPresets";

// Import images
import heroImage from "../assets/images/DSC_3666.webp";
import verticalImage from "../assets/images/IMG_4020.webp";
import gallery1 from "../assets/images/DSC_2498.webp";
import gallery2 from "../assets/images/DSC_8160.webp";
import gallery3 from "../assets/images/IMG_4435.webp";
import gallery4 from "../assets/images/DSC_8325.webp";
import patternBg from "../assets/green-pattern-bg.png";

function ContactSection() {
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!heroRef.current || !heroBgRef.current) { ticking = false; return; }
        const rect = heroRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        if (rect.bottom > -vh && rect.top < vh * 2) {
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          const shift = progress * 100;
          heroBgRef.current.style.transform = `translateY(${shift}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToBooking = (e) => {
    e.preventDefault();
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Hero Image Section — parallax bg untouched, animate the text overlay */}
      <div className="contact-hero" ref={heroRef}>
        <div
          ref={heroBgRef}
          className="contact-hero__bg"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Gioia reformer pilates studio"
        />
        <div className="contact-hero-overlay" />
        <motion.div
          className="contact-hero-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 className="contact-hero-title" variants={fadeUp}>
            Kontakt i lokacija
          </motion.h2>
        </motion.div>
      </div>

      {/* Information Grid - 3 columns */}
      <motion.div
        className="contact-info-grid"
        style={{ "--pattern-bg": `url(${patternBg})` }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {/* Address Card */}
        <motion.div className="contact-info-card" variants={fadeUp}>
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
        </motion.div>

        {/* Contact & Hours Card */}
        <motion.div className="contact-info-card" variants={fadeUp}>
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
              <a href="mailto:gioiareformer@gmail.com" className="contact-link-editorial">
                gioiareformer@gmail.com
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
        </motion.div>

        {/* Vertical Image Column */}
        <motion.div className="contact-image-column" variants={imageReveal}>
          <img src={verticalImage} alt="Gioia studio ambijent" loading="lazy" />
        </motion.div>
      </motion.div>

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
      <motion.div
        className="contact-gallery-row"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div className="contact-gallery-item" variants={imageReveal}>
          <img src={gallery1} alt="Pilates rekviziti" loading="lazy" />
        </motion.div>
        <motion.div className="contact-gallery-item" variants={imageReveal}>
          <img src={gallery2} alt="Reformer detalj" loading="lazy" />
        </motion.div>
        <motion.div className="contact-gallery-item" variants={imageReveal}>
          <img src={gallery3} alt="Trening u akciji" loading="lazy" />
        </motion.div>
        <motion.div className="contact-gallery-item" variants={imageReveal}>
          <img src={gallery4} alt="Studio prostor" loading="lazy" />
        </motion.div>
      </motion.div>

      {/* CTA Footer */}
      <motion.div
        className="contact-cta-footer"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p className="contact-cta-text" variants={fadeUp}>
          Spremna započeti svoj pilates put?
        </motion.p>
        <motion.div variants={fadeUp}>
          <a
            href="#booking"
            className="contact-cta-button"
            onClick={handleScrollToBooking}
          >
            Rezerviraj termin
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
