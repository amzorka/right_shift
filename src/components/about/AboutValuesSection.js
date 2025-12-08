import "../../scss/AboutValuesSection.scss";
import tagGreen from "../../images/about-green-tag.png"; // 172×172

export default function AboutValuesSection() {
  return (
    <section className="values">
      <div className="values__container">
        {/* верхний центрированный блок */}
        <div className="values__top">
          <h2 className="values__title">
            МЫ ЛЮБИМ НЕСТАНДАРТНЫЕ РЕШЕНИЯ И ГРАМОТНЫЙ ОТКАЗ ОТ ШАБЛОНОВ
          </h2>

          <p className="values__text values__text--first">
            Нам важна высокоуровневая эстетика: чистые интерфейсы, продуманные
            детали, цельная визуальная система. Мы одинаково внимательно
            относимся как к масштабному интернет-магазину, так и к маленькому
            лендингу, потому что мы понимаем — любой сайт становится важной
            частью репутации бренда.
          </p>
        </div>

        {/* нижний блок — картинка слева, текст справа */}
        <div className="values__bottom">
          <img src={tagGreen} alt="" className="values__tag" />

          <p className="values__text values__text--second">
            За «цифрой» у нас всегда стоят реальные бизнес-задачи. Мы гибко
            подстраиваем формат взаимодействия под клиента: кому-то удобно
            общаться коротко и по делу, кому-то нужно больше объяснений — мы
            берём это на себя. Наша задача — мягко провести вас через весь
            процесс: от формулировки идеи до понятного, измеримого результата.
          </p>
        </div>
      </div>
    </section>
  );
}
