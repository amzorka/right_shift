import "../../scss/IntroSection.scss";
import heroImage from "../../images/hero-image.png"; // замени на свой путь к картинке
import arrowIcon from "../../icons/arrow-right.png"; // замени путь под свой
import { useMobile } from "../../hooks/useMobile";
import grid from "../../images/about-grid.png";

export default function IntroSection() {
  const isMobile = useMobile();

  const services = [
    [
      { name: "сайты под ключ", link: "#contact" },
      { name: "интернет магазины", link: "/online-stores" },
      { name: "лендинги", link: "/landings" },
      { name: "корпоративные сайты", link: "/corporative-sites" },
    ],
    [
      { name: "SaaS-платформы", link: "#contact" },
      { name: "мобильные приложения", link: "#contact" },
      { name: "tg mini apps", link: "#contact" },
      { name: "UI/UX-дизайн", link: "/design" },
      { name: "3D дизайн", link: "#contact" },
    ],
    [
      { name: "блокчейн разработка", link: "#contact" },
      { name: "брендинг", link: "#contact" },
      { name: "интернет маркетинг", link: "/marketing" },
      { name: "визуальный контент", link: "/content" },
    ],
  ];

  return (
    <section className="intro-section">
      <div className="intro-section__container">
        {isMobile && (
          <div className="intro__grid-wrapper">
            <div className="intro__grid-glow"></div>
            <img src={grid} alt="" className="intro__grid" />
          </div>
        )}

        <h1 className="intro-section__title">RIGHT.SHIFT</h1>

        {isMobile && (
          <p className="intro-section__subtitle">
            Цифровая студия полного цикла
          </p>
        )}

        <div className="intro-section__services">
          {services.map((row, i) => (
            <div key={i} className="intro-section__row">
              {row.map((service, j) => (
                <a
                  key={j}
                  href={service.link}
                  className="intro-section__service"
                >
                  {service.name}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="intro-section__content">
          <img
            src={heroImage}
            alt="Team working illustration"
            className="intro-section__image"
          />
          <div className="intro-section__text-block">
            <p className="intro-section__text">
              <span className="intro-section__highlight">
                «right.shift — это не просто кнопка,
              </span>{" "}
              это шаг в сторону роста, ясной логики и сильного визуала.{" "}
              <span className="intro-section__highlight">
                мы запускаем продукты, которые добиваются поставленных целей,
                снимая с клиента заботы
              </span>{" "}
              — вы занимаетесь своим бизнесом, а мы проводим его в цифровое
              пространство»
            </p>

            <a href="#contact" className="intro-section__button">
              <span className="intro-section__button-text">
                обсудить проект
              </span>
              <img
                src={arrowIcon}
                alt="Arrow icon"
                className="intro-section__button-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
