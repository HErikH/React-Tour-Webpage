import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArtstation, faFacebook, faInstagram, faYoutube, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
// import { faFace} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  // let a = 5
  // var b = 11
  // // [a, b] = [b, a]
  // a += b
  // b = a - b
  // a = a - b
  // console.log(a)
  return (
    <div className="footer">
      <section className="footer__subscription">
        <p className="footer__title">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer__text">You can unsubscribe at any time.</p>
        <div className="footer__email-form">
          <form>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="footer__input"
            />
            <Button buttonStyle="btn_outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer__links">
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer__link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer__link-wrapper">
          <div className="footer__link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer__link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>                     
      <section className="footer__social-media">
        <div className="footer__social-media-wrap">
          <div className="footer__logo">
            <Link to="/" className="footer__social-logo">
              TRVL
            <FontAwesomeIcon icon={faArtstation} className="fa-artstation"/>           
            </Link>
          </div>
          <small className="footer__website-rights">TRVL © 2020</small>
          <div className="footer__social-icons">
            <Link
              className="footer__social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
            <FontAwesomeIcon icon={faFacebook}/>
            </Link>
            <Link
              className="footer__social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
            <FontAwesomeIcon icon={faInstagram}/>
            </Link>
            <Link
              className="footer__social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
            <FontAwesomeIcon icon={faYoutube}/>
            </Link>
            <Link
              className="footer__social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
            <FontAwesomeIcon icon={faTwitter}/>
            </Link>
            <Link
              className="footer__social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
            <FontAwesomeIcon icon={faLinkedin}/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
