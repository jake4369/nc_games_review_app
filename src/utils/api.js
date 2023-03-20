import axios from "axios";

const reviewApi = axios.create({
  baseURL: "https://nc-games-api-yf5t.onrender.com/api",
});

// GET all reviews
export const getAllReviews = (sortBy = "created_at", orderBy = "desc") => {
  return reviewApi
    .get(`/reviews?sort_by=${sortBy}&order=${orderBy}`)
    .then((response) => {
      return response;
    });
};

// GET all catgories
export const getAllCategories = () => {
  return reviewApi.get("/categories").then((response) => {
    return response.data.categories;
  });
};
