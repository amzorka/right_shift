import "../../scss/ApproachSection.scss";
import icon1 from "../../icons/approach-1.png";
import icon2 from "../../icons/approach-2.png";
import icon3 from "../../icons/approach-3.png";
import icon4 from "../../icons/writing.png";
import icon5 from "../../icons/approach-4.png";
import icon6 from "../../icons/approach-5.png";

export default function ApproachSection() {
  const items = [
    {
      id: 1,
      icon: icon1,
      title: "1. Анализ задачи и аудитории",
      text: "Понимаем продукт, его ценность и кому он нужен",
    },
    {
      id: 2,

      icon: icon2,
      title: "2. Стратегия и структура",
      text: "Продумываем сценарий: что человек увидит, подумает и сделает",
    },
    {
      id: 3,

      icon: icon3,
      title: "3. Тексты и визуальная концепция",
      text: "Создаём контент, который говорит ясно и вызывает доверие",
    },
    {
      id: 4,

      icon: icon4,
      title: "4. Дизайн и анимация",
      text: "Выстраиваем визуал: чисто, современно и без шума",
    },
    {
      id: 5,
      icon: icon5,
      title: "5. Разработка и интеграции",
      text: "Собираем всё в точную, быструю и устойчивую систему",
    },
    {
      id: 6,
      icon: icon6,
      title: "6. Тестирование и запуск",
      text: "Проверяем каждую деталь и запускаем конечный продукт",
    },
  ];

  return (
    <section className="approach">
      <div className="approach__container">
        <h2 className="approach__title">НАШ ПОДХОД</h2>
        <p className="approach__text">
          Каждый проект начинается с понимания — продукта, аудитории и цели. Мы
          встаем на место пользователя, формируем ожидания, после чего
          определяем структуру, тексты, визуальную динамику, и только потом идём
          в дизайн, разработку, интеграции. Ну и в финале — тесты, запуск,
          аналитика и поддержка.
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
