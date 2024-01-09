import style from "./Tag.module.css";

const Tag = ({word}) => {
    return (
      <div className={style.tagBox}>
        <p>{word}</p>
      </div>
    );
  };
  
  export { Tag };