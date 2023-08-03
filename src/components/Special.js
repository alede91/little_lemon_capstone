import Card from "./Card";
import { Link } from "react-router-dom";

const Special = ({ data }) => {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week Specials!</h2>
        <Link to="menu">
          <button className="hero-section-button">ONLINE MENU</button>
        </Link>
      </div>
      <div className="specials-card-container">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
    </section>
  );
};

export default Special;
