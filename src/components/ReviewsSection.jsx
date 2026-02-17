import "../styles/ReviewsSection.css";
import sectionBg from "../assets/images/IMG_1588.webp";

const testimonials = [
  {
    id: 1,
    name: "Maja",
    text: "Obje trenerice su izuzetno stručne i smirene. Vježbe su jasno objašnjene, a svaki pokret ima smisao – osjećam se sigurnije u svom tijelu.",
    featured: true,
  },
  {
    id: 2,
    name: "Ana",
    text: "Predivan studio, intimna atmosfera i stvarno pažljiv pristup. Nakon nekoliko treninga osjećam puno manje napetosti u leđima.",
    featured: false,
  },
  {
    id: 3,
    name: "Ivana",
    text: "Volim što su grupe male i što me netko stvarno ispravi kad treba. Nakon treninga se osjećam i jače i smirenije.",
    featured: false,
  },
  {
    id: 4,
    name: "Petra",
    text: "Prostor je predivan i miran, a treninzi su izazovni na najbolji način. Idealno nakon radnog dana.",
    featured: false,
  },
];

const StarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
  </svg>
);

const Stars = ({ count = 5, className = "" }) => (
  <div className={`testimonialsSection__stars ${className}`}>
    {Array.from({ length: count }, (_, i) => (
      <StarIcon key={i} className="testimonialsSection__starIcon" />
    ))}
  </div>
);

function ReviewsSection() {
  const featured = testimonials.find((t) => t.featured);
  const supporting = testimonials.filter((t) => !t.featured);

  return (
    <section
      className="testimonialsSection"
      id="reviews"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      <div className="testimonialsSection__overlay" />

      <div className="testimonialsSection__inner">
        <p className="testimonialsSection__eyebrow">Recenzije</p>
        <h2 className="testimonialsSection__title">
          Iskustva naših klijenata
        </h2>

        <div className="testimonialsSection__credibilityBlock">
          <Stars className="testimonialsSection__stars--credibility" />
          <p className="testimonialsSection__credibilityText">
            na temelju 48 recenzija
          </p>
        </div>

        <div className="testimonialsSection__featured">
          <span className="testimonialsSection__quoteMark">&ldquo;</span>
          <blockquote className="testimonialsSection__featuredQuote">
            {featured.text}
          </blockquote>
          <p className="testimonialsSection__featuredName">{featured.name}</p>
          <Stars className="testimonialsSection__stars--featured" />
        </div>

        <div className="testimonialsSection__grid">
          {supporting.map((t) => (
            <article key={t.id} className="testimonialsSection__card">
              <p className="testimonialsSection__cardText">{t.text}</p>
              <div className="testimonialsSection__cardFooter">
                <p className="testimonialsSection__cardName">{t.name}</p>
                <Stars className="testimonialsSection__stars--card" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
