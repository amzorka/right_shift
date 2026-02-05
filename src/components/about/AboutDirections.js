import arrowBlack from "../../icons/arrow-dark.png";
import "../../scss/AboutDirections.scss";

export default function AboutDirections() {
  const items = [
    {
      titleBold: "интернет-магазины",
      title: ", которые удобно наполнять и развивать;",
      link: "/online-stores",
    },
    {
      titleBold: "лендинги",
      title: ", которые быстро доносят суть и приводят заявки;",
      link: "/landings",
    },
    {
      titleBold: "корпоративные",
      title: " и имиджевые сайты;",
      link: "/corporative-sites",
    },
    {
      titleBold: "дизайн и контент",
      title: " для сайтов, соц. сетей и тд;",
      link: "/design",
    },
    {
      titleBold: "цифровой маркетинг",
      title: " для брендов, желающих продавать.",
      link: "/marketing",
    },
  ];

  return (
    <section className="directions">
      <div className="directions__container">
        <h2 className="directions__title">НАШИ КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ</h2>

        <div className="directions__list">
          {items.map((item, i) => (
            <a href={item.link} key={i} className="directions__row">
              <p className="directions__text">
                <span className="bold">{item.titleBold}</span>
                {item.title}
              </p>

              <div className="directions__more">
                <span>подробнее</span>
                <img className="arrow" src={arrowBlack} alt="" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
