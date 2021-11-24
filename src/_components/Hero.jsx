import gsap from "gsap";
import { useEffect, useRef } from "react";
import { logo } from "../data.json";

export default function Hero() {
  const heroRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
      .to(leftRef.current, { translateX: "3em" }, "<")
      .to(rightRef.current, { translateX: "-2.5em" }, "<");
  });

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <img src={logo} alt="QMAST" />
      <h1 ref={leftRef}>Design</h1>
      <h1>Build</h1>
      <h1 ref={rightRef}>Race</h1>
    </section>
  );
}
