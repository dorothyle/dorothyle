import homeLogo from "./homeLogo.svg";
import hamburgerMenu from "./hamburgerMenu.svg";

const Hamburger = () => {
  return (
    <div className={style.navbarContainer}>
      <img className={style.homeButton} src={homeLogo} />

      <div className={style.navLinksContainer}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Resume</li>
        </ul>
        <div className={style.hamburger}>
          <img src={hamburgerMenu} />
        </div>
      </div>
    </div>
  );
};

export { Hamburger };
