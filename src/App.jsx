import { useState } from "react";
import "./App.css";
import demo from "../src/data/promo/story";
import avantyurist from "../src/data/avantyurist/avantyurist";
import games from "../src/data/main/main";

const allGames = {
  demo,
  avantyurist,
};

function App() {
  const [activeGame, setActiveGame] = useState(null);
  const [scene, setScene] = useState("start");
  const [inventory, setInventory] = useState([]);

  let current;

  if (!activeGame) {
    current = games[scene];
  } else {
    const game = allGames[activeGame];
    current = game[scene] || {
      text: "Сцену не знайдено",
      img: "",
      options: [],
    };
  }

  const handleChoice = (option) => {
    if (
      !activeGame &&
      (option.next === "demo" || option.next === "avantyurist")
    ) {
      setActiveGame(option.next);
      setScene("start");
    } else {
      setScene(option.next);
    }

    if (option.inventory) {
      setInventory((prev) => [...prev, ...option.inventory]);
    }
  };

  return (
    <main className="container">
      <div className="main">
        <div className="section description">{current.text}</div>
        <div className="section img">
          {current.img && <img src={current.img} alt="scene" />}
        </div>
        <div className="section selector">
          <ul>
            {current.options?.map((opt, i) => (
              <li key={i}>
                <button className="button" onClick={() => handleChoice(opt)}>
                  {opt.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {activeGame && (
          <div className="section state">
            <p>🎒 Інвентар:</p>
            <ul>
              {inventory.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
