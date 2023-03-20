import { useParams } from "react-router-dom";
import Hero from "../components/shared/Hero";

const SingleReview = () => {
  const params = useParams();

  return (
    <div>
      <h1>Review {params.review_id}</h1>
    </div>
  );
};

export default SingleReview;
