import FooterImg from "../assets/Logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">

          <figure>
            <img className="footer-img" src={FooterImg} alt="Lettle Lemon Logo"></img>
          </figure>

          <div className="sitemap-container">
            <h2>SITEMAP</h2>
            <Link className="sitemap-container-link" to="/">
              Home
            </Link>
            <Link className="sitemap-container-link" to="/menu">
              Menu
            </Link>
            <Link className="sitemap-container-link" to="/reserve">
              Reserve
            </Link>
          </div>

          <div className="contactus-container">
            <h2>CONTACT US</h2>
            <address>
              Somewere in the wolrd!
            </address>

          </div>
        
        <div>
          <p>&copy; Developed by Alexandre Costa</p>
        </div>

      </footer>
    </>
  );
};

export default Footer;
