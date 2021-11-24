import ScrollTrigger from "gsap/ScrollTrigger";
import { useContext, useEffect } from "react";
import { mission_image, mission_statement } from "../data.json";
import ReactMarkdown from "react-markdown";

export default function Mission() {
  return (
    <section id="mission" className="mission">
      <div className="left">
        <h2>Our Mission</h2>
        <ReactMarkdown>{mission_statement}</ReactMarkdown>
      </div>
      <div className="right">
        <img src={mission_image} alt="Sailboat" />
      </div>
    </section>
  );
}
