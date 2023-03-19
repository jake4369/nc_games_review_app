const CategoryCard = ({ categoryImg, categoryName, categoryDescription }) => {
  return (
    <div className="category-card">
      <img
        src={categoryImg}
        alt={`${categoryName} image`}
        className="category-card__img"
      />
      <h2 className="category-card__heading">{categoryName}</h2>

      <p className="category-card__description">
        {categoryDescription.substring(0, 90) + "..."}
      </p>

      <button className="link-btn category-card__btn">View</button>
    </div>
  );
};

export default CategoryCard;
