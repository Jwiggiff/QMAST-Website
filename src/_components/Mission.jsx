import ScrollTrigger from "gsap/ScrollTrigger";
import { useContext, useEffect } from "react";
import missionImg from "../img/sailboat.jpg";

export default function Mission() {
  return (
    <section id="mission" className="mission">
      <div className="left">
        <h2>Our Mission</h2>
        <p>
          <strong>Queen's Mostly Atonomous Sailboat Team</strong> Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quod debitis aliquam esse
          repellat, ab commodi voluptates perspiciatis nulla, maiores
          necessitatibus quas ex amet eveniet accusamus reiciendis obcaecati!
          Excepturi, eveniet vitae!
        </p>
      </div>
      <div className="right">
        <img src={missionImg} alt="Sailboat" />
      </div>
    </section>
  );
}
