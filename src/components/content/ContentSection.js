import "../../scss/ApproachSection.scss";
import icon1 from "../../icons/approach-1.png";
import icon2 from "../../icons/approach-2.png";
import icon3 from "../../icons/approach-3.png";
import icon4 from "../../icons/approach-4.png";
import icon5 from "../../icons/approach-5.png";
import icon6 from "../../icons/writing.png";

export default function ApproachSection() {
  const items = [
    {
      id: 1,
      icon: icon1,
      title: "1. Погружение и постановка задачи",
      text: "Определяем цели, смысл и контекст будущего визуала",
    },
    {
      id: 2,
      icon: icon5,
      title: "2. Концепция и подбор стиля",
      text: "Изучаем формат использования, композицию, цвет, материалы и тд",
    },
    {
      id: 3,

      icon: icon4,
      title: "3. Выбор метода производства",
      text: "Определяем, что даст лучший результат под задачу",
    },
    {
      id: 4,
      icon: icon6,
      title: "4. Создание визуала",
      text: "Делаем первичную визуализацию или черновой рендер/макет",
    },
    {
      id: 5,
      icon: icon3,
      title: "5. Детализация и доведение до финала",
      text: "Делаем визуал цельным и «читающимся» с первого взгляда",
    },
    {
      id: 6,
      icon: icon2,
      title: "6. Адаптация под форматы",
      text: "Готовим итоговые материалы в нужных форматах",
    },
  ];

  return (
    <section className="approach">
      <div className="approach__container">
        <h2 className="approach__title">НАШ ПОДХОД</h2>
        <p className="approach__text">
          Мы выстраиваем маркетинг как цельную экосистему, а не как простой
          набор разрозненных инструментов. Каждый проект начинается с
          предварительной аналитики, продолжается выверенной стратегией и
          завершается конкретным результатом.
        </p>

        <div className="approach__grid">
          {items.map((item) => (
            <div className="approach__card" key={item.id}>
              <img src={item.icon} alt="" className="approach__icon" />
              <div className="approach__info">
                <h3 className="approach__card-title">{item.title}</h3>
                <p className="approach__card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
