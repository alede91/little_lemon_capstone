import "./TestimonialsCard.css";

const TestimonialsCard = ({ data }) => {

  const caracterStar = "★"
  
  const randomRepeat = Math.floor(Math.random() * 5) + 3;

  return (
    <div className="testimonials-card-container">
      <div className="testimonials-card-img-container">
        <img className="testimonials-card-img" src={data.picture.large} alt="" />
        <h2>{data.name.first}</h2>
      </div>
      <p>{caracterStar.repeat(randomRepeat)}</p>
      <p>&quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, tenetur&quot;</p>
    </div>
  );
};

export default TestimonialsCard;
