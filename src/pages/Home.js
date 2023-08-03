import Hero from "../components/Hero";
import Special from "../components/Special";
import Testimonials from "../components/Testimonials";
import About from "./About";
import bruschetta from "../assets/bruchetta.png";
import greekSalad from "../assets/greekSalad.jpg";
import dessert from "../assets/lemonDessert.jpg";

const data = [
  {
    name: "Greek Salad",
    price: "$12.99",
    image: greekSalad,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese. garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    image: bruschetta,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Special",
    price: "$5.00",
    image: dessert,
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
      <About />
    </>
  );
};

export default Home;
