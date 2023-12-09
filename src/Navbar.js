import style from "./Navbar.module.css";
import homeLogo from "./homeLogo.svg";
import hamburgerMenu from "./hamburgerMenu.svg";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <div className={style.navbarContainer}>
        <img className={style.homeButton} src={homeLogo} />

        <div className={style.hamburger} onClick={toggleHamburger}>
          <img src={hamburgerMenu} />
        </div>
      </div>
      <div className={style.navlinksContainer}>
        <ul className={`${style.navlinks} ${hamburgerOpen ? style.open : ""}`}>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Resume</li>
        </ul>
      </div>
      <div className={`${style.blurredBackground} ${hamburgerOpen ? style.appear : ""}`}>
      </div>
    </div>
  );
};

export { Navbar };
