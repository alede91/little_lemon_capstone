import "./About.css";
import aboutImg1 from "../assets/MarioAndAdrianB.jpg";
import aboutImg2 from "../assets/MarioandAdrianA.jpg";

const About = () => {

  return (
    <section className="about" id="about-navigation">
      <div className="about-text-container">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Yorem ipsum dolor sit amet consectetur, adipisicing elito. Oy sequi ipsam aspernatur assumenda praesentium eum accusamus,
          consequatur voluptatibus voluptate, quibusdam aliquam odio officiis animi nobis commodi dicta quon. Corrupti praesentium fuga
          perferendis, laborum provident exercitationem qui odio sed incidunt dolores culpa reprehenderit. Soluta, tenetur. Expedita quibusdam
          omnis facilis animi repellon.
        </p>
      </div>
      <div className="about-img-container">
        <div className="about-img1-container">
          <img src={aboutImg1} alt="About us 1" />
        </div>
        <div className="about-img2-container">
          <img className="about-pic img-fluid" src={aboutImg2} alt="About us 2" />
        </div>
      </div>
    </section>
  );
};

export default About;