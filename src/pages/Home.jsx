import { Link } from "react-router-dom";

import Hero from "./../components/shared/Hero";
import CategoryCard from "../components/CategoryCard";
import ReviewCard from "../components/shared/ReviewCard";

import heroImg from "./../assets/goblins.jpeg";
import { images } from "./../assets/categories/index";
import mapImg from "./../assets/map.jpeg";

const Home = ({ categories, reviews }) => {
  const categoryCards = [...categories].map((category) => {
    const categoryName = category.slug.split("-").join(" ");
    return (
      <CategoryCard
        key={category.description}
        categoryImg={images[categoryName.split(" ").join("")]}
        categoryName={categoryName}
        categoryDescription={category.description}
      />
    );
  });

  const reviewCardStyles = {
    flex: "0 0 80%",
    maxWidth: "20.3125rem",
    margin: "0 0.625rem",
    scrollSnapAlign: "center",
  };

  const reviewCards = [...reviews].slice(0, 5).map((review) => {
    return (
      <ReviewCard
        key={review.review_id}
        review_id={review.review_id}
        img={review.review_img_url}
        title={review.title}
        category={review.category}
        owner={review.owner}
        created_at={review.created_at}
        comment_count={review.comment_count}
        votes={review.votes}
        style={reviewCardStyles}
      />
    );
  });

  return (
    <div className="homepage">
      <Hero
        img={heroImg}
        heading="Game Review Hub: Strategy and Fun"
        text="Welcome to NC Games, 
      your ultimate source for board game reviews! 
      Whether you're a seasoned board game pro or just starting out, 
      NC Games has something for everyone. 
      So sit back, relax, and let us guide you through the wonderful 
      world of board games!"
      />

      <section className="homepage__category-section">
        <h2 className="homepage__category-section__heading">Categories</h2>
        <div className="category-cards__container">{categoryCards}</div>
      </section>

      <img src={mapImg} alt="" className="homepage__map-img" />

      <section className="homepage__reviews-section">
        <div className="section__flex-container">
          <h2 className="homepage__reviews-section__heading">Reviews</h2>
          <Link to="/reviews">
            <button className="link-btn view-all-reviews-btn__desktop">
              View All
            </button>
          </Link>
        </div>
        <div className="homepage__review-cards__container">{reviewCards}</div>
        <Link to="/reviews">
          <button className="link-btn view-all-reviews-btn__mobile">
            View All
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
