import data from "../data";
import Card from "../components/Card";

const Menu = () => {
  return (
    <>
      <section className="menu-container">

        <h1>Our Menu</h1>

        <div className="appetizers">
          <h2>Appetizers</h2>
          <div className="appetizers-card">
            {data.map((element, index) => {
              return element.type === "appetizer" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>
        <div className="main-dishes">
          <h2>Main Dishes</h2>
          <div className="main-dishes-card">
            {data.map((element, index) => {
              return element.type === "main" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>
        <div className="desserts">
          <h2>Desserts</h2>
          <div className="desserts-card">
            {data.map((element, index) => {
              return element.type === "dessert" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
