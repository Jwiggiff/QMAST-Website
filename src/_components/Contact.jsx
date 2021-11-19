import { ReactComponent as FacebookLogo } from "../img/facebook.svg";
import { ReactComponent as InstagramLogo } from "../img/instagram.svg";

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
        <a
          className="social"
          id="facebook"
          href="https://www.facebook.com/QMAST/?ref=bookmarks"
          target="_blank"
        >
          <FacebookLogo />
        </a>
        <a
          className="social"
          id="instagram"
          href="https://www.instagram.com/q_mast_/?hl=en"
          target="_blank"
        >
          <InstagramLogo />
        </a>
      </div>
    </section>
  );
}
