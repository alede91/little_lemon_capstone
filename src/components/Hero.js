import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-info">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Link to="reserve">
          <button className="hero-section-button">RESERVE A TABLE</button>
        </Link>
      </div>
      <div className="hero-section-img">
        <div className="hero-section-img-container">
        </div>
      </div>
    </section>
  );
};

export default Hero;
