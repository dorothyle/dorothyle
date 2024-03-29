import style from "./ExperienceCard.module.css";
import { Tag } from "./Tag.js";
import plusSign from "./plusSign.svg";
import minusSign from "./minusSign.svg";
import { useRef, useState } from "react";

const ExperienceCard = ({ obj }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const toggleCardOpen = () => {
    setCardOpen(!cardOpen);
  };

  const openCardRef = useRef();
  const closedCardRef = useRef();

  return (
    <div
      className={`${style.experienceCardContainer} ${
        cardOpen ? style.open : ""
      }`}
      ref={openCardRef}
      style={
        cardOpen
          ? { height: openCardRef.current.scrollHeight + "px" }
          : { }
      }
    >
      <div className={style.roleTitleContainer} onClick={toggleCardOpen}>
        <div className={style.companyInfoContainer}>
          <div className={style.companyLogoContainer}>
            <img className={style.companyLogo} src={"/" + obj.image} />
          </div>
          <h2>{obj.role}</h2>
        </div>
        <img
          className={`${style.plusSign} ${cardOpen ? style.noShow : ""}`}
          src={plusSign}
        />
        <img
          className={`${style.minusSign} ${cardOpen ? style.show : ""}`}
          src={minusSign}
        />
      </div>
      <div className={style.contentContainer}>
        <div className={style.subheadingContainer}>
          <h3>{obj.company}</h3>
          <h3>
            {obj.startDate} - {obj.endDate}
          </h3>
        </div>

        <div className={style.descriptionContainer}>
          {obj.description.map((bulletPoint) => (
            <p>{bulletPoint}</p>
          ))}
        </div>

        <div className={style.tagsContainer}>
          {obj.tags.map((tagWord) => (
            <Tag word={tagWord} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ExperienceCard };
