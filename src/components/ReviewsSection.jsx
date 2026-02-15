import { useTranslation } from "react-i18next";
import "../styles/ReviewsSection.css";

// Import images for gallery
import reviewImage1 from "../assets/images/DSC_3707.webp";
import reviewImage2 from "../assets/images/DSC_8250.webp";
import reviewImage3 from "../assets/images/IMG_4790.webp";
import googleLogo from "../assets/logos/google-logo.webp";

const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Ana",
    rating: 5,
    date: "ožujak 2024.",
    text: "Predivan studio, intimna atmosfera i stvarno pažljiv pristup. Nakon nekoliko treninga osjećam puno manje napetosti u leđima.",
  },
  {
    id: 2,
    name: "Maja",
    rating: 5,
    date: "travanj 2024.",
    text: "Obje trenerice su izuzetno stručne i smirene. Vježbe su jasno objašnjene, a svaki pokret ima smisao – osjećam se sigurnije u svom tijelu.",
  },
  {
    id: 3,
    name: "Ivana",
    rating: 5,
    date: "svibanj 2024.",
    text: "Volim što su grupe male i što me netko stvarno ispravi kad treba. Nakon treninga se osjećam i jače i smirenije.",
  },
  {
    id: 4,
    name: "Petra",
    rating: 5,
    date: "lipanj 2024.",
    text: "Prostor je predivan i miran, a treninzi su izazovni na najbolji način. Idealno nakon radnog dana.",
  },
];

const galleryImages = [reviewImage1, reviewImage2, reviewImage3];

function ReviewsSection() {
  const { t } = useTranslation();

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        {/* Header with nav-logo watermark */}
        <div className="reviews-header-editorial">
          <div>
            <h2 className="reviews-title-editorial">
              {t("reviews.title", "Što kažu naše klijentice")}
            </h2>
            <p className="reviews-subtitle">
              Riječi žena koje su u Gioia Reformer Pilates studiju pronašle
              prostor za kvalitetan pokret, stabilnost i svakodnevni osjećaj
              dobrobiti.
            </p>
          </div>

          <a
            href="https://www.google.com/search?sxsrf=ANbL-n64SFby-FHwEZ-juLYdXuK8Dpgmww:1769260589054&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORcop8HIrFE8AdbGR7QP5HNX4rq0py2kODjppmr05EG-N0JZNcmx_pn0nZvLdc5GeL_gK_TJ91-mS78FPtlI05fevZBxFzccF0A9dH-Oinjn0GIePg%3D%3D&q=Gioia+-+reformer+pilates+studio+Reviews&aic=0"
            className="reviews-google-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="google-pill">
              <img src={googleLogo} alt="Google" className="google-logo" />
              <span className="google-text">
                Pogledaj sve recenzije na Googleu
              </span>
            </span>
          </a>
        </div>

        {/* Reviews Grid with interspersed images */}
        <div className="reviews-grid">
          {MOCK_REVIEWS.map((review, idx) => (
            <div key={review.id}>
              {/* Review Card */}
              <article className="review-card-editorial">
                <div className="review-text-editorial">{review.text}</div>

                <div className="review-footer">
                  <div>
                    <h3 className="review-name-editorial">{review.name}</h3>
                    <p className="review-date">{review.date}</p>
                  </div>
                  <div className="review-rating-editorial">
                    {"★".repeat(review.rating)}
                  </div>
                </div>
              </article>

              {/* Insert image card after every second review */}
              {idx % 2 === 1 &&
                idx < MOCK_REVIEWS.length &&
                galleryImages[Math.floor(idx / 2)] && (
                  <div className="review-image-card">
                    <img
                      src={galleryImages[Math.floor(idx / 2)]}
                      alt="Studio ambijent"
                      loading="lazy"
                    />
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
