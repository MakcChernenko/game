import { useState, useEffect } from "react";
import css from "./avantyurist.module.css";
import avantyurist from "../../data/avantyurist/avantyurist";

const Avantyurist = ({ setMusicUrl }) => {
  const [scene, setScene] = useState("start");
  const current = avantyurist[scene];

  useEffect(() => {
    if (current.music) {
      setMusicUrl(current.music);
    }
  }, [scene, current, setMusicUrl]);

  const handleChoice = (opt) => {
    setScene(opt.next);
  };

  return (
      <div className={css.container}>
        <div className={`${css.section} ${css.description}`}>
          {current.text}
        </div>
        <div className={`${css.section} ${css.img}`}>
          <img src={current.img} alt="#" />
        </div>
        <div className={`${css.section} ${css.selector}`}>
          <ul>
            {current.options.map((opt, i) => (
              <li key={i}>
                <button className={css.button} onClick={() => handleChoice(opt)}>{opt.text}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${css.section} ${css.state}`}>Інвентар</div>
      </div>
  );
};

export default Avantyurist;
