import softwareImg from "../img/software.jpg";
import electricalImg from "../img/electrical.jpg";
import mechanicalImg from "../img/mechanical.jpg";

export default function Teams() {
  return (
    <section id="teams" className="teams">
      <div className="team">
        <img src={softwareImg} alt="Software" className="background" />
        <h2>Software</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          consequatur tenetur. Cupiditate accusantium repellendus facere
          blanditiis pariatur nam voluptatem harum soluta voluptates! A, eum
          culpa aspernatur tempora libero tenetur excepturi, cum blanditiis
          dolorum adipisci aut architecto nesciunt illum soluta? Necessitatibus
          ex iste, nulla recusandae inventore nihil minima. Nihil, doloribus
          dolores?
        </p>
      </div>
      <div className="team">
        <img src={electricalImg} alt="Electrical" className="background" />
        <h2>Electrical</h2>
        <p>
          Velit, nesciunt nobis, voluptates facere corrupti blanditiis natus cum
          perspiciatis dicta distinctio earum possimus. Saepe reiciendis
          repellendus aliquid officiis fugiat ea accusantium consequatur
          reprehenderit nesciunt vitae sequi fuga, numquam porro ad similique
          harum illo! Exercitationem illum natus, totam nam, aliquid ipsum, ut
          numquam officia aspernatur placeat facere rem commodi odit!
        </p>
      </div>
      <div className="team">
        <img src={mechanicalImg} alt="Mechanical" className="background" />
        <h2>Mechanical</h2>
        <p>
          Enim saepe doloribus consequatur itaque! Vero, nobis explicabo
          perferendis maxime mollitia quisquam at nemo, doloribus rerum
          distinctio quas maiores aperiam? Voluptas tempora placeat possimus
          enim consequatur hic doloremque id accusantium sapiente est et eius
          autem pariatur, repellat numquam aut nulla iste vel eveniet
          exercitationem nisi quod at corporis! Sapiente, maiores!
        </p>
      </div>
    </section>
  );
}
