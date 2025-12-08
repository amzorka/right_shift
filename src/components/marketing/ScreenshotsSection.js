import "../../scss/ScreenshotsSection.scss";

import img1 from "../../images/screen1.png";
import img2 from "../../images/screen2.png";
import img3 from "../../images/screen3.png";
import img4 from "../../images/screen4.png";
import img5 from "../../images/screen5.png";
import img6 from "../../images/screen6.png";

export default function ScreenshotsSection() {
  return (
    <section className="screenshots">
      <div className="screenshots__container">
        <div className="screenshots__header">
          <h2 className="screenshots__title">
            А здесь несколько скриншотов...
          </h2>
          <div className="screenshots__line"></div>
        </div>

        <p className="screenshots__text">
          «Мы готовы делиться кадрами процесса работы, потому что <br /> видим
          красоту в каждом моменте созидания»
        </p>

        <div className="screenshots__grid">
          <img src={img1} alt="screenshot 1" className="screenshots__image" />
          <img src={img2} alt="screenshot 2" className="screenshots__image" />
          <img src={img3} alt="screenshot 3" className="screenshots__image" />
          <img src={img4} alt="screenshot 4" className="screenshots__image" />
          <img src={img5} alt="screenshot 5" className="screenshots__image" />
          <img src={img6} alt="screenshot 6" className="screenshots__image" />
        </div>
      </div>
    </section>
  );
}
