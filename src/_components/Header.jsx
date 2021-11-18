import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useRef, useState } from "react";
// import { ActiveSection } from "../App";

export default function Header() {
  const headerRef = useRef();
  // const { activeSection, setActiveSection } = useContext(ActiveSection);
  const [activeSection, setActiveSection] = useState("home");

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom top",
      end: 99999,
      toggleClass: { targets: headerRef.current, className: "minimized" },
      // markers: true
    });

    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      onEnter: () => {
        setActiveSection("home");
      },
    });
    ScrollTrigger.create({
      trigger: "#mission",
      start: "top top",
      onEnter: () => {
        setActiveSection("mission");
      },
      onEnterBack: () => {
        setActiveSection("mission");
      },
    });
    ScrollTrigger.create({
      trigger: "#teams",
      start: "top top",
      onEnter: () => {
        setActiveSection("teams");
      },
      onEnterBack: () => {
        setActiveSection("teams");
      },
    });
  });

  return (
    <div className="header" ref={headerRef}>
      <img src="" alt="QMAST" id="logo" />
      <ul id="nav">
        <li>
          <a className={activeSection == "home" ? "active" : null} href="#">
            Home
          </a>
        </li>
        <li>
          <a
            className={activeSection == "mission" ? "active" : null}
            href="#mission"
          >
            Our Mission
          </a>
        </li>
        <li>
          <a
            className={activeSection == "teams" ? "active" : null}
            href="#teams"
          >
            Teams
          </a>
        </li>
      </ul>
    </div>
  );
}
