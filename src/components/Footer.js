import "../scss/Footer.scss";
import tgIcon from "../icons/tg.png";
import phoneIcon from "../icons/phone.png";
import mailIcon from "../icons/mail.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Левая часть */}
        <div className="footer__about">
          <h3 className="footer__logo">RIGHT.SHIFT</h3>
          <p className="footer__desc">Цифровая студия полного цикла</p>
          <div className="footer__legal footer__legal--desktop">
            <p className="footer__copy">© Right.Shift, 2025</p>
            <p className="footer__owner">ИП Абреков Габриэль Геннадьевич</p>
          </div>
        </div>

        {/* Средняя часть */}
        <div className="footer__services">
          <p className="footer__title">Услуги:</p>
          <div className="footer__grid">
            <div className="footer__col">
              <a href="/#contact">сайты под ключ</a>
              <a href="/landings">лендинги</a>
              <a href="/corporative-sites">корпоративные сайты</a>
              <a href="/online-stores">интернет-магазины</a>
            </div>
            <div className="footer__col">
              <a href="/#contact">мобильные приложения</a>
              <a href="/#contact">tg mini apps</a>
              <a href="/#contact">блокчейн разработка</a>
              <a href="/marketing">интернет маркетинг</a>
            </div>
            <div className="footer__col">
              <a href="/#contact">3D дизайн</a>
              <a href="/#contact">брендинг</a>
              <a href="/design">UI/UX-дизайн</a>
              <a href="/content">визуальный контент</a>
            </div>
          </div>
        </div>

        {/* Правая часть */}
        <div className="footer__contacts">
          <p className="footer__title">Контакты:</p>
          <div className="footer__contact-item">
            <img
              src={tgIcon}
              alt="Telegram"
              style={{ width: "15px", height: "auto" }}
            />
            <span>
              <a
                onClick={() =>
                  window.ym &&
                  window.ym(105637380, "reachGoal", "click_telegram")
                }
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://t.me/rightshift_dev?direct"
              >
                @rightshift_dev
              </a>
            </span>
          </div>
          <div className="footer__contact-item">
            <img
              src={phoneIcon}
              alt="Телефон"
              style={{ width: "15px", height: "auto" }}
            />
            <span>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="tel:+79672220078"
              >
                +7 (967) 222-00-78
              </a>
            </span>
          </div>
          <div className="footer__contact-item">
            <img
              src={mailIcon}
              alt="Email"
              style={{
                width: "15px",
                height: "auto",
              }}
            />
            <span>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="mailto:info@rightshift.dev"
              >
                info@rightshift.dev
              </a>
            </span>
          </div>
          <div className="footer__contact-item">
            <a href="/privacy-policy" className="footer-jurisdiction">
              юридическая информация
            </a>
          </div>
        </div>

        <div className="footer__legal footer__legal--mobile">
          <p className="footer__copy">© Right.Shift, 2025</p>
          <p className="footer__owner">ИП Абреков Габриэль Геннадьевич</p>
        </div>
      </div>
    </footer>
  );
}
