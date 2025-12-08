import "../../scss/ApproachSection.scss";
import icon1 from "../../icons/approach-1.png";
import icon2 from "../../icons/approach-2.png";
import icon3 from "../../icons/approach-3.png";
import icon4 from "../../icons/approach-4.png";
import icon5 from "../../icons/approach-5.png";
import icon6 from "../../icons/approach-6.png";

export default function ApproachSection() {
  // const ditems = [
  //   {
  //     id: 1,
  //     icon: icon1,
  //     title: "1. Знакомство и анализ",
  //     text: "Вникаем в задачу, анализируем рынок и аудиторию",
  //   },
  //   {
  //     id: 2,
  //     icon: icon4,
  //     title: "4. Разработка",
  //     text: "Строим проект, используя самые актуальные технологии",
  //   },
  //   {
  //     id: 3,
  //     icon: icon2,
  //     title: "2. Концепция и стратегия",
  //     text: "Формируем структуру и вектор развития проекта",
  //   },
  //   {
  //     id: 4,
  //     icon: icon5,
  //     title: "5. Тестирование и запуск",
  //     text: "Проверяем каждую деталь, чтобы всё работало безукоризненно",
  //   },
  //   {
  //     id: 5,
  //     icon: icon3,
  //     title: "3. Дизайн и UX",
  //     text: "Ведем клиента по красивым и понятным «дорожкам»",
  //   },
  //   {
  //     id: 6,
  //     icon: icon6,
  //     title: "6. Поддержка",
  //     text: "Не исчезаем после релиза — помогаем расти дальше",
  //   },
  // ];

  const ditems = [
    {
      id: 1,
      icon: icon1,
      title: "1. Знакомство и анализ",
      text: "Вникаем в задачу, анализируем рынок и аудиторию",
    },
    {
      id: 2,
      icon: icon2,
      title: "2. Концепция и стратегия",
      text: "Формируем структуру и вектор развития проекта",
    },
    {
      id: 3,
      icon: icon3,
      title: "3. Дизайн и UX",
      text: "Ведем клиента по красивым и понятным «дорожкам»",
    },
    {
      id: 4,
      icon: icon4,
      title: "4. Разработка",
      text: "Строим проект, используя самые актуальные технологии",
    },
    {
      id: 5,
      icon: icon5,
      title: "5. Тестирование и запуск",
      text: "Проверяем каждую деталь, чтобы всё работало безукоризненно",
    },
    {
      id: 6,
      icon: icon6,
      title: "6. Поддержка",
      text: "Не исчезаем после релиза — помогаем расти дальше",
    },
  ];

  return (
    <section className="approach">
      <div className="approach__container">
        <h2 className="approach__title">НАШ ПОДХОД</h2>
        <p className="approach__text">
          Каждый проект начинается с понимания — продукта, аудитории, логики
          продаж. Мы погружаемся в задачу так, чтобы увидеть не только то «что»
          нужно сделать, но ещё «как» и «зачем». Дальше всё идёт своим ритмом:
          стратегия, дизайн, разработка, тесты, запуск. Никакой лишней суеты —
          только диалог, ответственность и взаимное уважение.
        </p>

        <div className="approach__grid">
          {ditems.map((item) => (
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
