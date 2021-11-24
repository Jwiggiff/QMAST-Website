import ReactMarkdown from "react-markdown";
import {
  software_image,
  software_paragraph,
  electrical_image,
  electrical_paragraph,
  mechanical_image,
  mechanical_paragraph,
} from "../data.json";

export default function Teams() {
  return (
    <section id="teams" className="teams">
      <div className="team">
        <img src={software_image} alt="Software" className="background" />
        <h2>Software</h2>
        <ReactMarkdown>{software_paragraph}</ReactMarkdown>
      </div>
      <div className="team">
        <img src={electrical_image} alt="Electrical" className="background" />
        <h2>Electrical</h2>
        <ReactMarkdown>{electrical_paragraph}</ReactMarkdown>
      </div>
      <div className="team">
        <img src={mechanical_image} alt="Mechanical" className="background" />
        <h2>Mechanical</h2>
        <ReactMarkdown>{mechanical_paragraph}</ReactMarkdown>
      </div>
    </section>
  );
}
