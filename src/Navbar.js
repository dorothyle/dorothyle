import homeLogo from "./homeLogo.svg";

const Navbar = () => {
  return (
    <div className={style.navBarContainer}>
      <img className={style.homeButton} src={homeLogo} />

      <div className={style.navLinksContainer}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
};

export { Navbar };
