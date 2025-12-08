import "../../scss/AboutTeam.scss";

import p1 from "../../images/team1.png";
import p2 from "../../images/team2.png";
import p3 from "../../images/team3.png";
import p4 from "../../images/team4.png";
import p5 from "../../images/team5.png";
import p6 from "../../images/team6.png";
import p7 from "../../images/team7.png";
import p8 from "../../images/team8.png";

const team = [
  {
    img: p1,
    name: "Габриэль Абреков",
    role: "Founder, General & Creative Director",
  },
  {
    img: p2,
    name: "Филипп Шульц",
    role: "Head of Development, Blockchain Engineer",
  },
  {
    img: p3,
    name: "Артур Гинзбург",
    role: "Lead Frontend Developer",
  },
  {
    img: p4,
    name: "Заурбек Тедеев",
    role: "Lead Backend Developer",
  },
  {
    img: p5,
    name: "Сандро Размадзе",
    role: "Head of Design & Graphics",
  },
  {
    img: p6,
    name: "Амзор Салбиев",
    role: "Frontend Developer",
  },
  {
    img: p7,
    name: "Александр Панин",
    role: "Creative Producer",
  },
  {
    img: p8,
    name: "Иван Колобков",
    role: "Marketing & Growth",
  },
];

export default function AboutTeam() {
  return (
    <section className="team">
      <div className="team__container">
        <h2 className="team__title">ЛИЦА НАШЕЙ КОМАНДЫ</h2>

        <p className="team__subtitle">
          А вот как мы выглядим, если перевести студию из режима «сайты и кейсы»
          в режим «люди». Здесь — основная часть нашей команды; те, кто каждый
          день принимает продуктовые решения, следит за кодом, визуалом,
          контентом и ростом проектов.
        </p>

        <div className="team__grid">
          {team.map((person, i) => (
            <div className="team__item" key={i}>
              <img src={person.img} alt={person.name} className="team__photo" />
              <h3 className="team__name">{person.name}</h3>
              <p className="team__role">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
