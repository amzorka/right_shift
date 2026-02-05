import "../../scss/ContentEcommerce.scss";
import { useMobile } from "../../hooks/useMobile";

import img1 from "../../images/content1.png";
import img2 from "../../images/content2.png";
import img3 from "../../images/content3.png";
import img3l from "../../images/content3l.png";
import img4 from "../../images/brand2.png";
import img5 from "../../images/ai3.png";
import img6 from "../../images/content6.png";
import img6l from "../../images/brand1.png";

export default function EcommerceSection() {
  const isMobile = useMobile();

  const desktopImages = (
    <>
      <img
        src={img1}
        alt="img"
        className="content__image1"
        style={{ width: "135px", height: "180px" }}
      />
      <img
        src={img2}
        alt="img"
        className="content__image2"
        style={{ width: "131px", height: "180px" }}
      />
      <img
        src={img3}
        alt="img"
        className="content__image3"
        style={{ width: "auto", height: "180px" }}
      />
      <img
        src={img3l}
        alt="img"
        className="content__image3-l"
        style={{ width: "283px", height: "180px" }}
      />
      <img
        src={img4}
        alt="img"
        className="content__image4"
        style={{ width: "124px", height: "180px" }}
      />
      <img
        src={img5}
        alt="img"
        className="content__image5"
        style={{ width: "135px", height: "180px" }}
      />
      <img
        src={img6}
        alt="img"
        className="content__image6"
        style={{ width: "auto", height: "180px" }}
      />
      <img
        src={img6l}
        alt="img"
        className="content__image6-l"
        style={{ width: "283px", height: "180px" }}
      />
    </>
  );

  // Мобильная версия → порядок и размеры строго как ты просил
  const mobileImages = (
    <>
      <img
        src={img1}
        alt="img"
        className="content__image1"
        style={{ width: "90px", height: "120px" }}
      />
      <img
        src={img2}
        alt="img"
        className="content__image2"
        style={{ width: "88px", height: "120px" }}
      />
      <img
        src={img3l}
        alt="img"
        className="content__image3-l"
        style={{ width: "154px", height: "120px" }}
      />

      <img
        src={img4}
        alt="img"
        className="content__image4"
        style={{ width: "90px", height: "120px" }}
      />
      <img
        src={img6l}
        alt="img"
        className="content__image6-l"
        style={{ width: "160px", height: "120px" }}
      />
      <img
        src={img5}
        alt="img"
        className="content__image5"
        style={{ width: "90px", height: "120px" }}
      />
    </>
  );

  return (
    <section className="ecommerce">
      <div className="ecommerce__container">
        <div className="ecommerce__header">
          <h2 className="ecommerce__title">
            ЧТО ДЛЯ НАС КАЧЕСТВЕННЫЙ
            <br />
            <span className="ecommerce__highlight">КАЧЕСТВЕННЫЙ КОНТЕНТ</span>
          </h2>
          <div className="ecommerce__line"></div>
        </div>

        <div className="ecommerce__content">
          <p className="ecommerce__text">
            Качественный контент говорит быстрее, чем любой текст: он мгновенно
            передаёт настроение бренда и объясняет идею буквально за секунду.
            Графика, 3D и AI-визуал мы объединяем в одну визуальную систему, где
            каждый формат выполняет свою роль, формируя цельное, понятное и
            сильное представление о продукте.
            <br />
            <br />
            Мы уделяем внимание свету, композиции, ритму кадра, цвету, фактурам
            и визуальной иерархии. Изучаем продукт и поведение аудитории, чтобы
            контент выглядел естественно, вызывал доверие и решал бизнес-задачи.
            <br />
            <br />
            Также хотим напомнить, что мы занимаемся{" "}
            <span className="ecommerce__link">
              <a href="/online-stores">разработкой сайтов</a>
            </span>{" "}
            и{" "}
            <span className="ecommerce__link">
              <a href="/marketing">маркетингом</a>
            </span>
            , помогая брендам выстраивать эффективное взаимодействие с
            аудиторией. Для крупных брендов мы предлагаем выгодные долгосрочные
            условия по данным услугам.
          </p>

          <div className="content-grid">
            {isMobile ? mobileImages : desktopImages}
          </div>
        </div>
      </div>
    </section>
  );
}
