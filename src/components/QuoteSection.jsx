import "../styles/QuoteSection.css";

function QuoteSection() {
  return (
    <section className="quote-section-editorial">
      <div className="quote-container-editorial">
        <span className="quote-mark-editorial" aria-hidden="true">&ldquo;</span>
        <blockquote className="quote-text-editorial">
          "Change happens through movement, and movement heals."
        </blockquote>
        <cite className="quote-author-editorial">— Joseph Pilates</cite>
      </div>
    </section>
  );
}

export default QuoteSection;
