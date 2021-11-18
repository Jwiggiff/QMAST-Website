import { ReactComponent as InstagramLogo } from "../img/instagram.svg";
import { ReactComponent as FacebookLogo } from "../img/facebook.svg";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useContext, useEffect } from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="address">
        <p>Room 121 ILC</p>
        <p>45 Union Street</p>
        <p>Kingston, ON</p>
        <p>
          Email:{" "}
          <a target="_blank" href="mailto:sailboat@engsoc.queensu.ca">
            sailboat@engsoc.queensu.ca
          </a>
        </p>
      </div>
      <div className="socials">
        <a className="social" id="facebook">
          <FacebookLogo />
        </a>
        <a className="social" id="instagram">
          <InstagramLogo />
        </a>
      </div>
    </section>
  );
}
