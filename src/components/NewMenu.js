import data from "../data";
import Card from "../components/Card";
import './NewMenu.css'


const NewMenu = () => {
  return (
    <>
      <section className="newMenu">

        <div>
          <h2>Appetizers</h2>
          <div className="appetizers-card">
            {data.map((element, index) => {
              return element.type === "appetizer" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>
        <div className="desserts newMenu-desserts">
          <h2>Desserts</h2>
          <div className="appetizers-card newMenu-desserts-card">
            {data.map((element, index) => {
              return element.type === "dessert" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewMenu;
