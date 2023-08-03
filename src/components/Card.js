import "./Card.css";

const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="card-img" style={{ background: `url(${data.image}) no-repeat center / cover` }}>
        </div>
        <div className="card-content">
          <h2>{data.name}</h2>
          <span className="card-price">
            {`${data.price}`}
          </span>
          <div className="card-info">

            <p>{data.description ? data.description : lorem}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
