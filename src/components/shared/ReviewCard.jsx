import { Link } from "react-router-dom";

const ReviewCard = ({
  review_id,
  category,
  comment_count,
  created_at,
  title,
  img,
  owner,
  votes,
  style,
}) => {
  return (
    <div className="review-card" style={style}>
      <img src={img} alt="" className="review-card__img" />
      <h2 className="review-card__title">{title.substring(0, 15) + "..."}</h2>
      <h3 className="review-card__category">{category.split("-").join(" ")}</h3>
      <p className="review-card__owner-name">Review by {owner}</p>

      <div className="review-card__stats-container">
        <p className="review-card__created-at">{created_at.split("T")[0]}</p>
        <p className="review-card__comment-count">Comments: {comment_count}</p>
        <p className="review-card__votes">Votes: {votes}</p>
      </div>

      <Link to={`/reviews/${review_id}`}>
        <button className="link-btn review-card-btn">View</button>
      </Link>
    </div>
  );
};

export default ReviewCard;
