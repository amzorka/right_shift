import { useState, useEffect } from "react";
import "../../scss/ContactForm.scss";
import arrowIcon from "../../icons/arrow-right.png"; // замени путь под свой
import chevron from "../../icons/chevron.png";
import { useMobile } from "../../hooks/useMobile";
import { useLocation } from "react-router-dom";

export default function ContactForm() {
  const isMobile = useMobile();

  const defaultServiceByPath = {
    "/landings": "лендинги",
    "/corporative-sites": "корпоративные сайты",
    "/online-stores": "интернет-магазины",
    "/marketing": "интернет маркетинг",
    "/design": "UI/UX-дизайн",
    "/content": "визуальный контент",
  };

  const location = useLocation();

  const [projectType, setProjectType] = useState("");
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState("Telegram");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactValue, setContactValue] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState({});

  // Автоподстановка услуги на основе URL
  useEffect(() => {
    const selected = defaultServiceByPath[location.pathname];
    if (selected) {
      setProjectType(selected);
    }
  }, [location.pathname]);

  const projectOptions = [
    "мобильные приложения",
    "сайты под ключ",
    "tg mini apps",
    "корпоративные сайты",
    "UI/UX-дизайн",
    "интернет маркетинг",
    "3D дизайн",
    "лендинги",
    "брендинг",
    "блокчейн разработка",
    "интернет-магазины",
    "визуальный контент",
  ];

  const contactOptions = ["E-mail", "Telegram", "Телефон", "WhatsApp"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!projectType.trim()) newErrors.projectType = "Выберите тип проекта";
    if (!name.trim()) newErrors.name = "Введите имя";
    if (!contactValue.trim()) newErrors.contactValue = "Укажите контакт";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log({
        projectType,
        name,
        contactMethod,
        contactValue,
        details,
      });
      alert("Спасибо! Ваша заявка отправлена 💜");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        {/* Левая часть */}
        {!isMobile && (
          <div className="contact__left">
            <h2 className="contact__title">
              ДАВАЙТЕ ОБСУДИМ <br />
              <span className="contact__subtitle">ВАШ ПРОЕКТ</span>
            </h2>

            <p className="contact__text">
              <span className="contact__text--muted">оставьте</span> удобные вам
              контактные данные для связи, скажите пару слов о задаче и{" "}
              <span className="contact__text--muted">
                мы все продумаем, просчитаем и предложим решение. без спама,
                навязчивых сообщений и прочего –
              </span>{" "}
              вы даете задачу, мы предлагаем решение <br /> — выбор за вами.
            </p>

            {/* Футер слева — ТОЛЬКО на десктопе */}
            <div className="contact__footer">
              <div className="philosophy__subblock">
                <div className="philosophy__square"></div>
                <h3 className="philosophy__subtitle">ОБРАТНАЯ СВЯЗЬ</h3>
              </div>
              <p className="philosophy__subtext">
                5. Мы все посчитаем и предложим решение
              </p>
            </div>
          </div>
        )}

        {/* Правая часть (форма) */}

        {isMobile && (
          <h2 className="contact__title mobile">
            ДАВАЙТЕ ОБСУДИМ <br />
            <span className="contact__subtitle">ВАШ ПРОЕКТ</span>
          </h2>
        )}

        {isMobile && (
          <p className="contact__text">
            <span className="contact__text--muted">оставьте</span> удобные вам
            контактные данные для связи, скажите пару слов о задаче и{" "}
            <span className="contact__text--muted">
              мы все продумаем, просчитаем и предложим решение. без спама,
              навязчивых сообщений и прочего –
            </span>{" "}
            вы даете задачу, мы предлагаем решение <br /> — выбор за вами.
          </p>
        )}

        <div className="contact__right">
          <h3 className="contact__form-title">Пару слов о вашей задаче</h3>

          <form className="contact__form" onSubmit={handleSubmit}>
            {/* Проект */}
            {/* Выбор проекта */}
            <div className="contact__dropdown">
              <input
                type="text"
                className={`contact__input contact__input--select ${
                  isProjectOpen ? "open" : ""
                } ${errors.projectType ? "error" : ""}`}
                placeholder="Что будем делать? Нажмите для выбора / введите свое"
                value={projectType}
                onChange={(e) => {
                  setProjectType(e.target.value);
                  setIsProjectOpen(true);
                }}
                onFocus={() => setIsProjectOpen(true)}
                onBlur={() => setTimeout(() => setIsProjectOpen(false), 200)}
              />
              <img
                src={chevron}
                alt=""
                className={`arrow arrow-first ${isProjectOpen ? "open" : ""}`}
                width={15}
                height={8}
                draggable={false}
                onClick={() => setIsProjectOpen(!isProjectOpen)}
              />

              {isProjectOpen && (
                <div className="contact__dropdown-list">
                  {projectOptions
                    .filter((opt) =>
                      opt.toLowerCase().includes(projectType.toLowerCase())
                    )
                    .map((option) => (
                      <div
                        key={option}
                        className="contact__dropdown-item"
                        onMouseDown={() => {
                          setProjectType(option);
                          setIsProjectOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Имя */}
            <input
              type="text"
              className={`contact__input ${errors.name ? "error" : ""}`}
              placeholder="Как к вам можно обращаться?"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Контакт */}
            <div className="contact__contact-row">
              <div className="contact__select-wrapper">
                <div
                  className={`contact__input contact__input--select small ${
                    isContactOpen ? "opened" : ""
                  } ${errors.contactValue ? "error" : ""}`}
                  onClick={() => setIsContactOpen(!isContactOpen)}
                >
                  {contactMethod}
                  <img
                    src={chevron}
                    alt=""
                    className={`arrow ${isContactOpen ? "open" : ""}`}
                    width={15}
                    height={8}
                    draggable={false}
                  />
                </div>
              </div>

              <input
                type="text"
                className={`contact__input contact__input--half ${
                  errors.contactValue ? "error" : ""
                }`}
                placeholder={
                  contactMethod === "Telegram"
                    ? "@vash_nickname"
                    : contactMethod === "E-mail"
                    ? "vasha_pochta@pochta.ru"
                    : "+7 (999) 999-99-99"
                }
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
              />

              {isContactOpen && (
                <div className="contact__dropdown-list small">
                  {contactOptions.map((option) => (
                    <div
                      key={option}
                      className="contact__dropdown-item"
                      onClick={() => {
                        setContactMethod(option);
                        setIsContactOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Описание */}
            <textarea
              className="contact__textarea"
              placeholder="Расскажите пару слов о проекте (по желанию)"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            {/* Подпись */}
            <p className="contact__agreement">
              Нажимая кнопку «Обсудить проект» вы соглашаетесь с{" "}
              <a href="/privacy-policy">политикой конфиденциальности</a>
            </p>

            {/* Кнопка */}
            <button
              className="intro-section__button"
              style={{ marginBottom: "80px" }}
            >
              <span className="intro-section__button-text">
                обсудить проект
              </span>
              <img
                src={arrowIcon}
                alt="Arrow icon"
                className="intro-section__button-icon"
              />
            </button>

            {isMobile && (
              <div className="contact__footer mobile">
                <div className="philosophy__subblock">
                  <div className="philosophy__square"></div>
                  <h3 className="philosophy__subtitle">ОБРАТНАЯ СВЯЗЬ</h3>
                </div>
                <p className="philosophy__subtext">
                  5. Мы все посчитаем и предложим решение
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
