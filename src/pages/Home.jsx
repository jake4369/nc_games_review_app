import Hero from "./../components/shared/Hero";
import CategoryCard from "../components/CategoryCard";

import heroImg from "./../assets/goblins.jpeg";
import { images } from "./../assets/categories/index";
import mapImg from "./../assets/map.jpeg";

const Home = ({ categories }) => {
  const categoryCards = categories.map((category) => {
    const categoryName = category.slug.split("-").join(" ");
    return (
      <CategoryCard
        key={category.slug}
        categoryImg={images[categoryName.split(" ").join("")]}
        categoryName={categoryName}
        categoryDescription={category.description}
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
        <h2 className="homepage__reviews-section__heading">Latest Reviews</h2>
      </section>
    </div>
  );
};

export default Home;
