import axios from "axios";

const reviewApi = axios.create({
  baseURL: "https://nc-games-api-yf5t.onrender.com/api",
});

// GET all reviews
export const getAllReviews = (sortBy = "created_at", orderBy = "desc") => {
  return reviewApi
    .get(`/reviews?sort_by=${sortBy}&order=${orderBy}`)
    .then((response) => {
      return response.data.reviews;
    });
};

// GET single review
export const getReviewById = (review_id) => {
  return reviewApi.get(`/reviews/${review_id}`).then((response) => {
    return response.data.review;
  });
};

// GET all categories
export const getAllCategories = () => {
  return reviewApi.get("/categories").then((response) => {
    return response.data.categories;
  });
};

// GET user by username
export const getUser = (username) => {
  return reviewApi.get(`/users/${username}`).then((response) => {
    return response.data.user;
  });
};
