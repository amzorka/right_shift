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
      title: "1. Аналитика и цели",
      text: "Изучаем аудиторию, конкурентов, ищем точки роста",
    },
    {
      id: 2,
      icon: icon5,
      title: "2. Стратегия и медиаплан",
      text: "Определяем каналы, строим планы, ставим KPI и бюджет",
    },
    {
      id: 3,
      icon: icon6,
      title: "3. Контент и креатив",
      text: "Создаём визуалы и тексты, работающие на стратегию",
    },
    {
      id: 4,
      icon: icon4,
      title: "4. Запуск и управление",
      text: "Настраиваем, оптимизируем, тестируем",
    },
    {
      id: 5,
      icon: icon3,
      title: "5. Аналитика и развитие",
      text: "Смотрим в цифры, корректируем, масштабируем",
    },
    {
      id: 6,
      icon: icon2,
      title: "6. Эксперименты и рост",
      text: "Предлагаем новые идеи, каналы и решения для нового роста",
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
