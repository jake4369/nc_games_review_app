import Hero from "../components/shared/Hero";
import ReviewCard from "../components/shared/ReviewCard";

import reviewsImg from "./../assets/reviewsImg.jpeg";

const Reviews = ({ reviews }) => {
  const reviewCards = [...reviews].map((review) => {
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
      />
    );
  });

  return (
    <div className="reviews-page">
      <Hero
        img={reviewsImg}
        heading="Reviews"
        text="NC Games is the perfect place for board game enthusiasts to come together and share your thoughts, experiences, insights and opinions on the latest and greatest tabletop games!"
      />

      <div className="reviews-page__review-cards-container">{reviewCards}</div>
    </div>
  );
};

export default Reviews;
