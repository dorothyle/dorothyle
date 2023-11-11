import style from "./Landing.module.css";
import homeLogo from "./homeLogo.svg";
import circlePic from "./circlePic.png";
import hamburgerMenu from "./hamburgerMenu.svg";
import arrowDown from "./arrowDown.svg";

const Landing = () => {
  return (
    <section className={style.landingContainer}>
      <div className={style.navContainer}>
        <img src={homeLogo} />
        <img src={hamburgerMenu} />
      </div>

      <div className={style.bodyContainer}>
        <img src={circlePic} className={style.circlePic} />
        <h1 className={style.greeting}>Hi, I'm Dorothy</h1>
        <h2 className={style.description}>
          I am <span className={style.descriptionChanging}>a developer</span>
        </h2>
        <p className={style.bio}>
          A recent Computer Science graduate from UC Davis seeking New Grad
          Software Engineer roles!
        </p>
        <div className={style.learnContainer}>
          <p className={style.learnMore}>Learn more about me!</p>
          <img className={style.arrowDown} src={arrowDown} />
        </div>
      </div>
    </section>
  );
};

export { Landing };
