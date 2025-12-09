import "../../scss/CasesSecondPart.scss";
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";
import logo3 from "../../images/logo3.png";
import logo4 from "../../images/logo4.png";
import logo5 from "../../images/logo5.png";
import logo6 from "../../images/logo6.png";
import logo7 from "../../images/logo7.png";
import logo8 from "../../images/logo8.png";

import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import brand4 from "../../images/brand4.png";
import brand5 from "../../images/brand5.png";

import ai1 from "../../images/ai1.png";
import ai2 from "../../images/ai2.png";
import ai3 from "../../images/ai3.png";
import ai4 from "../../images/ai4.png";

export default function CasesSecondPart() {
  return (
    <section className="cases2">
      <div className="cases2__container">
        <div className="cases2__columns">
          {/* Левая половина */}
          <div className="cases2__left">
            <div className="cases2__block">
              <h3 className="cases2__subtitle">Логотипы</h3>
              <p className="cases2__text">
                Разрабатываем айдентику, которая передаёт идею и характер
                компании, делает бренд узнаваемым и последовательным во всех
                точках контакта.
              </p>

              <div className="cases2__logos">
                {[
                  { src: logo1, w: 80, h: 40 },
                  { src: logo2, w: 80, h: 80 },
                  { src: logo3, w: 80, h: 21 },
                  { src: logo4, w: 80, h: 78 },
                  { src: logo5, w: 80, h: 18 },
                  { src: logo6, w: 80, h: 37 },
                  { src: logo7, w: 80, h: 55 },
                  { src: logo8, w: 80, h: 66 },
                ].map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={`logo ${i + 1}`}
                    style={{
                      width: `${logo.w}px`,
                      height: `${logo.h}px`,
                    }}
                    className="cases2__logo"
                  />
                ))}
              </div>
            </div>

            <div className="cases2__divider"></div>

            <div className="cases2__block">
              <h3 className="cases2__subtitle">
                AI-генерации, product placement
              </h3>
              <p className="cases2__text">
                Заменяем реальные фото и видеосъёмки с помощью ИИ, экономя
                брендам время, бюджет и производственные ресурсы, не теряя в
                качестве.
              </p>

              <div className="cases2__images-row cases2__slider">
                {[ai1, ai2, ai3, ai4].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`ai ${i + 1}`}
                    className="cases2__slide"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Разделительная вертикальная линия */}
          <div className="cases2__vertical-line"></div>

          {/* Правая половина */}
          <div className="cases2__right">
            <div className="cases2__block">
              <h3 className="cases2__subtitle">Графика и 3D, брендинг</h3>
              <p className="cases2__text">
                Разрабатываем айдентику, которая передаёт идею и характер
                компании, делает бренд узнаваемым и последовательным во всех
                точках контакта.
              </p>

              <div className="cases2__grid">
                {[
                  { src: brand1, w: 278, h: 180 },
                  { src: brand2, w: 124, h: 180 },
                  { src: brand3, w: 113, h: 180 },
                  { src: brand4, w: 278, h: 150 },
                  { src: brand5, w: 267, h: 150 },
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={`brand ${i + 1}`}
                    style={{
                      width: `${img.w}px`,
                      height: `${img.h}px`,
                    }}
                    className="cases2__brand"
                  />
                ))}
              </div>
            </div>

            <div
              className="inspiration__footer"
              style={{ marginRight: 0, marginTop: "90px", marginBottom: 0 }}
            >
              <div className="inspiration__footer-top">
                <h3 className="inspiration__footer-title">КЕЙСЫ</h3>
                <div className="inspiration__square"></div>
              </div>
              <p className="inspiration__footer-text">
                4. Задачи, которые мы уже решили
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
