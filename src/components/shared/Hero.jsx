const Hero = ({ img, heading, text }) => {
  return (
    <div className="hero">
      <img src={img} alt="" className="hero__img" />
      <div className="hero__text-content">
        <h1 className="hero__text-content__heading">{heading}</h1>
        <p className="hero__text-content__text">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
