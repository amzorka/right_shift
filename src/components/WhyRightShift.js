import "../scss/WhyRightShift.scss";
import quoteOpen from "../icons/quote-open.png";
import quoteClose from "../icons/quote-close.png";

export default function WhyRightShift() {
  return (
    <section className="why">
      <div className="why__container">
        {/* Левая часть: заголовок и текст */}
        <div className="why__left">
          <h2 className="why__title">
            ПОЧЕМУ ИМЕННО <br />
            <span className="why__highlight">RIGHT.SHIFT ?</span>
          </h2>

          <p className="why__text">
            Мы любим своё дело
            <span className="why__em">
              {" "}
              — и не ищем лёгких путей. Каждый проект для нас — не просто сайт,
            </span>{" "}
            а отражение репутации нашей студии и вклад в развитие цифрового
            потенциала бизнеса.{" "}
            <span className="why__em">Поэтому мы подходим к работе</span> с
            вниманием и трепетом,{" "}
            <span className="why__em">
              которые редко встретишь в нашей сфере.
            </span>
            <br />
            <span className="why__em">В нашей команде — </span>
            дипломированные маркетологи, бизнес-консультанты и разработчики,{" "}
            <span className="why__em">
              и их экспертиза включена в каждый проект по умолчанию. Мы
              анализируем рынок, стратегию и точки роста, чтобы сайт не просто
              «был», а помогал вашему бизнесу расти.
            </span>
          </p>
        </div>

        {/* Правая часть: цитата */}
        <div className="why__quote">
          <img src={quoteOpen} alt="«" className="why__quote-icon open" />
          <p className="why__quote-text">
            «People don’t buy what you do; they buy{" "}
            <span className="why__quote-highlight">why</span> you do it»
          </p>
          <p className="why__quote-author">
            — SIMON SINEK{" "}
            <span className="why__quote-role">
              (BUSINESS LEADERSHIP EXPERT)
            </span>
          </p>
          <img src={quoteClose} alt="»" className="why__quote-icon close" />
        </div>
      </div>
    </section>
  );
}
