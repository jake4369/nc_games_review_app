import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, getUser } from "../utils/api";

import Hero from "../components/shared/Hero";
import { BsHandThumbsUp } from "react-icons/bs";

const SingleReview = () => {
  const params = useParams();
  const [review, setReview] = useState({});
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    getReviewById(params.review_id).then((reviewData) => {
      console.log(reviewData);
      setReview(reviewData);
    });
  }, [params.id]);

  useEffect(() => {
    getUser(review.owner).then((userData) => {
      setUserAvatar(userData.avatar_url);
    });
  }, [review]);

  return (
    <div className="single-review-page">
      <Hero
        img={review.review_img_url}
        heading={review.title}
        text={review.category?.toUpperCase().split("-").join(" ")}
      />

      <div className="single-review-container">
        <div className="single-review__author-info">
          <img
            src={userAvatar}
            alt={`${review.owner}'s avatar image`}
            className="single-review__author-avatar"
          />
          <span className="single-review__author-name">{review.owner}</span>
          <span className="single-review__created-at">
            {review.created_at?.split("T")[0]}
          </span>
        </div>

        <p className="single-review__review-body">{review.review_body}</p>

        <div className="single-review__stats">
          <div className="votes-container">
            <BsHandThumbsUp className="thumbs-up-icon" />
            <span className="single-review__stats_votes">
              Votes: {review.votes}
            </span>
          </div>

          <span className="single-review__stats_comments">
            Comments: {review.comment_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
