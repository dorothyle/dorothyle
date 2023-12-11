import style from "./ExperienceCard.module.css";
import { Tag } from "./Tag.js";
import plusSign from "./plusSign.svg";
import minusSign from "./minusSign.svg";
import { useState } from "react";

const ExperienceCard = ({ obj }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const toggleCardOpen = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <div className={style.experienceCardContainer}>

      <div className={style.roleTitleContainer}>
        <img className={style.companyLogo} src={"/" + obj.image} />
        <h2>{obj.role}</h2>
        <img className={style.plusSign} src={plusSign} />
        <img className={style.minusSign} src={minusSign} />
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
