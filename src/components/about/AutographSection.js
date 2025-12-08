import "../../scss/AutographSection.scss";
import autographImg from "../../images/autograph.png"; // right.shift подпись 465×200

export default function AutographSection() {
  return (
    <section className="autograph">
      <div className="autograph__container">
        <div className="autograph__card">
          <p className="autograph__quote">
            «Мы спокойные, лёгкие в общении эксперты — не только в digital, но и
            в реальном контексте: искусстве, бизнесе, психологии. С нами
            комфортно и тем, кто давно на рынке, и тем, кто только заходит в
            цифровую среду. Если у вас есть идея, продукт или бизнес — мы
            поможем упаковать, объяснить и показать его так, чтобы это увидели и
            поняли нужные люди»
          </p>
        </div>

        <div className="autograph__logo-wrap">
          <img
            src={autographImg}
            alt="right.shift autograph"
            className="autograph__logo"
          />
        </div>
      </div>
    </section>
  );
}
