

  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Agency Owner",
      avatar: "SM",
      rating: 5,
      date: "April 2025",
      text: "Absolutely blown away by how polished the templates are. We launched our client's site in under a day — no page builder headaches, no back-and-forth. The Gutenberg integration alone is worth every penny.",
    },
    {
      id: 2,
      name: "James Okoye",
      role: "Freelance Developer",
      avatar: "JO",
      rating: 5,
      date: "March 2025",
      text: "The countdown timer and access control features saved me hours of custom dev work. Super fast performance too — my client's site loads in under 200ms on shared hosting. Clients are thrilled.",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "E-commerce Founder",
      avatar: "PS",
      rating: 4,
      date: "March 2025",
      text: "Multi-language support is seamless and the newsletter CSV export is a game changer for our marketing team. Drag & drop is intuitive. Took off one star only because I'd love more restaurant templates.",
    },
    {
      id: 4,
      name: "Tom Hargreaves",
      role: "Marketing Director",
      avatar: "TH",
      rating: 5,
      date: "February 2025",
      text: "SEO configuration straight from the dashboard is something I didn't know I needed until I had it. No more hunting through menus. Clean code, fast loads, and the support team responds within hours.",
    },
    {
      id: 5,
      name: "Lena Fischer",
      role: "UX Designer",
      avatar: "LF",
      rating: 5,
      date: "February 2025",
      text: "The pre-built templates are genuinely beautiful — not the usual generic stuff. I was skeptical about block editors but this one actually respects the design. Everything snaps into place perfectly.",
    },
    {
      id: 6,
      name: "Carlos Reyes",
      role: "Startup CTO",
      avatar: "CR",
      rating: 4,
      date: "January 2025",
      text: "Deployed three landing pages in a single sprint. The drag and drop is buttery smooth and access control for gated pages works exactly as advertised. Would be perfect with a few more developer docs.",
    },
  ];

  const StarIcon = ({ filled }) => (
    <svg
      className={`star ${filled ? "star--filled" : "star--empty"}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const ReviewCard = ({ review }) => (
    <div className="review-card">
      <div className="review-card__header">
        <div className="review-card__avatar">{review.avatar}</div>
        <div className="review-card__meta">
          <span className="review-card__name">{review.name}</span>
          <span className="review-card__role">{review.role}</span>
        </div>
      </div>
      <div className="review-card__stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <StarIcon key={n} filled={n <= review.rating} />
        ))}
      </div>
      <p className="review-card__text">{review.text}</p>
      <span className="review-card__date">{review.date}</span>
    </div>
  );



 function Review() {
    const [filter, setFilter] = useState("all");

    const filtered =
      filter === "all"
        ? reviews
        : reviews.filter((r) => r.rating === Number(filter));

    return (
      <section className="reviews-section">
        <div className="reviews-section__inner">
          <div className="reviews-section__heading">
            <Eyebrow>Some Customers Love</Eyebrow>
            <h2 className="hiw-h2">What our customers say</h2>
          </div>
          <div className="reviews-section__filters">
            {["all", "5", "4", "3"].map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "filter-btn--active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All Reviews" : `${f} Stars`}
              </button>
            ))}
          </div>

          <div className="reviews-grid">
            {filtered.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    );
 }


window.Review = Review;