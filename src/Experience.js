import style from "./Experience.module.css";
import React, { useState, useEffect } from "react";
import { ExperienceCard } from "./ExperienceCard.js";

const Experience = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/experienceList.json");
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response);
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className={style.experienceContainer}>
      <div className={style.titleContainer}>
        <h1><span className={style.symbolTitle}>&lt;/&gt;</span> Experience</h1>
      </div>

      <div className={style.cardsContainer}>
        {data.map((item) => (
          <ExperienceCard obj={item} />
        ))}
      </div>
    </section>
  );
};

export { Experience };
