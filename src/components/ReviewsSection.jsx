import "../styles/ReviewsSection.css";

import bgDSC1576 from "../assets/images/DSC_1576.webp";
import bgDSC8285 from "../assets/images/DSC_8285.webp";
import bgDSC8332 from "../assets/images/DSC_8332.webp";
import bgIMG1588 from "../assets/images/IMG_1588.webp";

const backgroundOptions = {
  DSC_1576: bgDSC1576,
  DSC_8285: bgDSC8285,
  DSC_8332: bgDSC8332,
  IMG_1588: bgIMG1588,
};

const selectedBackground = backgroundOptions.IMG_1588;

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

function ReviewsSection() {
  const featured = testimonials.find((t) => t.featured);
  const supporting = testimonials.filter((t) => !t.featured);

  return (
    <section
      className="testimonialsSection"
      id="reviews"
      style={{ backgroundImage: `url(${selectedBackground})` }}
    >
      <div className="testimonialsSection__overlay" />

      <div className="testimonialsSection__inner">
        <p className="testimonialsSection__eyebrow">Recenzije</p>
        <h2 className="testimonialsSection__title">
          Što kažu naše klijentice
        </h2>

        <div className="testimonialsSection__featured">
          <span className="testimonialsSection__quoteMark">&ldquo;</span>
          <blockquote className="testimonialsSection__featuredQuote">
            {featured.text}
          </blockquote>
          <p className="testimonialsSection__featuredName">{featured.name}</p>
        </div>

        <div className="testimonialsSection__divider" />

        <div className="testimonialsSection__grid">
          {supporting.map((t) => (
            <article key={t.id} className="testimonialsSection__card">
              <p className="testimonialsSection__cardText">{t.text}</p>
              <p className="testimonialsSection__cardName">{t.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
