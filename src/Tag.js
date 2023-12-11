import style from "./Tag.module.css";

const Tag = ({word}) => {
    return (
      <div className={style.tagBox}>
        {word}
      </div>
    );
  };
  
  export { Tag };