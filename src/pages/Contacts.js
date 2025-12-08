import "../scss/Contacts.scss";
import qr from "../images/qr.png";
import iconTelegram from "../icons/tg.png";
import iconCall from "../icons/phone.png";
import iconMail from "../icons/mail.png";
import { useMobile } from "../hooks/useMobile";
import MobileHeader from "../components/MobileHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { initSmoothScroll } from "../utils/lenis";

export default function Contacts() {
  const isMobile = useMobile();
  const lenis = initSmoothScroll();

  return (
    <section className="contacts">
      {isMobile ? <MobileHeader /> : <Header />}
      <div className="contacts__container">
        <div className="contacts__top">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="contacts__left">
            <p className="contacts__subtitle">КОНТАКТЫ</p>
            <h1 className="contacts__title">МЫ НА СВЯЗИ</h1>
            <p className="contacts__desc">
              Пишите в любое время, звоните с 10:00 до 21:00 (Москва / GMT+3).
              Обсудим, продумаем, посчитаем и воплотим в жизнь. Мы любим рвать
              шаблоны, потому готовы поддерживать неформальное общение — будем
              действовать так, как комфортно Вам.
            </p>

            <div className="contacts__qr-block">
              <img src={qr} alt="QR" className="contacts__qr" />
              <p className="contacts__qr-caption">
                Отсканируйте QR-код, чтобы сразу перейти к диалогу в Telegram
              </p>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="contacts__right">
            <div className="contacts__item mt">
              <img src={iconTelegram} alt="" className="contacts__icon" />
              <p className="contacts__label">Telegram</p>
            </div>
            <a
              href="https://t.me/rightshift_dev"
              className="contacts__link contacts__link--big"
              onClick={() =>
                window.ym && window.ym(105637380, "reachGoal", "click_telegram")
              }
            >
              @rightshift_dev
            </a>

            <div className="contacts__item mt">
              <img src={iconCall} alt="" className="contacts__icon" />
              <p className="contacts__label">Телефон, WhatsApp</p>
            </div>
            <a
              style={{ textDecoration: "none" }}
              href="tel:+79672220078"
              className="contacts__link contacts__link--big"
            >
              +7 967 222-00-78
            </a>

            <div className="contacts__item mt">
              <img src={iconMail} alt="" className="contacts__icon" />
              <p className="contacts__label">E-mail</p>
            </div>

            <div className="contacts__mails">
              <div>
                <p className="contacts__label-small">
                  Отдел продаж и информации
                </p>
                <p
                  style={{ textDecoration: "none" }}
                  className="contacts__mail"
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="mailto:info@rightshift.dev"
                  >
                    info@rightshift.dev
                  </a>
                </p>
              </div>

              <div className="mt-small">
                <p className="contacts__label-small">
                  Директор — для особенных вопросов
                </p>
                <p
                  style={{ textDecoration: "none" }}
                  className="contacts__mail"
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="mailto:info@gabrielabrekov.ru"
                  >
                    info@gabrielabrekov.ru
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
