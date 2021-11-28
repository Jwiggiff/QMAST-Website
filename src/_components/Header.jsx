import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import { logo } from "../data.json";

export default function Header() {
  const headerRef = useRef();
  const [activeSection, setActiveSection] = useState("home");
  const [navMinimized, setNavMinimized] = useState(true);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const headerAnim = ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom top",
      end: 99999,
      toggleClass: { targets: headerRef.current, className: "minimized" },
    });

    const missionAnim = ScrollTrigger.create({
      trigger: "#mission",
      start: "top top",
      onEnter: () => {
        setActiveSection("mission");
      },
      onEnterBack: () => {
        setActiveSection("mission");
      },
      onLeaveBack: () => {
        setActiveSection("home");
      },
    });
    const teamsAnim = ScrollTrigger.create({
      trigger: "#teams",
      start: "top top",
      onEnter: () => {
        setActiveSection("teams");
      },
      onEnterBack: () => {
        setActiveSection("teams");
      },
    });

    return () => {
      headerAnim.kill();
      missionAnim.kill();
      teamsAnim.kill();
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <img src={logo} alt="QMAST" id="logo" />
      <button
        className="toggleNav"
        onClick={() => {
          setNavMinimized(!navMinimized);
        }}
      >
        <svg id="menu" viewBox="0 0 24 24" fill="currentColor">
          <rect x="0" y="2" rx="2" ry="2" width="24" height="4"></rect>
          <rect x="0" y="10" rx="2" ry="2" width="24" height="4"></rect>
          <rect x="0" y="18" rx="2" ry="2" width="24" height="4"></rect>
        </svg>
      </button>
      <ul id="nav" className={navMinimized ? "minimized" : null}>
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
